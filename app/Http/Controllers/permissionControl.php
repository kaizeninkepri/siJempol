<?php

namespace App\Http\Controllers;

use App\mdrolesPermission;
use App\model\mdroles;
use App\model\mdrolesModul;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class permissionControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'modul') {
            return self::moduldata($r);
        } elseif ($type == 'permissiondata') {
            return self::permissiondata($r);
        } elseif ($type == 'insert') {
            return self::store($r);
        } elseif ($type == 'permissiondataByrolesId') {
            return self::permissiondataByrolesId($r);
        } elseif ($type == 'update') {
            return self::updateData($r);
        }
    }

    function data(Request $r)
    {

        $perPage = Request()->has('per_page') ? (int) Request()->per_page : null;
        if ($r->exists('filter')) {
            $value = "%{$r->filter}%";
            $pag =  mdroles::where("role", 'like', $value)
                ->paginate();
        } else {
            $pag =  mdroles::paginate();
        }
        return $pag;
    }

    function permissiondata(Request $r)
    {
        mdrolesModul::$withoutAppends = true;
        $modul =  mdrolesModul::where("type", "parent")
            ->orderBy("nama", "ASC")->get();
        $a = array(
            "create" => false,
            "read" => false,
            "update" => false,
            "delete" => false,
        );

        foreach ($modul as $index => $m) {
            $m->crud =  $a;
            // array_push($m, $a);

            $modulChild = mdrolesModul::where("parent_id", $m->role_modul_id)
                ->orderBy("nama", "DESC")->get();
            // return $modulChild;
            $collection = collect($modulChild);

            $collection->each(function ($item, $key) use ($a) {
                $item->crud = $a;
            });
            $data[] = array("parent" => $m, "child" => $modulChild);
        }
        return $data;
    }

    public static function permissiondataByrolesId(Request $r)
    {
        $roleId = $r->get('data');
        // $roleId = "40";
        $modul =  mdrolesModul::with(['permission' => function ($m) use ($roleId) {
            $m->where("role_id", $roleId);
        }])->withCount('permission')->where("type", "parent")->orderBy("nama", "ASC")->get();


        $collectionParent = collect($modul);
        $collectionParent->each(function ($item, $key) {
            if ($item->permission == null) {
                $item->crud = array(
                    "create" => false,
                    "read" => false,
                    "update" => false,
                    "delete" => false,
                );
            } else {

                $item->crud = array(
                    "create" => json_decode($item->permission->create),
                    "read" => json_decode($item->permission->read),
                    "update" => json_decode($item->permission->update),
                    "delete" => json_decode($item->permission->delete),
                );
            }
        });
        foreach ($modul as $index => $m) {



            $modulChild = mdrolesModul::with(['permission' => function ($q)  use ($roleId) {
                $q->where("role_id", $roleId);
            }])->withCount('permission')->where("parent_id", $m->role_modul_id)->orderBy("nama", "ASC")->get();

            $collectionChild = collect($modulChild);
            $collectionChild->each(function ($item, $key) {
                if ($item->permission == null) {
                    $item->crud = array(
                        "create" => false,
                        "read" => false,
                        "update" => false,
                        "delete" => false,
                    );
                } else {

                    $item->crud = array(
                        "create" => json_decode($item->permission->create),
                        "read" => json_decode($item->permission->read),
                        "update" => json_decode($item->permission->update),
                        "delete" => json_decode($item->permission->delete),
                    );
                }
            });


            $data[] = array("parent" => $m, "child" => $modulChild);
        }
        return $data;
    }

    function store(Request $r)
    {
        $data = $r->get("data");
        $roles = $r->get("roles");

        $toRoles = array(
            "role" => $roles['role'],
            "is_active" => $roles['is_active'],
        );

        mdroles::insert($toRoles);
        $roleId = DB::getPdo()->lastInsertId();


        foreach ($data as $index => $d) {
            $parent = array(
                "role_id" => $roleId,
                "role_modul_id" => $d['parent']['role_modul_id'],
                "read" => json_encode($d['parent']['crud']['read']),
                "create" => json_encode($d['parent']['crud']['create']),
                "update" => json_encode($d['parent']['crud']['update']),
                "delete" => json_encode($d['parent']['crud']['delete'])
            );
            mdrolesPermission::insert($parent);

            foreach ($d['child'] as $cindex => $c) {
                $child = array(
                    "role_id" => $roleId,
                    "role_modul_id" => $c['role_modul_id'],
                    "read" => json_encode($c['crud']['read']),
                    "create" => json_encode($c['crud']['create']),
                    "update" => json_encode($c['crud']['update']),
                    "delete" => json_encode($c['crud']['delete'])
                );
                mdrolesPermission::insert($child);
            }
        }
    }
    function updateData(Request $r)
    {
        $data = $r->get("data");
        $roles = $r->get("roles");

        $toRoles = array(
            "role" => $roles['role'],
            "is_active" => $roles['is_active'],
        );

        mdroles::where("role_id", $roles['role_id'])->update($toRoles);


        foreach ($data as $index => $d) {

            $parent = array(
                "role_id" => $roles['role_id'],
                "role_modul_id" => $d['parent']['role_modul_id'],
                "read" => json_encode($d['parent']['crud']['read']),
                "create" => json_encode($d['parent']['crud']['create']),
                "update" => json_encode($d['parent']['crud']['update']),
                "delete" => json_encode($d['parent']['crud']['delete'])
            );

            $cekParent = mdrolesPermission::where('role_permission_id', $d['parent']['permission']['role_permission_id'])->get();
            $parentcek = count($cekParent);
            if ($parentcek > 0) {
                mdrolesPermission::where('role_permission_id', $d['parent']['permission']['role_permission_id'])->update($parent);
            } else {
                mdrolesPermission::insert($parent);
            }
            foreach ($d['child'] as $cindex => $c) {
                $child = array(
                    "role_id" => $roles['role_id'],
                    "role_modul_id" => $c['role_modul_id'],
                    "read" => json_encode($c['crud']['read']),
                    "create" => json_encode($c['crud']['create']),
                    "update" => json_encode($c['crud']['update']),
                    "delete" => json_encode($c['crud']['delete'])
                );
                $cekChild =  mdrolesPermission::where('role_permission_id', $c['permission']['role_permission_id'])->get();
                $ChildCek = count($cekChild);
                if ($ChildCek > 0) {
                    mdrolesPermission::where('role_permission_id', $c['permission']['role_permission_id'])->update($child);
                } else {
                    mdrolesPermission::insert($child);
                }
            }
        }
    }
}

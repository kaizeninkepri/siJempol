<?php

namespace App\Http\Controllers;

use App\mdrolesPermission;
use App\model\mdrolesModul;
use Illuminate\Contracts\Support\Jsonable;
use Illuminate\Http\Request;
use stdClass;

class rolesModulControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'modul') {
            return self::moduldata($r);
        } elseif ($type == 'store') {
            return self::store($r);
        } elseif ($type == 'update') {
            return self::updateData($r);
        } elseif ($type == 'dataById') {
            return self::dataById($r);
        } elseif ($type == 'delete') {
            return self::deleteData($r);
        } elseif ($type == 'select') {
            return self::modulSelect($r);
        }
    }

    function moduldata(Request $r)
    {
        $perPage = Request()->has('per_page') ? (int) Request()->per_page : null;
        if ($r->exists('filter')) {
            $value = "%{$r->filter}%";
            $pag =  mdrolesModul::with("permission")->where("nama", 'like', $value)
                ->orWhere("url", "like", $value)
                ->paginate();
        } else {
            $pag =  mdrolesModul::with("permission")->paginate();
        }
        return $pag;
    }
    function store(Request $r)
    {
        $data = $r->get("data");
        $array = array(
            "nama"      => $data['nama'],
            "url"       => $data['url'],
            "icon"      => $data['icon'],
            "parent_id" => $data['parent_id'],
            "type"      => $data['type'],
        );
        mdrolesModul::insert($array);
    }

    function updateData(Request $r)
    {
        $data = $r->get("data");
        $array = array(
            "nama"      => $data['nama'],
            "url"       => $data['url'],
            "icon"      => $data['icon'],
            "parent_id" => $data['parent_id'],
            "type"      => $data['type'],
        );
        mdrolesModul::where("role_modul_id", $data['role_modul_id'])->update($array);
    }
    function deleteData(Request $r)
    {
        $data = $r->get("data");
        mdrolesModul::where("role_modul_id", $data['role_modul_id'])->delete();
        mdrolesPermission::where("role_modul_id", $data['role_modul_id'])->delete();
    }
    function dataById(Request $r)
    {
        $data = $r->get("data");
        return mdrolesModul::where("role_modul_id", $data)->first();
    }
    function modulSelect(Request $r)
    {
        return mdrolesModul::where("type", "parent")
            ->orderBy("nama", "ASC")->get();
    }
}

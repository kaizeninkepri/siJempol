<?php

namespace App\Http\Controllers;

use App\model\mdperusahaan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class perusahaanControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'dataAll') {
            return self::dataall($r);
        } elseif ($type == 'dataBynpwp') {
            return self::dataBynpwp($r);
        } elseif ($type == 'UpdateById') {
            return self::UpdateById($r);
        }
    }

    function dataall(Request $r)
    {
        return mdperusahaan::all();
    }

    function dataBynpwp(Request $r)
    {
        $npwp = $r->get('npwp');
        return mdperusahaan::with(['pengurus', 'permohonan' => function ($p) {
            $p->with(['opd', 'persyaratan', 'izin', 'perusahaan']);
        }])
            ->where('npwp', $npwp)->get();
    }

    function UpdateById(Request $r)
    {
        $data = $r->get('data');
        $toDB = array(
            "npwp"      => $data['npwp'],
            "kategori"    => $data['kategori'],
            "nama"      => $data['nama'],
            "alamat"    => $data['alamat'],
            "email"     => $data['email'],
            "contact"   => $data['contact'],
        );

        mdperusahaan::where('perusahaan_id', $data['perusahaan_id'])->update($toDB);

        return array(
            "title"     => "Info",
            "type"      => "success",
            "message"   => "Data Berhasil Di Rubah",
            "code"      => "200"
        );
    }

    public static function Insertperusahaan(Request $r)
    {
        $data = $r->get('perusahaan');
        $toDB = array(
            "npwp"  => $data["npwp"],
            "kategori"  => $data["kategori"],
            "nama"  => $data["nama"],
            "alamat"  => $data["alamat"],
            "email"  => $data["email"],
            "contact"  => $data["contact"],
            "create_on"  => "walkin",
        );

        mdperusahaan::insert($toDB);
        $id = DB::getPdo()->lastInsertId();

        return $id;
    }
}

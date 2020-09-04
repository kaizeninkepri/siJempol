<?php

namespace App\Http\Controllers;

use App\model\mdperusahaanPemohon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

class perusahaanPemohonControl extends Controller
{
    function index(Request $r){
        $type = $r->get("type");
        if($type == 'dataAll'){
            return self::dataall($r);
        }
        elseif($type == 'insert'){
            return self::perusahaanpemohonInsert($r);
        }
        elseif($type == 'update'){
            return self::perusahaanpemohonUpdate($r);
        }
    }

    function dataall(Request $r){

    }
    public static function perusahaanpemohonInsert(Request $r){
        $data = $r->get("pemohon");

        $toDb = array(
            "nama"           => $data['nama'],
            "contact"        => $data['contact'],
            "email"          => $data['email'],
            "perusahaan_id"  => $data['perusahaan_id'],
            "user_id"        => Session::get('userId'),
            "identitas_no"   => $data['identitas_no'],
            "identitas_kategori"   => $data["identitas_kategori"],
        );

        mdperusahaanPemohon::insert($toDb);
        return $id = DB::getPdo()->lastInsertId();


    }
    function perusahaanpemohonUpdate(Request $r){

    }
}

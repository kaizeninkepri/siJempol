<?php

namespace App\Http\Controllers;

use App\model\mdPenelitian;
use App\model\mdperusahaan;
use App\model\mdperusahaanPemohon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class penelitianControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'insert') {
            return self::insertData();
        }
    }

    function insertData(Request $r)
    {
        $data = $r->get('penelitian');
        $person = $r->get('person');
        $waktu_mulai = date("Y-m-d", strtotime($data['waktu']));
        $waktu_selesai = date("Y-m-d", strtotime($data['waktu']));
        $penelitianToDB = array(
            "judul" => $data['judul'],
            "lokasi" => $data['lokasi'],
            "waktu_mulai" => $waktu_mulai,
            "waktu_selesai" => $waktu_selesai,
            "universitas" => $data['universitas'],
            "permohonan_nomor" => $data['permohonan_nomor'],
            "kategori" => $data['kategori'],
            "status" => "pending",
        );
        $penelitianInsert = mdPenelitian::insert($penelitianToDB);
        $penelitianId = DB::getPdo()->lastInsertId();


        $penelitianPersonToDB = array(
            "identitas_nomor" => $person['identitas_nomor'],
            "nama" => $person['nama'],
            "jenjang" => $person['jenjang'],
            "jurusan" => $person['jurusan'],
            "contact" => $person['contact'],
            "identitas_kategori" => $person['identitas_kategori'],
            "email" => $person['email'],
            "alamat" => $person['alamat'],
        );
    }
}

<?php

namespace App\Http\Controllers;

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
        $data = $r->get("nama");
        $toDBPperusahaan = array(
            "npwp" =>  "-",
            "kategori" => "PERORANGAN",
            "nama" => $data['nama'],
            "alamat" => $data['alamat'],
            "contact" => $data['contact'],
            "email" => $data['email'],
            "jenis" => "mahasiswa",
            "provinsi" => "provinsi",
            "kota" => "kota",
        );
        $perusahaan = mdperusahaan::insert($toDBPperusahaan);
        $perusahaan_id = DB::getPdo()->lastInsertId();
        $toDBperusahaanPemohon = array(
            "perusahaan_id" => $perusahaan_id,
            "nama" => $data['nama'],
            "contact" => $data['contact'],
            "email" => $data['email'],
            "identitas_no" =>  $data['identitas_no'],
            "identitas_kategori" =>  "Nomor Induk Mahasiswa",
            "keterangan" =>  $data,
        );
        $pemohon = mdperusahaanPemohon::insert($toDBperusahaanPemohon);
    }
}

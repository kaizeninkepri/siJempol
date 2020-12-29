<?php

namespace App\Http\Controllers;

use App\model\mdPenelitian;
use App\model\mdPenelitianPerson;
use App\model\mdperusahaan;
use App\model\mdperusahaanPemohon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\mdPermohonan;
use App\mdUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use App\Http\Controllers\appcontrol;
use App\model\mdPermohonanPersyaratan;
use App\model\mdTrack;

class penelitianControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'insert') {
            return self::insertData($r);
        } elseif ($type == 'getdataById') {
            return self::getdataById($r);
        } elseif ($type == 'InsertMenimbang') {
            return self::InsertMenimbang($r);
        }
    }

    function insertData(Request $r)
    {
        $data = $r->get('penelitian');
        $person = $r->get("person");

        $waktu_mulai = date("Y-m-d", strtotime($data['waktu'][0]));
        $waktu_selesai = date("Y-m-d", strtotime($data['waktu'][1]));
        $lokasi = implode(",", $data['lokasi']);

        $code = 'PRMN';
        $pegawaiCode = mdPermohonan::max('permohonan_id');

        $cekPermohonanCode = mdPermohonan::where('permohonan_id', $pegawaiCode)->first();

        $idmax1 = $cekPermohonanCode->permohonan_code;
        $nourut1 = (int) substr($idmax1, 4, 5);
        $nourut1++;
        $permohonan_code = $code . sprintf("%05s", $nourut1);





        $toDBPerusahaan = array(
            "npwp"  => 'Penelitian-' . $permohonan_code,
            "kategori"  => "perorangan",
            "jenis"  => "perorangan",
            "nama"  => $person[0]['nama'],
            "alamat"  => $person[0]['alamat'],
            "email"  => $person[0]['email'],
            "contact"  => $person[0]['contact'],
            "create_on"  => "online",
            "provinsi"  => "kepulauan Riau",
        );
        $perusahaanInsert = mdperusahaan::insert($toDBPerusahaan);
        $perusahaan_id = DB::getPdo()->lastInsertId();

        $toDb = array(
            "nama"           => $person[0]['nama'],
            "contact"        => $person[0]['contact'],
            "email"          => $person[0]['email'],
            "perusahaan_id"  => $perusahaan_id,
            "identitas_no"   => $person[0]['identitas_nomor'],
            "identitas_kategori"   => $person[0]['identitas_kategori'],
        );

        mdperusahaanPemohon::insert($toDb);
        $perusahaan_pemohon_id = DB::getPdo()->lastInsertId();

        $toDBpermohonan = array(
            "permohonan_code"   => $permohonan_code,
            "perusahaan_id"     => $perusahaan_id,
            "perusahaanp_id"    => $perusahaan_pemohon_id,
            "opd_id"            => '15',
            "opdi_id"           => "7",
            "status"            => "pending",
            "create_on"         => "online"
        );
        mdPermohonan::insert($toDBpermohonan);
        $permohonanId = DB::getPdo()->lastInsertId();
        $permohonanCrypt =  Crypt::encryptString($permohonanId);

        foreach ($r->get('persyaratan') as $index => $p) {
            $toDbPersyaratan = array(
                "permohonan_id" => $permohonanId,
                "persyaratan" => $p["persyaratan"],
                "status" => "waiting-upload",
                "catatan" => ""
            );
            mdPermohonanPersyaratan::insert($toDbPersyaratan);
        }

        $penelitianToDB = array(
            "judul" => $data['judul'],
            "lokasi" => $lokasi,
            "waktu_mulai" => $waktu_mulai,
            "waktu_selesai" => $waktu_selesai,
            "universitas" => $data['universitas'],
            "permohonan_nomor" => $data['permohonan_nomor'],
            "kategori" => $data['kategori'],
            "status" => "pending",
            "permohonan_id" => $permohonanId,
        );
        $penelitianInsert = mdPenelitian::insert($penelitianToDB);
        $penelitianId = DB::getPdo()->lastInsertId();


        for ($i = 0; $i < count($person); $i++) {
            $penelitianPersonToDB = array(
                "identitas_nomor" => $person[$i]['identitas_nomor'],
                "nama" => $person[$i]['nama'],
                "jenjang" => $person[$i]['jenjang'],
                "jurusan" => $person[$i]['jurusan'],
                "contact" => $person[$i]['contact'],
                "identitas_kategori" => $person[$i]['identitas_kategori'],
                "email" => $person[$i]['email'],
                "alamat" => $person[$i]['alamat'],
                "penelitian_id" => $penelitianId,
            );
            $personInsert = mdPenelitianPerson::insert($penelitianPersonToDB);
        }


        $user_id = mdUsers::max("user_id");
        $ToDBUsers = array(
            "email" => $data['email'],
            "role_id" => "5",
            "username" => $data['email'],
            "password" => Hash::make($data['password']),
            "perusahaan_id" => $perusahaan_id,
            "is_active" => "true",
            "user_id" => $user_id + 1,
        );
        mdUsers::insert($ToDBUsers);
        $user_id = DB::getPdo()->lastInsertId();

        // $emailLogin = new Request();
        // $emailLogin->replace(['email' => $data['email']]);

        $passwordLogin = new Request();
        $passwordLogin->replace(['email' => $data['email'], 'password' => $data['password']]);
        // $credentials = $r->only($emailLogin, $passwordLogin);

        // if (Auth::attempt($credentials)) {
        //     return redirect('pemohon/pengajuan/2/' . $permohonanCrypt);
        //     // return $permohonanCrypt;
        // }
        // return $credentials;

        $logintest = appcontrol::login($passwordLogin);

        $totrack = array(
            "permohonan_id" => $permohonanId,
            "perusahaan_id" => $perusahaan_id,
            "pesan" => "Pengisian Form Perizinan",
            "step" => "1",
            "user_id" => Auth::user()->user_id,
            "ShowOnuser" => true,
            "kategori" => "Pemohon",
        );
        mdTrack::insert($totrack);

        return $permohonanCrypt;
    }

    function getdataById(Request $r)
    {
        $id = $r->get('id');
        return mdPenelitian::where("permohonan_id", $id)->first();
    }

    function InsertMenimbang(Request $r)
    {
        $data = $r->get('data');
        $id = $r->get('id');
        mdPenelitian::where('permohonan_id', $id)->update(array("menimbang" => $data));
    }
}

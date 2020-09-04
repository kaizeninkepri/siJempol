<?php

namespace App\Http\Controllers;

use App\model\mdperusahaan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\mdPermohonan;
use App\model\mdPermohonanPersyaratan;
use App\Http\Controllers\perusahaanControl;
use App\Http\Controllers\perusahaanPemohonControl;
use App\model\mdTrack;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Crypt;
use File;

class pemohonControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get('type');
        if ($type == 'dashboard') {
            return self::dashboard($r);
        } elseif ($type == 'insertPermohonan') {
            return self::insertPermohonan($r);
        } elseif ($type == 'pengajuanById') {
            return self::pengajuanById($r);
        } elseif ($type == 'permohonanByPerusahaanId') {
            return self::permohonanByPerusahaanId($r);
        } elseif ($type == 'uploadFile') {
            return self::uploadFile($r);
        } elseif ($type == 'deleteFile') {
            return self::deleteFile($r);
        } elseif ($type == 'kirimtoptsp') {
            return self::kirimtoptsp($r);
        } elseif ($type == 'gantipassword') {
            return self::gantipassword($r);
        }
    }

    function dashboard(Request $r)
    {
        $perusahaan = mdperusahaan::where('perusahaan_id', Auth::user()->perusahaan_id)->first();

        return $perusahaan;
    }

    function insertPermohonan(Request $r)
    {
        $data = $r->get("form");
        $persyaratan = $r->get("persyaratan");
        $izin = $r->get("izin");

        $perusahaan_id = Auth::user()->perusahaan_id;

        $data['pengurus']['perusahaan_id'] =  $perusahaan_id;

        $perusahaan_pemohon = new Request();

        $perusahaan_pemohon->replace(['pemohon' => $data['pengurus']]);

        $perusahaan_pemohon_id = perusahaanPemohonControl::perusahaanpemohonInsert($perusahaan_pemohon);



        $code = 'PRMN';
        $pegawaiCode = DB::table('permohonan')->where('permohonan_code', 'like', '%' . $code . '%')->max('permohonan_code');
        $idmax1 = $pegawaiCode;
        $nourut1 = (int) substr($idmax1, 4, 5);
        $nourut1++;
        $permohonan_code = $code . sprintf("%05s", $nourut1);

        $toDBpermohonan = array(
            "permohonan_code"   => $permohonan_code,
            "perusahaan_id"     => $perusahaan_id,
            "perusahaanp_id"    => $perusahaan_pemohon_id,
            "opd_id"            => $izin["opd_id"],
            "opdi_id"           => $izin["opdi_id"],
            "status"            => "pending",
            "create_on"         => "online"
        );
        mdPermohonan::insert($toDBpermohonan);
        $permohonanId = DB::getPdo()->lastInsertId();

        foreach ($izin['persyaratan'] as $index => $p) {
            $toDbPersyaratan = array(
                "permohonan_id" => $permohonanId,
                "persyaratan" => $p["persyaratan"],
                "status" => "waiting-upload",
            );
            mdPermohonanPersyaratan::insert($toDbPersyaratan);
        }

        $totrack = array(
            "permohonan_id" => $permohonanId,
            "perusahaan_id" => Auth::user()->perusahaan_id,
            "pesan" => "Pengisian Form Perizinan",
            "step" => "1",
            "user_id" => Auth::user()->user_id,
            "ShowOnuser" => true,
            "kategori" => "Pemohon",
        );
        mdTrack::insert($totrack);



        return Crypt::encryptString($permohonanId);
    }

    function pengajuanById(Request $r)
    {
        $id = Crypt::decryptString($r->get("id"));
        $permohonan = mdPermohonan::where("permohonan_id", $id)->with(['izin', 'perusahaan', 'opd', 'persyaratan', 'pemohon'])->first();

        return $permohonan;
    }

    function permohonanByPerusahaanId(Request $r)
    {
        return $permohonan = mdPermohonan::where("perusahaan_id", Auth::user()->perusahaan_id)->with(['izin', 'perusahaan', 'opd', 'persyaratan', 'pemohon'])->orderBy('created_at', 'DESC')->get();
    }

    function uploadFile(Request $r)
    {
        date_default_timezone_set("Asia/Bangkok");
        $timestamp = date("Y-m-d H:i:s");
        $perusahaan = $r->get("perusahaan");
        $persyaratan = $r->get("persyaratan");
        $permohonanCode = $r->get("permohonanCode");

        /* directory */
        $pathFolder = Storage::disk("ResourcesExternal")->path($perusahaan['npwp'] . '/' . $permohonanCode . '/persyaratan');
        if (!File::exists($pathFolder)) {
            File::makeDirectory($pathFolder, $mode = 0777, true, true);
        }
        $pos = strpos($persyaratan["file"], ';');
        $filetype = explode('/', substr($persyaratan["file"], 0, $pos))[1];
        $expoloded = explode(",", $persyaratan["file"]);
        $decoded = base64_decode($expoloded[1]);
        $extension =  $filetype;
        $name = Str::slug($persyaratan["persyaratan"], '_');
        $filename = $name . '.' . $extension;

        $path = Storage::disk("ResourcesExternal")->path($perusahaan['npwp'] . '/' . $permohonanCode . '/persyaratan' . '/' . $filename);
        file_put_contents($path, $decoded);

        $arPers = array(
            "status" => "uploaded",
            "file" => $filename,
            "updated_at" => $timestamp,
            "user_uploaded_file" => Auth::user()->perusahaan_id,
        );


        mdPermohonanPersyaratan::where("permohonan_persyaratanId", $persyaratan["permohonan_persyaratanId"])
            ->update($arPers);
        // $todbpermohonan = array("status" => "proses");
        // mdPermohonan::where("permohonan_id", $r->get("permohonan_id"))->update($todbpermohonan);

        // $totrack = array(
        //     "permohonan_id" => $r->get("permohonan_id"),
        //     "perusahaan_id" => Session::get("perusahaan_id"),
        //     "pesan" => "upload File Persyaratan " . $filename
        // );
        // mdTrack::insert($totrack);

        return array("file" => $filename, "status" => "uploaded");
    }
    function deleteFile(Request $r)
    {

        date_default_timezone_set("Asia/Bangkok");
        $timestamp = date("Y-m-d H:i:s");
        $perusahaan = $r->get("perusahaan");
        $persyaratan = $r->get("persyaratan");
        $permohonanCode = $r->get("permohonanCode");
        $persyaratan = $r->get("persyaratan");
        $arPers = array(
            "status" => "waiting-upload",
            "file" => null,
            "updated_at" => $timestamp,
            "user_uploaded_file" => Auth::user()->perusahaan_id,
        );


        mdPermohonanPersyaratan::where("permohonan_persyaratanId", $persyaratan["permohonan_persyaratanId"])->update($arPers);

        return array("file" => null, "status" => "waiting-upload");
    }

    function kirimtoptsp(Request $r)
    {

        $date = \Carbon\Carbon::now();
        $todbpermohonan = array("status" => "proses", "created_at" => $date);
        mdPermohonan::where("permohonan_id", $r->get("permohonan_id"))->update($todbpermohonan);

        $totrack = array(
            "permohonan_id" => $r->get("permohonan_id"),
            "perusahaan_id" => Auth::user()->perusahaan_id,
            "pesan" => "Pengajuan Permohonan online",
            "step" => "2",
            "user_id" => Auth::user()->user_id,
            "ShowOnuser" => true,
            "kategori" => "Pemohon",
        );
        mdTrack::insert($totrack);
    }

    function gantipassword(Request $r)
    {
        $data = $r->get('password');
        $toDb = array(
            "password" => Hash::make($data['password']),
        );
    }
}

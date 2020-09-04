<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\mdPermohonan;
use App\model\mdSk;
use App\model\mdTrack;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class skControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'toSK') {
            return self::tosk($r);
        } elseif ($type == 'skById') {
            return self::skById($r);
        } elseif ($type == 'UploadSK') {
            return self::UploadSK($r);
        }
    }

    function tosk(Request $r)
    {
        $permohonan_id =  $r->get('permohonan_id');
        $perusahaan_id =  $r->get('perusahaan_id');
        $todbpermohonan = array("status" => "draft", "updated_at" => \Carbon\Carbon::now());
        mdPermohonan::where("permohonan_id", $permohonan_id)->update($todbpermohonan);

        $totrack = array(
            "permohonan_id" => $permohonan_id,
            "perusahaan_id" => $perusahaan_id,
            "pesan" => "Penerbitan Surat Keputusan",
            "step" => "6",
            "user_id" => Auth::user()->user_id
        );
        mdTrack::insert($totrack);
    }

    function skById(Request $r)
    {
        $id = $r->get('permohonan_id');
        return mdSk::where('permohonan_id', $id)->with('permohonan')->get();
    }

    function UploadSK(Request $r)
    {
        date_default_timezone_set("Asia/Bangkok");
        $timestamp = date("Y-m-d H:i:s");




        $persyaratan = $r->get("persyaratan");
        $permohonanCode = $r->get("permohonanCode");
        $permohonan_id = $r->get("permohonan_id");
        $perusahaan_id = $r->get("perusahaan_id");


        Storage::makeDirectory("permohonan/" . $permohonanCode);
        Storage::makeDirectory("permohonan/" . $permohonanCode . '/sk');

        $expoloded = explode(",", $persyaratan["file"]);
        $decoded = base64_decode($expoloded[1]);
        $extension =  "pdf";
        $name = Str::slug($persyaratan["nomor"], '_');
        $filename = $name . '.' . $extension;

        $path = storage_path('app/permohonan/' . $permohonanCode . '/sk') . '/' . $filename;
        file_put_contents($path, $decoded);

        $tosk = array(
            "nomor_sk" => $persyaratan['nomor'],
            "file_sk" => $filename,
            "permohonan_id" => $permohonan_id,
        );
        mdSk::insert($tosk);

        $todbpermohonan = array("status" => "selesai", "updated_at" => \Carbon\Carbon::now());
        mdPermohonan::where("permohonan_id", $permohonan_id)->update($todbpermohonan);

        $totrack = array(
            "permohonan_id" => $permohonan_id,
            "perusahaan_id" => $perusahaan_id,
            "pesan" => "Penerbitan Surat Keputusan",
            "step" => "6",
            "user_id" => Auth::user()->user_id
        );
        mdTrack::insert($totrack);
    }
}

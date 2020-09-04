<?php

namespace App\Http\Controllers;

use App\model\mdsuratRekomendasi;
use Carbon\Traits\Timestamp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use App\mdPermohonan;
use App\model\mdTrack;

class suratRekomendasiControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'RekomendasiByPermohonanId') {
            return self::RekomendasiByPermohonanId($r);
        } elseif ($type == 'UploadSuratTelaah') {
            return self::UploadSuratTelaah($r);
        } elseif ($type == 'deleteByid') {
            return self::deleteByid($r);
        } elseif ($type == 'kirimPemintaanOpd') {
            return self::kirimFile($r);
        } elseif ($type == 'UploadSuratBalasan') {
            return self::UploadSuratBalasan($r);
        } elseif ($type == 'toDraft') {
            return self::toDraft($r);
        } elseif ($type == 'toTolak') {
            return self::toTolak($r);
        }
    }

    function toDraft(Request $r)
    {
        $permohonan_id =  $r->get('permohonan_id');
        $perusahaan_id =  $r->get('perusahaan_id');
        $todbpermohonan = array("status" => "draft", "updated_at" => \Carbon\Carbon::now());
        mdPermohonan::where("permohonan_id", $permohonan_id)->update($todbpermohonan);

        $totrack = array(
            "permohonan_id" => $permohonan_id,
            "perusahaan_id" => $perusahaan_id,
            "pesan" => "Pembuatan Draft Surat Keputusan",
            "step" => "5",
            "user_id" => Auth::user()->user_id
        );
        mdTrack::insert($totrack);
    }

    function toTolak(Request $r)
    {
        $permohonan_id =  $r->get('permohonan_id');
        $perusahaan_id =  $r->get('perusahaan_id');
        $todbpermohonan = array("status" => "tolak", "updated_at" => \Carbon\Carbon::now());
        mdPermohonan::where("permohonan_id", $permohonan_id)->update($todbpermohonan);

        $totrack = array(
            "permohonan_id" => $permohonan_id,
            "perusahaan_id" => $perusahaan_id,
            "pesan" => "Penolakan Rekomendasi Teknis",
            "step" => "selesai",
            "user_id" => Auth::user()->user_id
        );
        mdTrack::insert($totrack);
    }

    function RekomendasiByPermohonanId(Request $r)
    {
        $permohonan_id =  $r->get('permohonan_id');
        $rekomendasi = mdsuratRekomendasi::with(['opd'])
            ->where('permohonan_id', $permohonan_id)->get();

        return $rekomendasi;
    }


    /*----------------------=== CRUD ===-----------------------*/
    function UploadSuratTelaah(Request $r)
    {
        date_default_timezone_set("Asia/Bangkok");
        $timestamp = date("Y-m-d H:i:s");




        $persyaratan = $r->get("persyaratan");
        $permohonanCode = $r->get("permohonanCode");
        $permohonan_id = $r->get("permohonan_id");
        $perusahaan_id = $r->get("perusahaan_id");


        Storage::makeDirectory("permohonan/" . $permohonanCode);
        Storage::makeDirectory("permohonan/" . $permohonanCode . '/rekomendasi');

        $expoloded = explode(",", $persyaratan["file"]);
        $decoded = base64_decode($expoloded[1]);
        $extension =  "pdf";
        $name = Str::slug($persyaratan["nomor"], '_');
        $filename = $name . '.' . $extension;

        $path = storage_path('app/permohonan/' . $permohonanCode . '/rekomendasi') . '/' . $filename;
        file_put_contents($path, $decoded);

        $arPers = array(
            "file_kajian" => $filename,
            "nomor_kajian" => $persyaratan['nomor'],
            "created_at_kajian" => $timestamp,
            "opd_id" => $persyaratan['opd_id'],
            "permohonan_id" => $permohonan_id,
            "status" => "uploaded",
            "user_idK" => Auth::user()->user_id,
        );
        mdsuratRekomendasi::insert($arPers);

        $todbpermohonan = array("updated_at" => \Carbon\Carbon::now());
        mdPermohonan::where("permohonan_id", $permohonan_id)->update($todbpermohonan);

        $totrack = array(
            "permohonan_id" => $permohonan_id,
            "perusahaan_id" => $perusahaan_id,
            "pesan" => "Pembuatan Surat Telaah Rekomendasi Teknis",
            "step" => "4",
            "user_id" => Auth::user()->user_id
        );
        mdTrack::insert($totrack);
    }
    function deleteByid(Request $r)
    {
        $rekom_id = $r->get('stRekom_id');
        $nomor = $r->get('nomor');
        $delete = mdsuratRekomendasi::where('stRekom_id', $rekom_id)->delete();

        return array(
            "title" => "Berhasil",
            "message" => "Data Surat Dengan Nomor : " . $nomor . "di hapus",
            "type" => "success",
        );
    }

    function kirimFile(Request $r)
    {
        date_default_timezone_set("Asia/Bangkok");
        $timestamp = date("Y-m-d H:i:s");
        $permohonan_id = $r->get("permohonan_id");
        $perusahaan_id = $r->get("perusahaan_id");
        $rekom_id = $r->get('stRekom_id');
        $nomor = $r->get('nomor');
        $opd = $r->get('opd');

        $toDb = array(
            "status" => "Delivered",
            "updated_at_kajian" => $timestamp
        );

        mdsuratRekomendasi::where('stRekom_id', $rekom_id)->update($toDb);



        $todbpermohonan = array("status" => "tekniskirim", "updated_at" => \Carbon\Carbon::now());
        mdPermohonan::where("permohonan_id", $permohonan_id)->update($todbpermohonan);

        $totrack = array(
            "permohonan_id" => $permohonan_id,
            "perusahaan_id" => $perusahaan_id,
            "pesan" => "Penandatanganan dan Pengiriman Surat Telaah Rekomendasi Teknis",
            "step" => "4",
            "user_id" => Auth::user()->user_id
        );
        mdTrack::insert($totrack);
        return array(
            "title" => "Berhasil",
            "message" => "Data Surat Dengan Nomor : " . $nomor . " Terkirim Ke OPD : " . $opd,
            "type" => "success",
        );
    }


    /*----------------------=== CRUD ===-----------------------*/
    function UploadSuratBalasan(Request $r)
    {
        date_default_timezone_set("Asia/Bangkok");
        $timestamp = date("Y-m-d H:i:s");

        $persyaratan = $r->get("persyaratan");
        $permohonanCode = $r->get("permohonanCode");
        $permohonan_id = $r->get("permohonan_id");
        $perusahaan_id = $r->get("perusahaan_id");
        Storage::makeDirectory("permohonan/" . $permohonanCode);
        Storage::makeDirectory("permohonan/" . $permohonanCode . '/rekomendasi');

        $expoloded = explode(",", $persyaratan["file"]);
        $decoded = base64_decode($expoloded[1]);
        $extension =  "pdf";
        $name = Str::slug($persyaratan["nomor"], '_');
        $filename = $name . '.' . $extension;
        $path = storage_path('app/permohonan/' . $permohonanCode . '/rekomendasi') . '/' . $filename;
        file_put_contents($path, $decoded);

        $arPers = array(
            "file_rekom" => $filename,
            "nomor_rekom" => $persyaratan['nomor'],
            "permohonan" => $persyaratan['permohonan'],
            "created_at_rekom" => $timestamp,
            "updated_at_rekom" => $timestamp,
            "status" => "done",
            "user_idR" => Session::get("user_id"),
        );
        mdsuratRekomendasi::where('stRekom_id', $persyaratan['stRekom_id'])->update($arPers);

        $totrack = array(
            "permohonan_id" => $permohonan_id,
            "perusahaan_id" => $perusahaan_id,
            "pesan" => "Proses Kajian dan Pengiriman Surat Telaah Rekomendasi Teknis",
            "step" => "5",
            "user_id" => Auth::user()->user_id
        );
        mdTrack::insert($totrack);
    }
}

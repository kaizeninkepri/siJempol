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
use App\mdsuratPermintaan;
use App\model\mdperusahaan;
use App\model\mdTrack;
use App\model\mdTrackSurat;
use Carbon\Carbon;
use Illuminate\Support\Facades\Crypt;
use File;
use Illuminate\Support\Facades\DB;

class suratRekomendasiControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'pengirimanSuratTelaah') {
            return self::pengirimanSuratTelaah($r);
        } elseif ($type == 'getsuratpengurusById') {
            return self::getsuratpengurusById($r);
        } elseif ($type == 'getSuratByOpd') {
            return self::getSuratByOpd($r);
        } elseif ($type == 'getSurat') {
            return self::getSurat($r);
        }
    }



    function pengirimanSuratTelaah(Request $r)
    {
        $data = $r->get("data");
        $permohonan = mdPermohonan::where("permohonan_id", $data['permohonan_id'])->first();
        $perusahaan = mdperusahaan::where("perusahaan_id", $permohonan->perusahaan_id)->first();

        date_default_timezone_set("Asia/Bangkok");
        $timestamp = date("Y-m-d H:i:s");

        /* directory */
        $pathFolder = Storage::disk("ResourcesExternal")->path($perusahaan->npwp . '/' . $permohonan->permohonan_code . '/surat');
        if (!File::exists($pathFolder)) {
            File::makeDirectory($pathFolder, $mode = 0777, true, true);
        }
        $pos = strpos($data["file"], ';');
        $filetype = explode('/', substr($data["file"], 0, $pos))[1];
        $expoloded = explode(",", $data["file"]);
        $decoded = base64_decode($expoloded[1]);
        $extension =  $filetype;
        $name = Str::slug($data["nomor"], '_');
        $filename = $name . '.' . $extension;

        $path = Storage::disk("ResourcesExternal")->path($perusahaan->npwp . '/' . $permohonan->permohonan_code . '/surat' . '/' . $filename);
        file_put_contents($path, $decoded);


        $toDb = array(
            "nomor" => $data['nomor'],
            "opd_id" => $permohonan->opd_id,
            "perihal" => $data['perihal'],
            "file" => $filename,
            "user_id" => Auth::user()->user_id,
            "status" => $data['status'],
            "permohonan_id" => $data['permohonan_id'],
            "kategori" => $data['kategori'],
            "keterangan" => $data['keterangan']
        );

        mdsuratPermintaan::insert($toDb);
        $suratpermintaanId = DB::getPdo()->lastInsertId();

        $toTrackarray = array(
            "surat_permintaan_id" => $suratpermintaanId,
            "permohonan_id" =>  $data['permohonan_id'],
            "user_id" => Auth::user()->user_id,
            "status" => '2',
        );
        mdTrackSurat::insert($toTrackarray);
        $getpermohonan = mdPermohonan::where('permohonan_id', $data['permohonan_id'])->first();
        if ($r->get('role') == '4') {
            $toArray = array(
                "status" => "selesai"
            );
            $tobalasan = array(
                "status" => "balas"
            );
            mdsuratPermintaan::where('permohonan_id', $data['permohonan_id'])->update($toArray);
            mdsuratPermintaan::where('surat_permintaan_id', $suratpermintaanId)->update($tobalasan);
            $todbpermohonan = array("status" => "teknisbalas", "updated_at" => \Carbon\Carbon::now());

            mdPermohonan::where('permohonan_id', $data['permohonan_id'])->update($todbpermohonan);

            $totrack = array(
                "permohonan_id" => $data['permohonan_id'],
                "perusahaan_id" => $getpermohonan->perusahaan->perusahaan_id,
                "pesan" => "Balasan Surat Rekomendasi Teknis",
                "step" => "4",
                "user_id" => Auth::user()->user_id,
                "kategori" => "OPD TEKNIS",
                "ShowOnuser" => true,
            );
            mdTrack::insert($totrack);
        } else {
            $totrack = array(
                "permohonan_id" => $data['permohonan_id'],
                "perusahaan_id" => $getpermohonan->perusahaan->perusahaan_id,
                "pesan" => "Pengiriman Surat Rekomendasi Teknis",
                "step" => "5",
                "user_id" => Auth::user()->user_id,
                "kategori" => "BACK OFFICE",
                "ShowOnuser" => true,
            );
            mdTrack::insert($totrack);
        }
    }

    function getsuratpengurusById(Request $r)
    {
        $id  = $r->get("id");
        $permintaan = mdTrackSurat::with(['petugas'])->where("permohonan_id", $id)->get();

        return $permintaan;
    }
    function getSuratByOpd(Request $r)
    {
        $surat = mdsuratPermintaan::with(['backoffice', 'permohonan'  => function ($q) {
            $q->with(['izin']);
        }])->orderBy("created_at", "DESC")->get();
        return $surat;
    }

    function getSurat(Request $r)
    {
        $id = $r->get("id");
        $surat = mdsuratPermintaan::with(['opd'])->where('permohonan_id', $id)->get();

        return $surat;
    }
}

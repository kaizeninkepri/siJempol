<?php

namespace App\Http\Controllers;

use App\mdPermohonan;
use App\model\mdPermohonanPersyaratan;
use App\Http\Controllers\perusahaanControl;
use App\Http\Controllers\perusahaanPemohonControl;
use App\model\mdTrack;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Support\Facades\Auth;

class permohonanControl extends Controller
{
    function index(Request $r)
    {

        $type = $r->get("type");
        if ($type == 'dataByDate') {
            return self::dataByDate($r);
        } else if ($type == 'dataById') {
            return self::dataById($r);
        } else if ($type == 'data') {
            return self::data($r);
        } else if ($type == 'insert') {
            return self::insertPermohonan($r);
        } else if ($type == 'uploadSingle') {
            return self::uploadSingle($r);
        } else if ($type == 'dataByRange') {
            return self::dataByRange($r);
        } else if ($type == 'verifikasiOnline') {
            return self::verifikasiOnline($r);
        } else if ($type == 'onlinedata') {
            return self::onlinedata($r);
        } else if ($type == 'VerifikasiFO') {
            return self::VerifikasiFO($r);
        } else if ($type == 'PermohonanKeabsahan') {
            return self::PermohonanKeabsahan($r);
        } else if ($type == 'PermohonanPermintaanTelaah') {
            return self::PermohonanPermintaanTelaah($r);
        } else if ($type == 'GraficByDate') {
            return self::GraficByDate($r);
        } else if ($type == 'CetakSerahTerima') {
            return self::CetakSerahTerima($r);
        }
    }

    /*----------------------=== GET DATA BY ===-----------------------*/

    function verifikasiOnline(Request $r)
    {
        $totrack = array(
            "permohonan_id" => $r->get("permohonan_id"),
            "pesan" => "Front Office Menerita Permohonan berkas Anda"
        );
        mdTrack::insert($totrack);

        $totrack = array(
            "permohonan_id" => $r->get("permohonan_id"),
            "pesan" => "Back Office Memeriksa Keabsahan dan kelengkapan berkas"
        );
        mdTrack::insert($totrack);
    }

    function data(Request $r)
    {
        $start = Carbon::now()->subMonth(5)->startOfMonth()->toDateString();
        $end = date('Y-m-d', strtotime("+1 day"));
        $status = $r->get("status");
        if ($status == 'bo') {
            $dataByDate = mdPermohonan::with(['izin', 'perusahaan', 'opd', 'persyaratan', 'pemohon', 'petugas'])
                ->where('create_on', 'online')
                ->orderBy('created_at', 'DESC')
                ->get();
        } else {
            $dataByDate = mdPermohonan::with(['izin', 'perusahaan', 'opd', 'persyaratan', 'pemohon', 'petugas'])
                ->whereBetween('created_at', [$start, $end])
                ->where('status', 'proses')
                ->orderBy('created_at', 'DESC')
                ->get();
        }
        return $dataByDate;
    }
    function dataByDate(Request $r)
    {
        $date = date("Y-m-d", strtotime($r->get('date')));
        $status = $r->get("status");

        if ($status != null) {
            $dataByDate = mdPermohonan::with(['izin', 'perusahaan', 'opd', 'persyaratan'])
                ->whereDate('created_at', $date)
                ->orderBy('created_at', 'DESC')
                ->get();
        } else {
            $dataByDate = mdPermohonan::with(['izin', 'perusahaan', 'opd', 'persyaratan'])
                ->whereDate('created_at', $date)
                ->orderBy('created_at', 'DESC')
                ->get();
        }
        return $dataByDate;
    }
    function dataByRange(Request $r)
    {
        $start = date("Y-m-d", strtotime($r->get('date')[0]));
        $end = date("Y-m-d", strtotime($r->get('date')[1]));

        $online = $r->get("online");

        if ($online != null) {
            $range = mdPermohonan::with(['izin', 'perusahaan', 'opd', 'persyaratan'])
                ->where('create_on', $online)
                ->whereBetween("created_at", [$start, $end])
                ->orderBy('created_at', 'DESC')
                ->get();
        } else {
            $range = mdPermohonan::with(['izin', 'perusahaan', 'opd', 'persyaratan'])
                ->whereBetween("created_at", [$start, $end])
                ->orderBy('created_at', 'DESC')
                ->get();
        }
        return $range;
    }
    function dataById(Request $r)
    {
        $id = $r->get('id');

        $dataById = mdPermohonan::with(['izin', 'perusahaan', 'opd', 'persyaratan', 'pemohon', 'suratpermintaan' => function ($q) {
            $q->with(['opd'])->get();
        }])
            ->where('permohonan_id', $id)
            ->first();

        return $dataById;
    }

    function uploadSingle(Request $r)
    {
        date_default_timezone_set("Asia/Bangkok");
        $timestamp = date("Y-m-d H:i:s");

        $persyaratan = $r->get("persyaratan");
        $permohonanCode = $r->get("permohonanCode");
        Storage::makeDirectory("permohonan/" . $permohonanCode);
        Storage::makeDirectory("permohonan/" . $permohonanCode . '/persyaratan');

        $expoloded = explode(",", $persyaratan["file"]);
        $decoded = base64_decode($expoloded[1]);
        $extension =  "pdf";
        $name = Str::slug($persyaratan["persyaratan"], '_');
        $filename = $name . '.' . $extension;
        $path = storage_path('app/permohonan/' . $permohonanCode . '/persyaratan') . '/' . $filename;
        file_put_contents($path, $decoded);

        $arPers = array(
            "file" => $filename,
            "updated_at" => $timestamp,
            "user_uploaded_file" => Session::get("user_id"),
        );
        mdPermohonanPersyaratan::where("permohonan_persyaratanId", $persyaratan["permohonan_persyaratanId"])
            ->update($arPers);

        return $filename;
    }
    function UploadSuratTelaah(Request $r)
    {
        date_default_timezone_set("Asia/Bangkok");
        $timestamp = date("Y-m-d H:i:s");

        $persyaratan = $r->get("persyaratan");
        $permohonanCode = $r->get("permohonanCode");
        Storage::makeDirectory("permohonan/" . $permohonanCode);
        Storage::makeDirectory("permohonan/" . $permohonanCode . '/rekomendasi');

        $expoloded = explode(",", $persyaratan["file"]);
        $decoded = base64_decode($expoloded[1]);
        $extension =  "pdf";
        $name = Str::slug($persyaratan["nomor"], '_');
        $filename = $name . '.' . $extension;
        $path = storage_path('app/permohonan/' . $permohonanCode . '/rekomendasi') . '/' . $filename;
        file_put_contents($path, $decoded);

        // $arPers = array(
        //     "file" => $filename,
        //     "updated_at" => $timestamp,
        //     "user_uploaded_file" => Session::get("user_id"),
        // );
        // mdPermohonanPersyaratan::where("permohonan_persyaratanId", $persyaratan["permohonan_persyaratanId"])
        //     ->update($arPers);

        return $filename;
    }

    /*----------------------=== CRUD ===-----------------------*/

    function insertPermohonan(Request $r)
    {
        $data = $r->get("form");
        $perusahaan = new Request();
        $perusahaan->replace(['perusahaan' => $data['perusahaan']]);

        $perusahaan_id = perusahaanControl::Insertperusahaan($perusahaan);
        $data['pemohon']['perusahaan_id'] =  $perusahaan_id;
        $perusahaan_pemohon = new Request();
        $perusahaan_pemohon->replace(['pemohon' => $data['pemohon']]);
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
            "opd_id"            => $data["izin"]["opd_id"],
            "opdi_id"           => $data["izin"]["opdi_id"],
            "status"            => "proses",
            "create_on"         => "walkin"
        );
        mdPermohonan::insert($toDBpermohonan);
        $permohonanId = DB::getPdo()->lastInsertId();

        foreach ($data["persyaratan"] as $index => $p) {
            $toDbPersyaratan = array(
                "permohonan_id" => $permohonanId,
                "persyaratan" => $p["persyaratan"],
                "status" => "waiting-upload",
                "catatan" => $p["catatan"]
            );
            mdPermohonanPersyaratan::insert($toDbPersyaratan);
        }




        return array(
            "title"     => "Info",
            "type"      => "success",
            "message"   => "Data Berhasil Di Simpan",
            "code"      => "200",
            "dataId"        => $permohonanId
        );
    }

    function onlinedata(Request $r)
    {

        $data = mdPermohonan::with(['izin', 'perusahaan', 'opd', 'persyaratan'])
            ->where('create_on', 'online')
            ->where('status', 'proses')
            ->orderBy('created_at', 'DESC')
            ->get();
        return $data;
    }

    function VerifikasiFO(Request $r)
    {
        $kategori = $r->get('kategori');
        $data = $r->get('data');
        if ($kategori == 'tolak') {
            $todbpermohonan = array("status" => "tolak", "updated_at" => \Carbon\Carbon::now());
            mdPermohonan::where("permohonan_id", $r->get("permohonan_id"))->update($todbpermohonan);

            $totrack = array(
                "permohonan_id" => $r->get("permohonan_id"),
                "perusahaan_id" => $r->get("perusahaan_id"),
                "pesan" => "maaf permohonan anda di tolak karena kendala pada kelengkapan Persyaratan",
                "step" => "7",
                "user_id" => Auth::user()->user_id,
                "kategori" => "FRONT OFFICE",
                "ShowOnuser" => true,
            );
            mdTrack::insert($totrack);
        } else {
            $todbpermohonan = array("status" => "keabsahan", "updated_at" => \Carbon\Carbon::now());
            mdPermohonan::where("permohonan_id", $r->get("permohonan_id"))->update($todbpermohonan);

            $totrack = array(
                "permohonan_id" => $r->get("permohonan_id"),
                "perusahaan_id" => $r->get("perusahaan_id"),
                "pesan" => "Kelengkapan Persyaratan Telah di verifikasi oleh Petugas Front Office",
                "step" => "3",
                "user_id" => Auth::user()->user_id,
                "kategori" => "FRONT OFFICE",
                "ShowOnuser" => true,
            );
            mdTrack::insert($totrack);
        }



        foreach ($data as $index => $p) {
            $toDbPersyaratan = array(
                "persyaratan" => $p["persyaratan"],
                "status" => $p['status'],
                "catatan" => $p["catatan"]
            );
            mdPermohonanPersyaratan::where('permohonan_persyaratanId', $p['permohonan_persyaratanId'])->update($toDbPersyaratan);
        }
    }

    function PermohonanKeabsahan(Request $r)
    {
        $dataByDate = mdPermohonan::with(['izin', 'perusahaan', 'opd', 'persyaratan', 'pemohon', 'petugas'])
        ->where('status', 'keabsahan')
        ->orderBy('updated_at', 'DESC')
        ->get();

        return $dataByDate;
    }
    function PermohonanPermintaanTelaah(Request $r)
    {
        $dataByDate = mdPermohonan::with(['izin', 'perusahaan', 'opd', 'persyaratan', 'pemohon', 'petugas', 'suratpermintaan'])
            ->where('status', '=', 'teknis')
            ->Orwhere('status', '=', 'teknisbalas')
        ->orderBy('updated_at', 'DESC')
        ->get();

        return $dataByDate;
    }

    function GraficByDate()
    {
        $day = [];
        $start = Carbon::now()->startOfMonth()->format('Y-m-d');
        $end = Carbon::now()->format('Y-m-d');
        $period = CarbonPeriod::create($start, $end);

        foreach ($period as $i => $date) {
            $label[] = $date->format("d/m/Y");
            $data[] = mdPermohonan::whereDate('created_at', $date->format('Y-m-d'))->count();
        }

        $day[] = $label;
        $day[] = $data;

        return $day;
    }

    function CetakSerahTerima(Request $r)
    {
        $start = Carbon::now()->subMonth(1)->startOfMonth()->toDateString();
        $end = date('Y-m-d', strtotime("+1 day"));
        $dataByDate = mdPermohonan::with(['izin', 'perusahaan', 'opd', 'persyaratan', 'pemohon', 'petugas'])
        ->whereBetween('created_at', [$start, $end])
            ->where('status', '!=', 'proses')
            ->where('status', '!=', 'tolak')
            ->where('status', '!=', 'pending')
            ->orderBy('created_at', 'DESC')
            ->get();
        return $dataByDate;
    }
}

<?php

namespace App\Http\Controllers;

use App\mdPermohonan;
use App\model\mdPermohonanPersyaratan;
use App\model\mdTrack;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class validasiControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'VerifikasiBO') {
            return self::VerifikasiBO($r);
        } else if ($type == 'dataByDate') {
            return self::dataByDate($r);
        } else if ($type == 'dataByRange') {
            return self::dataByRange($r);
        } else if ($type == 'teknisstatus') {
            return self::teknisstatus($r);
        }
    }

    function teknisstatus(Request $r)
    {
        $teknis = mdPermohonan::where('status', 'teknis')->count();
        $terkirim = mdPermohonan::where('status', 'tekniskirim')->count();

        $total = $teknis + $terkirim;
        $tp = ($teknis / $total) * 100;
        $tt = ($terkirim / $total) * 100;

        return array(
            "teknis" => $teknis,
            "terkirim" => $terkirim,
            "tp" => $tp,
            "tt" => $tt,
            "total" => $total,
        );
    }

    function dataByDate(Request $r)
    {
        $date = date("Y-m-d", strtotime($r->get('date')));
        $status = $r->get("status");

        if ($status != null) {
            $dataByDate = mdPermohonan::with(['izin', 'perusahaan', 'opd', 'persyaratan'])
                ->where('status', $status)
                ->orderBy('created_at', 'DESC')
                ->get();
        } else {
            $dataByDate = mdPermohonan::with(['izin', 'perusahaan', 'opd', 'persyaratan'])
                ->where('status', $status)
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
                ->where('status', 'keabsahan')
                ->whereBetween("created_at", [$start, $end])
                ->orderBy('created_at', 'DESC')
                ->get();
        } else {
            $range = mdPermohonan::with(['izin', 'perusahaan', 'opd', 'persyaratan'])
                ->where('status', 'keabsahan')
                ->whereBetween("created_at", [$start, $end])
                ->orderBy('created_at', 'DESC')
                ->get();
        }
        return $range;
    }

    function VerifikasiBO(Request $r)
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
                "step" => "selesai",
                "user_id" => Auth::user()->user_id,
                "kategori" => "BACK OFFICE",
                "ShowOnuser" => true,
            );
            mdTrack::insert($totrack);
        } else {
            $todbpermohonan = array("status" => "teknis", "updated_at" => \Carbon\Carbon::now());
            mdPermohonan::where("permohonan_id", $r->get("permohonan_id"))->update($todbpermohonan);

            $totrack = array(
                "permohonan_id" => $r->get("permohonan_id"),
                "perusahaan_id" => $r->get("perusahaan_id"),
                "pesan" => "Kelengkapan dan Keabsahan Persyaratan Telah di verifikasi oleh Petugas Back Office",
                "step" => "4",
                "user_id" => Auth::user()->user_id,
                "kategori" => "BACK OFFICE",
                "ShowOnuser" => true,
            );
            mdTrack::insert($totrack);

            $totrack = array(
                "permohonan_id" => $r->get("permohonan_id"),
                "perusahaan_id" => $r->get("perusahaan_id"),
                "pesan" => "Pemeriksaan & validasi berkas",
                "step" => "4",
                "user_id" => Auth::user()->user_id,
                "kategori" => "BACK OFFICE",
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
}

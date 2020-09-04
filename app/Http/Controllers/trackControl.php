<?php

namespace App\Http\Controllers;

use App\mdPermohonan;
use App\model\mdTrack;
use App\model\mdPermohonanPersyaratan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class trackControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'trackById') {
            return self::trackById($r);
        } elseif ($type == 'trackByaccount') {
            return self::trackByaccount($r);
        }
    }

    function trackById(Request $r)
    {
        $permohonan_id = Crypt::decryptString($r->get("permohonan_id"));
        $permohonan = mdPermohonan::with('opd', 'izin')->where('permohonan_id', $permohonan_id)->first();
        $track = mdTrack::with(['user', 'permohonan' => function ($e) {
            $e->with('pemohon');
        }])->where("permohonan_id", $permohonan_id)->where("showOnuser", "true")->get();
        $permohonan_persyaratan = mdPermohonanPersyaratan::where("permohonan_id", $permohonan_id)->where('status', 'tolak')->get();
        return array("track" => $track, "persyaratan" => $permohonan_persyaratan, "izin" => $permohonan);
    }

    function trackByaccount()
    {
    }
}

<?php

namespace App\Http\Controllers;

use App\model\mdOpd;
use Illuminate\Http\Request;

class opdControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'dataAll') {
            return self::dataAll($r);
        } elseif ($type == 'dataByOpdId') {
            return self::dataByOpdId($r);
        }
    }

    function dataAll()
    {
        return mdOpd::with(['izin'])->orderBy('opd', 'ASC')->get();
    }

    function dataByOpdId(Request $r)
    {
        $id = $r->get("opdId");
        return mdOpd::with(['izin'])
            ->where("opd_id", $id)
            ->orderBy('opd', 'ASC')->first();
    }

    function routingSlip(Request $r)
    {
        $id = $r->get("id");
        $data = mdPermohonan::with(['opd', 'persyaratan', 'izin', 'perusahaan', 'pemohon'])
            ->where('permohonan_id', $id)
            ->get();
        $p = $data[0];

        $pdf = PDF::loadView('pdf.routingSlip', compact('p'));
        return $pdf->stream('invoice.pdf');
    }
}

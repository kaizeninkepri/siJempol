<?php

namespace App\Http\Controllers;

use App\model\mdopdIzin;
use Illuminate\Http\Request;

class persyaratanControl extends Controller
{
    function jsonApi(Request $r)
    {
        $kategori = $r->get("q");
        if ($kategori != null) {
            $izin = mdopdIzin::with(['persyaratan', 'opd'])
                ->where("kategori", $kategori)
                ->get();
        } else {
            $izin = mdopdIzin::with(['persyaratan', 'opd'])
                ->get();
        }


        return response()
            ->json($izin);
    }
}

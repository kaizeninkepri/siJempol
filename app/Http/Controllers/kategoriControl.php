<?php

namespace App\Http\Controllers;

use App\mdKategori;
use Illuminate\Http\Request;

class kategoriControl extends Controller
{
    function index(Request $r){
        $type = $r->get("type");
        if($type == 'GetByAktif'){
           return self::GetByAktif($r);
        }
        
    }

    function GetByAktif(Request $r){
        $kategori = mdKategori::where('aktif','true')->get();

        return $kategori;
    }
}

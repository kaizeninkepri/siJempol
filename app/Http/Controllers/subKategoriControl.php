<?php

namespace App\Http\Controllers;

use App\mdsubKategori;
use Illuminate\Http\Request;

class subKategoriControl extends Controller
{
    function index(Request $r){
        $type = $r->get("type");
        if($type == 'GetByKategori'){
           return self::GetByKategori($r);
        }
        
    }

    function GetByKategori(Request $r){
        $id = $r->get('id');

        $kategori = mdsubKategori::where('id_kategori',$id)->get();

        return $kategori;
    }
}

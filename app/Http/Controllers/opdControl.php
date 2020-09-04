<?php

namespace App\Http\Controllers;

use App\model\mdOpd;
use Illuminate\Http\Request;

class opdControl extends Controller
{
    function index(Request $r){
        $type = $r->get("type");
        if($type == 'dataAll'){
           return self::dataAll($r);
        }
    }

    function dataAll(){
        return mdOpd::orderBy('opd','ASC')->get();
    }
}

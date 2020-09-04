<?php

namespace App\Http\Controllers;

use App\model\mdIdentitas;
use Illuminate\Http\Request;

class identitasControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'insert') {
            return self::store($r);
        } elseif ($type == 'update') {
            return self::updatedData($r);
        }
    }

    function store(Request $r)
    {
        $data = $r->get('data');
        $toDB = array(
            "meta_title" => $data['meta_title'],
            "meta_author" => $data['meta_author'],
            "meta_description" => $data['meta_description'],
            "login_title" => $data['login_title'],
            "login_subtitle" => $data['login_subtitle'],
        );
        mdIdentitas::insert($toDB);
    }

    function updatedData(Request $r)
    {
        $data = $r->get('data');
        $toDB = array(
            "meta_title" => $data['meta_title'],
            "meta_author" => $data['meta_author'],
            "meta_description" => $data['meta_description'],
            "login_title" => $data['login_title'],
            "login_subtitle" => $data['login_subtitle'],
        );
        mdIdentitas::where('identitas_id', $data['identitas_id'])->update($toDB);
    }
}

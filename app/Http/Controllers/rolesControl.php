<?php

namespace App\Http\Controllers;

use App\model\mdroles;
use Illuminate\Http\Request;

class rolesControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'dataById') {
            return self::dataById($r);
        }
    }

    function dataById(Request $r)
    {
        $data = $r->get('roles');
        return mdroles::where('role_id', $data)->first();
    }
}

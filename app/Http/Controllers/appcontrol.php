<?php

namespace App\Http\Controllers;

use App\mdrolesPermission;
use App\mdUsers;
use App\model\mdrolesModul;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\permissionControl;
use App\model\mdIdentitas;

class appcontrol extends Controller
{
    function index(Request $r)
    {
        $roleId = $r->request->add(['data' => Auth::user()->role_id]);
        $menu = permissionControl::permissiondataByrolesId($r);
        $identitas = mdIdentitas::orderBy("identitas_id", 'ASC')->first();
        return view('panel.index', compact('menu', 'identitas'));
    }

    function login(Request $request)
    {

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            return redirect()->intended('fo/dashboard');
        }
    }
    function register()
    {
        //     return "afriandi";
        return view('panel.register');
    }
    function logout()
    {
        Auth::logout();
        return redirect('login');
    }

    function getById()
    {
        return mdUsers::with(['role'])->where("id", Auth::user()->id)->first();
    }
}

<?php

namespace App\Http\Controllers;

use App\mdrolesPermission;
use App\mdUsers;
use App\model\mdrolesModul;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\permissionControl;
use App\model\mdIdentitas;
use App\model\mdOpd;

class appcontrol extends Controller
{
    function index(Request $r)
    {
        $roleId = $r->request->add(['data' => Auth::user()->role_id]);
        $menu = permissionControl::permissiondataByrolesId($r);
        $identitas = mdIdentitas::orderBy("identitas_id", 'ASC')->first();
        return view('panel.index', compact('menu', 'identitas'));
    }

    function dashboard()
    {
        $user = Auth::user();
        if ($user->role_id == '3') { // do your magic here
            return redirect('fo/dashboard');
        } elseif ($user->role_id == '2') { // do your magic here
            return redirect('bo/dashboard');
        } elseif ($user->role_id == '4') { // do your magic here
            return redirect('opd/dashboard');
        } else {
            return redirect('/pemohon/dashboard');
        }
    }

    function login(Request $request)
    {

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            if ($user->role_id == '3') { // do your magic here
                return array('code' => "200", 'url' => "fo/dashboard");
            } elseif ($user->role_id == '2') { // do your magic here
                return  array('code' => "200", 'url' => 'bo/dashboard');
            } elseif ($user->role_id == '4') { // do your magic here
                return  array('code' => "200", 'url' => 'opd/dashboard');
            } else {
                return  array('code' => "200", 'url' => 'pemohon/dashboard');
            }
        } else {
            return  array('code' => "500");
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
        if (Auth::check()) {
        return mdUsers::with(['role'])->where("id", Auth::user()->id)->first();
         }
    }

    function web()
    {
        $opd = mdOpd::orderBy("opd", "ASC")->get();
        return view('caliris/master', compact('opd'));
    }
}

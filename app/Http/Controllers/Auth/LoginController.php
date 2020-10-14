<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\model\mdIdentitas;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;
    protected function authenticated(Request $request, $user)
    {
        if ($user->role_id == '3') { // do your magic here
            return redirect('fo/dashboard');
        } elseif ($user->role_id == '2') { // do your magic here
            return redirect('bo/dashboard');
        } elseif ($user->role_id == '4') { // do your magic here
            return redirect('opd/dashboard');
        }

        return redirect('/pemohon/dashboard');
    }
    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    public function showLoginForm()
    {
        $identitas = mdIdentitas::orderBy("identitas_id", 'ASC')->first();
        return view('panel.login', compact('identitas'));
    }
}

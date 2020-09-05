<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::GET("/web", "appcontrol@web");

Auth::routes();

Route::post("/login/submit", "appcontrol@login");


// Route::get("/register", "appcontrol@register");

Route::middleware(['auth'])->group(function () {

    Route::POST("/opd/izin", "opdIzinControl@index");


    Route::POST("/master/opd", "opdControl@index");
    Route::POST("/master/sk", "skControl@index");
    Route::POST("/master/track", "trackControl@index");
    Route::POST("/surat/rekomendasi", "suratRekomendasiControl@index");
    Route::post("/perizinan/permohonan", "permohonanControl@index");
    Route::POST("/perizinan/perusahaan", "perusahaanControl@index");
    Route::POST("/validasi", "validasiControl@index");

    Route::get("/users/getById", "appcontrol@getById");
    Route::get("/logout", "appcontrol@logout");
    Route::post("/roles/modul", "rolesModulControl@index");
    Route::get("/roles/modul/data", "rolesModulControl@moduldata");
    Route::post("/roles/permission", "permissionControl@index");
    Route::get("/roles/permission/data", "permissionControl@data");
    Route::post("/roles/role", "rolesControl@index");
    Route::post("/perusahaan/Identitas", "identitasControl@index");


    Route::post("/pemohon", "pemohonControl@index");


    Route::get("/{any}", "appcontrol@index")->where("any", ".*");
});

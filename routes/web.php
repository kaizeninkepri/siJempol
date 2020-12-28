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


Auth::routes();
Route::get("/", "appcontrol@dashboard");
Route::get("/users/getById", "appcontrol@getById");
Route::post("/integration", "IntegrationControl@index");
Route::get("/pdf/index", "pdfControl@index");
Route::get("/pdf/pendaftaran", "pdfControl@pendaftaranPDF");
Route::post("/roles/permission", "permissionControl@index");
Route::POST("/perizinan/perusahaan", "perusahaanControl@index");
Route::GET("/web", "appcontrol@web")->withoutMiddleware(['auth']);;

Route::post("/login/submit", "appcontrol@login");
Route::post("/master/pendaftaran", "pendaftarancontrol@ToSelf");
Route::get("/pendaftaran", "pendaftarancontrol@index");
Route::get("/pendaftaran/penelitian", "pendaftarancontrol@penelitian");
Route::post("/pendaftaran/penelitian/post", "penelitianControl@index");
Route::get("/pendaftaran/penelitian/penelitianById", "opdIzinControl@penelitianById");
Route::get("/pendaftaran/selesai", "pendaftarancontrol@pendaftaranSelesai");

Route::get("/grafik/permohonan", "permohonanControl@GraficByDate");

// Route::get("/register", "appcontrol@register");

Route::middleware(['auth'])->group(function () {

    Route::POST("/opd/izin", "opdIzinControl@index");
    Route::POST("/master/penelitian", "penelitianControl@index");

    Route::POST("/master/users", "userControl@index");
    Route::POST("/master/opd", "opdControl@index");
    Route::POST("/master/sk", "skControl@index");
    Route::POST("/master/track", "trackControl@index");
    Route::POST("/surat", "suratRekomendasiControl@index");
    Route::post("/perizinan/permohonan", "permohonanControl@index");

    Route::POST("/validasi", "validasiControl@index");


    Route::get("/logout", "appcontrol@logout");
    Route::post("/roles/modul", "rolesModulControl@index");
    Route::get("/roles/modul/data", "rolesModulControl@moduldata");

    Route::get("/roles/permission/data", "permissionControl@data");
    Route::post("/roles/role", "rolesControl@index");
    Route::post("/perusahaan/Identitas", "identitasControl@index");

    Route::get("/{any}", "appcontrol@index")->where("any", ".*");
    Route::post("/pemohon", "pemohonControl@index");
});

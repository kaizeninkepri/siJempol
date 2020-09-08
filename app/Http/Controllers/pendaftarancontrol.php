<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use File;
use App\Http\Controllers\perusahaanControl;
use App\Mail\pendaftaranEmail;
use App\mdUser;
use App\mdUsers;
use App\model\mdIdentitas;
use App\model\mdperusahaan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Hash;

class pendaftarancontrol extends Controller
{
    function index()
    {
        $identitas = mdIdentitas::orderBy("identitas_id", 'ASC')->first();
        return view("pendaftaran", compact("identitas"));
    }

    function pendaftaranSelesai()
    {
        $identitas = mdIdentitas::orderBy("identitas_id", 'ASC')->first();
        return view("pendaftaranSelesai", compact("identitas"));
    }
    function ToSelf(Request $r)
    {
        $type = $r->get("type");
        if ($type == "UploadFileKeabsahan") {
            return self::UploadFileKeabsahan($r);
        } elseif ($type == "daftar") {
            return self::daftar($r);
        }
    }

    function UploadFileKeabsahan(Request $r)
    {
        date_default_timezone_set("Asia/Bangkok");
        $timestamp = date("Y-m-d H:i:s");

        $uploadData = $r->get("upload");
        $perusahaan = $r->get("perusahaan");




        /* directory */
        $pathFolder = Storage::disk("ResourcesExternal")->path($perusahaan['npwp']);
        if (!File::exists($pathFolder)) {
            File::makeDirectory($pathFolder, $mode = 0777, true, true);
        }

        for ($i = 0; $i < count($uploadData); $i++) {

            $expoloded = explode(",", $uploadData[$i]["files"]);
            $decoded = base64_decode($expoloded[1]);
            $extension =  "pdf";
            $name = Str::slug($uploadData[$i]["name"], '_');
            $filename = $name . '.' . $extension;
            $path = Storage::disk("ResourcesExternal")->path($perusahaan['npwp'] . '/' . $filename);
            file_put_contents($path, $decoded);
        }
        // $arPers = array(
        //     "file" => $filename,
        //     "updated_at" => $timestamp,
        //     "user_uploaded_file" => Session::get("user_id"),
        // );
        // mdPermohonanPersyaratan::where("permohonan_persyaratanId", $persyaratan["permohonan_persyaratanId"])
        //     ->update($arPers);

        // return $filename;
    }

    function daftar(Request $r)
    {
        $postperusahaan = $r->get("perusahaan");
        $postupload = $r->get("upload");


        $perusahaan = new Request();
        $perusahaan->replace(['perusahaan' => $postperusahaan]);

        $upload = new Request();
        $upload->replace(['upload' => $postupload, 'perusahaan' => $postperusahaan]);

        $perusahaan_id = perusahaanControl::Insertperusahaan($perusahaan);
        self::UploadFileKeabsahan($upload);

        $perusahaan = mdPerusahaan::where("perusahaan_id", $perusahaan_id)->first();


        $ToDBPerusahaan = array(
            "aktif" => true,
        );

        mdperusahaan::where('perusahaan_id', $perusahaan_id)->update($ToDBPerusahaan);
        $user_id = mdUsers::max("user_id");
        $ToDBUsers = array(
            "email" => $perusahaan->email,
            "role_id" => "5",
            "username" => $perusahaan->email,
            "password" => Hash::make($postperusahaan['password']),
            "perusahaan_id" => $perusahaan_id,
            "is_active" => "true",
            "user_id" => $user_id + 1,
        );
        mdUsers::insert($ToDBUsers);
        $user_id = DB::getPdo()->lastInsertId();
    }

    public function SendEmailConfirmation(Request $r, $perusahaan_id)
    {
        $id = $perusahaan_id;
        $url = url('/pendaftaran/confirmation?q=' . $id);

        $perusahaan = $r->get("perusahaan");

        $email = new Request();
        $email->replace(['perusahaan' => $perusahaan, 'linkUrl' => $url]);

        Mail::to($perusahaan['email'])->send(new pendaftaranEmail($email));

        return "email terkirim";
    }
}

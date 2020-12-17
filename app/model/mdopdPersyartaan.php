<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class mdopdPersyartaan extends Model
{
    protected $table        = "opd_persyaratan";
    protected $primaryKey   = "opdp_id";

    protected $appends = [
        'UploadAtemp',
    ];

    function getUploadAtempAttribute()
    {
        $data = array(
            "name"  => $this->persyaratan,
            "nameFile" => "Unggah " . $this->persyaratan,
            "praname" => "Unggah " . $this->persyaratan,
            "type" => null,
            "size" => 0,
            "objectURL" => null,
            "id" => $this->persyaratan,
            "button" => false,
            "files" => null,
            "css" => null,
            "fileTemp" => null,
            "progressBar" => 0,
        );
        return $data;
    }
}

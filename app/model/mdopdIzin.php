<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Crypt;

class mdopdIzin extends Model
{
    protected $table        = "opd_izin";
    protected $primaryKey   = "opdi_id";

    protected $appends = [
        'value',
        'Crypt',
        'linkPDF'
    ];

    function getvalueAttribute()
    {
        return $this->nama_izin;
    }
    function getlinkPDFAttribute()
    {
        $crypt = Crypt::encryptString($this->opdi_id);
        // $link = url("api/persyaratan/pdf?id=" . $crypt);
        $link = "http://appkepri.com/siJempol/api/persyaratan/pdf?id=" . $crypt;
        $a = "<a href='" . $link . "'><img src='http://dpmptsp.kepriprov.go.id/asset/tempptsp/images/dd.png'><span style='font-size:10px'>Data Download</span></a>";
        return $link;
    }
    function persyaratan()
    {
        return $this->hasMany(mdopdPersyartaan::class, "opdi_id");
    }

    function opd()
    {
        return $this->belongsTo(mdOpd::class, "opd_id");
    }

    function getCryptAttribute()
    {
        return Crypt::encryptString($this->opdi_id);
    }
}

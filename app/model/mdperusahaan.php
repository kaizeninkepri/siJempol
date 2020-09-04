<?php

namespace App\model;

use App\mdPermohonan;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class mdperusahaan extends Model
{
    protected $table        = "perusahaan";
    protected $primaryKey   = "perusahaan_id";

    protected $appends = [
        'fullname',
        'smsGateway',
        'icon',
        'badanusaha'
    ];

    function geticonAttribute()
    {
        if ($this->kategori == 'perorangan') {
            return "teacher.png";
        }
        return "urban.png";
    }

    function getfullnameAttribute()
    {
        $kategori = Str::lower($this->kategori);
        if ($kategori == 'perorangan') {
            return $this->nama;
        }
        return $this->kategori . '. ' . $this->nama;
    }
    function getbadanusahaAttribute()
    {
        $kategori = Str::lower($this->kategori);
        if ($kategori == 'perorangan') {
            return "Perorangan";
        }
        return "Badan Usaha";
    }

    function getsmsGatewayAttribute()
    {
        return "DPMPTSP KEPRI -  Apakah Anda Puas Dengan Pelayanan yang di Berikan ?, Balas Ya untuk Menilai";
    }

    function permohonan()
    {
        return $this->hasMany(mdPermohonan::class, 'perusahaan_id');
    }

    function pengurus()
    {
        return $this->belongsTo(mdperusahaanPemohon::class, 'perusahaan_id');
    }
}

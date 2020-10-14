<?php

namespace App;

use App\model\mdOpd;
use App\model\mdTrackSurat;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class mdsuratPermintaan extends Model
{
    protected $table        = "surat_permintaan";
    protected $primaryKey   = "surat_permintaan_id";

    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i',
    ];


    protected $appends = [
        'waktuHuman',
    ];

    function getwaktuHumanAttribute()
    {
        return Carbon::parse($this->created_at)->diffForHumans();
    }

    function petugas()
    {
        return $this->hasMany(mdTrackSurat::class, "surat_permintaan_id");
    }

    function backoffice()
    {
        return $this->belongsTo(mdUsers::class, "user_id", "user_id");
    }

    function permohonan()
    {
        return $this->belongsTo(mdPermohonan::class, "permohonan_id");
    }

    function opd()
    {
        return $this->belongsTo(mdOpd::class, "opd_id");
    }
}

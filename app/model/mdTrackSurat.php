<?php

namespace App\model;

use App\mdUsers;
use Illuminate\Database\Eloquent\Model;

class mdTrackSurat extends Model
{
    protected $table = "track_surat";
    protected $primaryKey = "track_surat_id";

    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i',
    ];

    protected $appends = [
        'kategori',
    ];

    function getkategoriAttribute()
    {
        if ($this->status == '1') {
            return  "Baca";
        } elseif ($this->status == '2') {
            return  "terkirim";
        }
    }
    function petugas()
    {
        return $this->belongsTo(mdUsers::class, "user_id", "user_id");
    }
}

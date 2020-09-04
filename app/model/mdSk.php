<?php

namespace App\model;

use App\mdPermohonan;
use Illuminate\Database\Eloquent\Model;

class mdSk extends Model
{
    protected $table = "st_sk";
    protected $primaryKey = "stSK_id";

    protected $casts = [
        'created_at'  => 'date:d/m/Y H:i',
        'updated_at'  => 'date:d/m/Y H:i',
    ];

    function permohonan()
    {
        return $this->belongsTo(mdPermohonan::class, 'permohonan_id');
    }
}

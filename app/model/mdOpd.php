<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class mdOpd extends Model
{
    protected $table        = "opd";
    protected $primaryKey   = "opd_id";

    function izin()
    {
        return $this->hasMany(mdopdIzin::class, 'opd_id');
    }
}

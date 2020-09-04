<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class mdPermohonanPersyaratan extends Model
{
    protected $table        = "permohonan_persyaratan";
    protected $primaryKey   = "permohonan_persyaratanId";

    protected $appends = [
        'classBind',
        'ionIcon',
        'ionClass',
        'upload',
        'progress',
        'pratinjau'
    ];

    function getclassBindAttribute()
    {
        return '';
    }
    function getionIconAttribute()
    {
        if ($this->file != null) {
            return "checkmark-done-outline";
        }
        return "close-circle-outline";
    }
    function getionClassAttribute()
    {
        if ($this->file != null) {
            return true;
        }
        return false;
    }
    function getuploadAttribute()
    {

        return false;
    }
    function getpratinjauAttribute()
    {
        if ($this->status == 'waiting-upload') {
            return false;
        }

        return true;
    }
    function getprogressAttribute()
    {

        return false;
    }
}

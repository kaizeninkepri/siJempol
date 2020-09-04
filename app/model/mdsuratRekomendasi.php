<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class mdsuratRekomendasi extends Model
{
    protected $table        = "st_rekom";
    protected $primaryKey   = "stRekom_id";

    public $timestamps = false;
    protected $casts = [
        'created_at_kajian' => 'datetime:d-m-Y H:i',
    ];

    protected $appends = [
        'kirimKajian',
        'kirimRekom',
    ];

    function getkirimKajianAttribute() {
        $time = $this->updated_at_kajian;
        if($this->updated_at_kajian != null){
            $kirim = $time;
        }
        else{
            $kirim = 'Surat Belum Di Kirim';
        }
      return $kirim;
    }
    function getkirimRekomAttribute() {
        $time = $this->updated_at_rekom;
        if($this->updated_at_rekom != null){
            $kirim = $time;
        }
        else{
            $kirim = 'Surat Belum Di Kirim';
        }
      return $kirim;
    }

    function opd(){
        return $this->belongsTo(mdOpd::class,'opd_id');
    }
}

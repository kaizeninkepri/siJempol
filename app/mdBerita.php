<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class mdBerita extends Model
{
    protected $table        = "berita";
    protected $primaryKey   = "id_berita";

    public $timestamps = false;
    protected $appends = [
        'explodeTag',
        'folder',
        'value',
        'id'
    ];

    function getidattribute()
    {
        return $this->id_berita;
    }

    function getexplodeTagAttribute()
    {
        return explode(",", $this->tag);
    }
    function getvalueAttribute()
    {
        return $this->judul;
    }
    function getfolderAttribute()
    {
        return date("Ymd", strtotime($this->tgl_publish));
    }
}

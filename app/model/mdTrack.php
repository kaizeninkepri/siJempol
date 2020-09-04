<?php

namespace App\model;

use App\mdPermohonan;
use App\mdUser;
use Illuminate\Database\Eloquent\Model;

class mdTrack extends Model
{
    protected $table        = "track";
    protected $primaryKey   = "track_id";

    protected $appends = [
        'lastest',
        'activityTime',
        'color',
        'stepKet'
    ];

    function getlastestAttribute()
    {
        return date("h:i", strtotime($this->created_at));
    }
    function getactivityTimeAttribute()
    {
        return date("d-m-Y H:i:s", strtotime($this->created_at));
    }
    function getstepKetAttribute()
    {
        if ($this->step == '7') {
            return "Pengajuan Permohonan Selesai";
        } else {
            return "Pengajuan Berlanjut Pada Step - " . $this->step;
        }
    }
    function getcolorAttribute()
    {
        if ($this->step == '2') {
            return '#fe9901';
        } elseif ($this->step == '1') {
            return '#286581';
        } elseif ($this->step == '3') {
            return '#1a99d3';
        } elseif ($this->step == '4') {
            return '#e76a3c';
        } elseif ($this->step == '5') {
            return '#46ad16';
        }
    }

    function user()
    {
        return  $this->BelongsTo(mdUser::class, 'user_id', 'user_id');
    }

    function permohonan()
    {
        return  $this->BelongsTo(mdPermohonan::class, 'permohonan_id');
    }
}

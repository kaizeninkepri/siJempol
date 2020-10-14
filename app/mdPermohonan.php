<?php

namespace App;

use App\model\mdOpd;
use App\model\mdopdIzin;
use App\model\mdPermohonanPersyaratan;
use App\model\mdperusahaan;
use App\model\mdperusahaanPemohon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Crypt;

class mdPermohonan extends Model
{
    protected $table        = "permohonan";
    protected $primaryKey   = "permohonan_id";

    protected $casts = [
        'created_at'  => 'date:d/m/Y H:i',
        'updated_at'  => 'date:d/m/Y H:i',
    ];

    protected $appends = [
        'jam',
        'lastjam',
        'createonkategori',
        'actionButton',
        'idCrypt',
        'BOstatus',
        'statusDataInHuman',
        'BOActionButton',
        'InhumanMasuk',
    ];


    function getBOActionButtonAttribute()
    {
        if ($this->status == 'keabsahan') {
            return array('name' => "Lanjut Step 2", "routerName" => "bo-permohonan-detail", "id" => $this->permohonan_id);
        } else {
            return array('name' => "Track Permohonan", "routerName" => "bo-surat-permintaan", "id" => $this->permohonan_id);
        }
    }

    function getidCryptAttribute()
    {
        return Crypt::encryptString($this->permohonan_id);
    }

    function getstatusDataInHumanAttribute()
    {
        if ($this->status == 'keabsahan') {
            return "Validasi Keabsahan Berkas";
        } else if ($this->status == 'teknis') {
            return "Permintaan Surat Telaah";
        } else if ($this->status == 'tekniskirim') {
            return "Balasan Surat Telaah";
        } else {
            return $this->status;
        }
    }

    function getBOstatusAttribute()
    {
        if ($this->status == 'keabsahan') {
            return "bo-primary";
        } else if ($this->status == 'teknis') {
            return "bo-warning";
        } else if ($this->status == 'tekniskirim') {
            return "btn-teal";
        } else {
            return "btn-primary";
        }
    }

    function getactionButtonAttribute()
    {
        if ($this->status == 'pending') {
            return array('name' => "Lanjut Step 2", "routerName" => "pemohon-pengajuan-step", 'class' => 'btn btn-warning btn-sm');
        } else {
            return array('name' => "Track Permohonan", "routerName" => "track-byId", 'class' => 'btn btn-primary btn-sm');
        }
    }

    function getjamAttribute()
    {
        return date("h:i", strtotime($this->created_at));
    }
    function getcreateonkategoriAttribute()
    {
        if ($this->create_on == 'walkin') {
            return "btn-outline-warning";
        } else {
            return "btn-primary";
        }
    }

    function getlastjamAttribute()
    {
        return Carbon::parse($this->updated_at)->diffForHumans();
    }
    function getInHumanMasukAttribute()
    {
        return Carbon::parse($this->created_at)->diffForHumans();
    }
    function opd()
    {
        return $this->belongsTo(mdOpd::class, 'opd_id');
    }
    function persyaratan()
    {
        return $this->hasMany(mdPermohonanPersyaratan::class, 'permohonan_id');
    }
    function izin()
    {
        return $this->belongsTo(mdopdIzin::class, 'opdi_id');
    }
    function perusahaan()
    {
        return $this->belongsTo(mdperusahaan::class, 'perusahaan_id');
    }
    function pemohon()
    {
        return $this->belongsTo(mdperusahaanPemohon::class, 'perusahaanp_id');
    }
    function petugas()
    {
        return $this->belongsTo(mdUser::class, "user_id", "user_id");
    }
    function suratpermintaan()
    {
        return $this->hasMany(mdsuratPermintaan::class, "permohonan_id");
    }
}

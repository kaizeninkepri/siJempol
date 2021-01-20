<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class mdPenelitian extends Model
{
    protected $table = "penelitian";
    protected $primaryKey = "penelitian_id";

    function person()
    {
        return $this->hasOne(mdPenelitianPerson::class, 'penelitian_id');
    }
}

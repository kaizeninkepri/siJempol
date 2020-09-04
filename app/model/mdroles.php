<?php

namespace App\model;

use App\mdrolesPermission;
use Illuminate\Database\Eloquent\Model;

class mdroles extends Model
{
    protected $table = "roles";
    protected $primaryKey = "role_id";

    protected $appends = [
        'id'
    ];

    function getidattribute()
    {
        return $this->role_id;
    }

    function permission()
    {
        return $this->hasMany(mdrolesPermission::class, 'role_id');
    }
}

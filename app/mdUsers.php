<?php

namespace App;

use App\model\mdroles;
use Illuminate\Database\Eloquent\Model;

class mdUsers extends Model
{
    protected $table = 'users';
    protected $primaryKey = "id";


    function role()
    {
        return $this->belongsTo(mdroles::class, 'role_id');
    }
}

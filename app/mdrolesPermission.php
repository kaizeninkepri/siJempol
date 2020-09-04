<?php

namespace App;

use App\model\mdroles;
use App\model\mdrolesModul;
use Illuminate\Database\Eloquent\Model;

class mdrolesPermission extends Model
{
    protected $table = "roles_permission";
    protected $primaryKey = "role_permission_id";

    function modul()
    {
        return $this->belongsTo(mdrolesModul::class, "role_modul_id");
    }

    function roles()
    {
        return $this->belongsTo(mdroles::class, "role_id");
    }
}

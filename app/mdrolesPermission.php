<?php

namespace App;

use App\model\mdroles;
use App\model\mdrolesModul;
use Illuminate\Database\Eloquent\Model;

class mdrolesPermission extends Model
{
    protected $table = "roles_permission";
    protected $primaryKey = "role_permission_id";
    // protected $casts = [
    //     'read' => 'boolean',
    //     'create' => 'boolean',
    //     'update' => 'boolean',
    //     'delete' => 'boolean',
    // ];
    function modul()
    {
        return $this->belongsTo(mdrolesModul::class, "role_modul_id");
    }

    function roles()
    {
        return $this->belongsTo(mdroles::class, "role_id");
    }
}

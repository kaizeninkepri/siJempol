<?php

namespace App\model;

use App\mdrolesPermission;
use Illuminate\Database\Eloquent\Model;

class mdrolesModul extends Model
{
    protected $table = "roles_modul";
    protected $primaryKey = "role_modul_id";

    public static $withoutAppends = false;
    protected $appends = [
        'title',
        'id'
    ];

    protected function getArrayableAppends()
    {
        if (self::$withoutAppends) {
            return [];
        }
        return parent::getArrayableAppends();
    }


    function gettitleattribute()
    {
        return $this->nama;
    }
    function getidattribute()
    {
        return $this->role_modul_id;
    }
    public function getTableColumns()
    {
        return $this->getConnection()->getSchemaBuilder()->getColumnListing($this->getTable());
    }

    function permission()
    {
        return $this->hasOne(mdrolesPermission::class, 'role_modul_id');
    }
}

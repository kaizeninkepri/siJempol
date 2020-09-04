<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class mdVideos extends Model
{
    protected $table = "videos";
    protected $primaryKey = "video_id";

    protected $appends = [
        'id'
    ];

    function getidattribute()
    {
        return $this->video_id;
    }
}

<?php

namespace App\Http\Controllers;

use App\mdUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class userControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'insert') {
            return self::insertUsers($r);
        } elseif ($type == 'dataAll') {
            return self::dataAll($r);
        } elseif ($type == 'update') {
            return self::updateUsers($r);
        } elseif ($type == 'hapus') {
            return self::hapusUsers($r);
        } elseif ($type == 'gantipassword') {
            return self::gantipassword($r);
        }
    }

    function dataAll()
    {
        return mdUser::with(['GroupAcl', 'opd'])->get();
    }

    /*--------------------============ INSERT ==============------------------------*/

    function insertUsers(Request $r)
    {
        $data = $r->get('form');

        $toDb = array(
            "username"      => $data['username'],
            "password"      => md5('123'),
            "aclGroup_id"   => $data['aclGroup_id'],
            "opd_id"        => $data['opd_id'],
            "is_active"     => $data['is_active'],
        );

        mdUser::insert($toDb);

        return array(
            "title"     => "Info",
            "type"      => "success",
            "message"   => "Data Berhasil Di input",
            "code"      => "200"
        );
    }
    function updateUsers(Request $r)
    {
        $data = $r->get('form');

        $toDb = array(
            "username"      => $data['username'],
            "aclGroup_id"   => $data['aclGroup_id'],
            "opd_id"        => $data['opd_id'],
            "is_active"     => $data['is_active'],
        );

        mdUser::where('user_id', $data['user_id'])->update($toDb);

        return array(
            "title"     => "Info",
            "type"      => "success",
            "message"   => "Data Berhasil Di ubah",
            "code"      => "200"
        );
    }
    function hapusUsers(Request $r)
    {
        mdUser::where('user_id', $r->get('id'))->delete();
        return array(
            "title"     => "Info",
            "type"      => "success",
            "message"   => "Data Berhasil Di Hapus",
            "code"      => "200"
        );
    }
    function gantipassword(Request $r)
    {
        $data = $r->get('password');
        $toDb = array(
            "password" => Hash::make($data['password']),
        );
    }
}

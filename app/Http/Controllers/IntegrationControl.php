<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class IntegrationControl extends Controller
{
    function index(Request $r)
    {
        $data = $r->get('data');
        $client = new Client(['base_uri' => 'http://180.250.33.61/']);
        $array = array('value' => 'bp1702dq', 'varcari' => 'noreq');
        $valueName = $data['value'];
        $varcari = $data['kategori'];
        // return json_encode($array);
        $response = $client->request('POST', 'sipamor_mobile_dev/test.php', [
            'auth' => [
                '0ytr3qms-kzcs-pwj0-hqox-p76l5wyb0flo',
                'qzslmti0-c8ki-pnql-btp7-pgrho3q4sogk'
            ],
            'headers' => [
                'Content-Type' => 'application/json',
                'X-Signature' => "MDJmMTdkMDAzZmM1NmZmZDRiNmI0NzNkMzhhM2E3ZjEyY2ZlMTdjMDQzZmYyMmI0OGE2YzU3MTk4NWMwOWQ2ZQ==",
                'Accept' => 'application/json',
            ],
            'body' => json_encode(['value' => $valueName, 'varcari' => 'nama']),
        ]);

        $result = $response->getBody();
        // return $result;
        // return json_decode($result);
        $potongFrom = 139 + strlen($valueName);
        $newSignature =  substr($result, $potongFrom, 90);
        // return $newSignature;

        $client = new Client(['base_uri' => 'http://180.250.33.61/']);
        $array = array('value' => 'bp1702dq', 'varcari' => 'noreq');
        // return json_encode($array);
        $response = $client->request('POST', 'sipamor_mobile_dev/informasi/get_infopajak.php', [
            'auth' => [
                '0ytr3qms-kzcs-pwj0-hqox-p76l5wyb0flo',
                'qzslmti0-c8ki-pnql-btp7-pgrho3q4sogk'
            ],
            'headers' => [
                'Content-Type' => 'application/json',
                'X-Signature' => $newSignature,
                'Accept' => 'application/json',
            ],
            'body' => json_encode(['value' => $valueName, 'varcari' => 'nama']),
        ]);

        $result = $response->getBody();
        // return $result;
        if ($result == 'null') {
            return "Data Tidak Di Temukan";
        }
        return json_decode($result);
    }
}

<html>
    <head>
       
        <title>
             @foreach($izin AS $izin)
                 Rekomendasi {{$izin->nama_izin}}
             @endforeach
        </title>
    </head>
    <body>
    <style type="text/css">
        @page{
            width: 100cm;
            height: 10cm;
            background-color: black;
        }
        html{
            background-color: black;
            margin: 10px;
            padding: 0;
            font-size:12px;
        }
        .header{
            width:500px;
            margin-left:auto;
            margin-right:auto;
                
        } 
        .judul {
            font-size:20px;
            font-weight:bold;
            border-bottom:2px solid #333;
                
        }
        .text-bold{
            font-weight: bold;
        }
        .text-right{
            text-align: right;
        }
        .text-center{
            text-align:center;
        }
        .table{
            border-collapse:collapse;
            width:auto;
            padding:5px;
            border:border 1px solid #333;
        }
        .table td{
            padding:5px;
            border:border 1px solid #333;
        }
        .table th{
            padding:5px;
            border:border 1px solid #333;
        }
        .ttdmanual{
            width:400px;
            float:right;
            text-align:center;
        }
        .ttdbarcode{
            width:600px;
            float:left;
            text-align:left;
        }
        
        .tablePD5{
            border-collapse:collapse;
            width:auto;
            padding:5px;
        }
        .tablePD5 td{
            padding:5px;
        }
        .tablePD5 th{
            padding:5px;
        }
    </style>

    <div class="headerkanan">  
       <img src="{{url('assets/images/cop_surat.png')}}">
    </div> 
    @foreach($permohonan AS $pmr)
    @php($nomorsk = substr($pmr->permohonan_code, -4))

    <center>
       <table align='center'>
           <tr class='judul'>
               <td class='judul'>SURAT KETERANGAN PENELITIAN</td>
               <td class='judul'>
                   <img src="data:image/png;base64, {{ base64_encode(QrCode::format('png')->size(100)->generate($pmr->permohonan_code.'/2n.1/DPMPTSP/2019')) }}" width=40px>                   
               </td>
           </tr>
       </table>
         
        
       </span>
    </center>
    <center><span class=''>Nomor : {{$nomorsk}}/2n.1/DPMPTSP/2019</span></center>
    
    <table class="tablePD5">
        <tr>
            <td valign="top">Dasar </td>
            <td valign="top">:</td>
            <td valign="top">1.</td>
            <td valign="top">
                Peraturan Menteri Dalam Negeri Nomor 3 Tahun 2018 tentang Penerbitan Surat Keterangan Penelitian;
            </td>
        </tr>
        <tr>
            <td valign="top"></td>
            <td valign="top"></td>
            <td valign="top">2.</td>
            <td valign="top">
                Peraturan Daerah Provinsi Kepulauan Riau Nomor 7 Tahun 2016 Tentang Pembentukan dan Susunan Perangkat Daerah Provinsi kepulauan Riau (Lembaran Daerah Provinsi Kepulaun Riau Tahun 2016 Nomor 7, Tambahan Lembaran Daerah Provinsi kepulauan Riau Nomor 41).
            </td>
        </tr>
        <tr>
            <td valign="top">Menimbang</td>
            <td valign="top">:</td>
            <td valign="top" colspan="2">
                    {{$pmr->menimbang}}
            </td>
        </tr>
        <tr>
            <td colspan="4">KEPALA DINAS PENANAMAN MODAL DAN PELAYANAN TERPADU SATU PINTU PROVINSI KEPULAUAN RIAU, memberikan rekomendasi kepada :</td>
        </tr>
    </table>
    @foreach($siswa as $siswa)
    <table class="tablePD5">
        <tr>
            <td valign="top">a.</td>
            <td valign="top">Nama / Obyek</td>
            <td valign="top">:</td>
            <td valign="top">
               {{ucwords(strtolower($siswa->nama))}}
            </td>
        </tr>
        <tr>
            <td valign="top">b.</td>
            <td valign="top">Nim/ Perguruan Tinggi/Jurusan/jenjang</td>
            <td valign="top">:</td>
            <td valign="top">
            
                 {{ucwords(strtolower($siswa->nim))}} /
                 {{ucwords(strtolower($siswa->universitas))}} /
                 {{ucwords(strtolower($siswa->jurusan))}} /
                 {{ucwords(strtolower($siswa->pendidikan))}}  
            </td>
        </tr>
        <tr>
            <td valign="top">c.</td>
            <td valign="top">Untuk</td>
            <td valign="top">:</td>
            <td valign="top">Melakukan Penelitian, dengan judul <b>"{{$siswa->judul_teliti}}"</b></td>
        </tr>
        <tr>
            <td valign="top"></td>
            <td valign="top"></td>
            <td valign="top"></td>
            <td valign="top">
                Lokasi Penelitian : <br/>
                    <?php
                    $i = 1;
                    $cats = explode(";", $siswa->lokasi);
                        foreach($cats as $cat) {
                         echo $i. '. '. $cat ."<br/>";
                        $i++;
                        }
                
                    ?>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
               Waktu/Lama Penelitian : <br/> 
               Selama 1 (satu) tahun terhitung mulai tanggal rekomendasi ini dibuat; <br/>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              Sebelum Melakukan Penelitian, agar melapor kepada Pemerintah Setempat
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              Melaporkan hasil Penelitian yang telah dilakukan sebagai masukan bagi Pemerintah Setempat.
            </td>
        </tr>
        
    </table>
    
    @endforeach   
    Demikian Rekomendasi ini dibuat Untuk dipergunakan Sebagaimana Mestinya. <br/><br/><br/>
    <div class="ttdbarcode">
       <br/><br/><br/><br/><br/>
       @if($pmr->status == 'prosesKabid')
         <img src="{{url('assets/images/kabid.png')}}" width=50px>
       @elseif($pmr->status == 'Selesai' OR $pmr->status == 'SelesaiPenyerahan')
           <img src="{{url('assets/images/kabid.png')}}" width=50px>
       @else
           <span class="text-bold" style="color:red">Belum Di verifikasi Oleh Kabid</span>
       @endif 
    </div>
    <div class="ttdmanual">
     @php($tgl = date("d M Y", strtotime($pmr->update_at)))
   
    Tanjungpinang, {{$tgl}}
       
    <br/>
    @foreach($permohonankadis as $prms)

     @endforeach
    a.n. GUBERNUR KEPULAUAN RIAU <BR/>
    KEPALA DINAS PENANAMAN MODAL DAN PELAYANAN TERPADU SATU PINTU <BR/>
    PROVINSI KEPULAUAN RIAU <br/><br/>
    @if($pmr->status == 'Selesai' OR $pmr->status == 'SelesaiPenyerahan' )
         <img src="{{url('assets/images/kadis.png')}}" width=80px>
         <div style=""></div>
    @else
        <span class="text-bold" style="color:red">Belum TTD</span>
        <div style=""></div>
    @endif
    <b style="border-bottom:1px solid #333;">Dr. Drs. Syamsuardi, MM</b><br/>
    Pembina Utama Madya / IVd <br/>
    NIP. 19630105 199003 1 011
    </div>
    <div style="clear:both"></div>
    @endforeach
    <br/> <br/>
    <div style="font-size:11px">
    Tembusan :
    <br/>
    &nbsp;&nbsp; 1. Gubernur Kepulauan Riau (Sebagai laporan)
    <br/>
    &nbsp;&nbsp; 2. Kepala Badan Kesatuan Bangsa Dan Politik Provinsi kepulaun Riau
    
    </div>
    </body>
</html>
<html>
    <title><?php echo e($p->izin->nama_izin); ?></title>
    <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>
    <style type="text/css">
        @page{
            size:21cm 27cm;
        }
        .page_break { page-break-before: always; }
            
        html{
            background-color: black;
            margin: 10px;
            padding: 0;
            font-size:12px;
            font-family: "Arial, Helvetica, sans-serif";
        }
        .header{
            width:21cm;
            clear:both;
                
        } 
        .judul {
            font-size:13px;
            font-weight:bold;           
                
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
    <body>
     <?php ($nomorsk = substr($p->permohonan_code, -4)); ?>
        <div class="header">
            <img src="<?php echo e(url('public/images/cop_surat.png')); ?>">
        </div>
        <center>
       <table align='center'>
           <tr class='judul'>
               <td class='judul'>SURAT KETERANGAN PENELITIAN</td>
               <td class='judul'>
                   <img src="data:image/png;base64, <?php echo e(base64_encode(QrCode::format('png')->size(100)->generate($p->permohonan_code.'/2n.1/DPMPTSP/2021'))); ?>" width=40px>                   
               </td>
           </tr>
       </table>
       </span>
    </center>
    <center><span class=''>Nomor : <?php echo e($nomorsk); ?>/2n.1/DPMPTSP/2019</span></center>
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
                    <?php echo e($p->penelitian->menimbang); ?>

            </td>
        </tr>
        <tr>
            <td colspan="4">KEPALA DINAS PENANAMAN MODAL DAN PELAYANAN TERPADU SATU PINTU PROVINSI KEPULAUAN RIAU, memberikan rekomendasi kepada :</td>
        </tr>
    </table>
     <table class="tablePD5">
        <tr>
            <td valign="top">a.</td>
            <td valign="top">Nama / Obyek</td>
            <td valign="top">:</td>
            <td valign="top">
               <?php echo e(ucwords(strtolower($p->penelitian->person->nama))); ?>

            </td>
        </tr>
        <tr>
            <td valign="top">b.</td>
            <td valign="top">Nim/ Perguruan Tinggi/Jurusan/jenjang</td>
            <td valign="top">:</td>
            <td valign="top">
            
                 <?php echo e(ucwords(strtolower($p->penelitian->person->Identitas_nomor))); ?> /
                 <?php echo e(ucwords(strtolower($p->penelitian->universitas))); ?> /
                 <?php echo e(ucwords(strtolower($p->penelitian->person->jurusan))); ?> /
                 <?php echo e(ucwords(strtolower($p->penelitian->person->jenjang))); ?>  
            </td>
        </tr>
        <tr>
            <td valign="top">c.</td>
            <td valign="top">Untuk</td>
            <td valign="top">:</td>
            <td valign="top">Melakukan Penelitian, dengan judul <b>"<?php echo e($p->penelitian->judul); ?>"</b></td>
        </tr>
        <tr>
            <td valign="top"></td>
            <td valign="top"></td>
            <td valign="top"></td>
            <td valign="top">
                Lokasi Penelitian : <br/>
                    <?php
                    $i = 1;
                    $cats = explode(";", $p->penelitian->lokasi);
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
    Demikian Rekomendasi ini dibuat Untuk dipergunakan Sebagaimana Mestinya. <br/><br/><br/>


     <div class="ttdbarcode">
       <br/><br/><br/><br/><br/>
       <?php if($p->status == 'selesai'): ?>
         <img src="<?php echo e(url('public/images/kabid.png')); ?>" width=50px>
       <?php elseif($p->status == 'selesai' OR $p->status == 'SelesaiPenyerahan'): ?>
           <img src="<?php echo e(url('public/images/kabid.png')); ?>" width=50px>
       <?php else: ?>
           <span class="text-bold" style="color:red">Belum Di verifikasi Oleh Kabid</span>
       <?php endif; ?> 
    </div>
    <div class="ttdmanual">
        <?php ($tgl = date("d M Y", strtotime($p->updated_at))); ?>
    
        Tanjungpinang, <?php echo e($tgl); ?>

        
        <br/>
        a.n. GUBERNUR KEPULAUAN RIAU <BR/>
        KEPALA DINAS PENANAMAN MODAL DAN PELAYANAN TERPADU SATU PINTU <BR/>
        PROVINSI KEPULAUAN RIAU <br/><br/>
        <?php if($p->status == 'selesai' OR $p->status == 'SelesaiPenyerahan' ): ?>
            <img src="<?php echo e(url('public/images/kadis.png')); ?>" width=80px>
            <div style=""></div>
        <?php else: ?>
            <span class="text-bold" style="color:red">Belum TTD</span>
            <div style=""></div>
        <?php endif; ?>
        <b style="border-bottom:1px solid #333;">Dr. Drs. Syamsuardi, MM</b><br/>
        Pembina Utama Madya / IVd <br/>
        NIP. 19630105 199003 1 011
        </div>
        <div style="clear:both"></div>
      <div style="font-size:11px">
    Tembusan :
    <br/>
    &nbsp;&nbsp; 1. Gubernur Kepulauan Riau (Sebagai laporan)
    <br/>
    &nbsp;&nbsp; 2. Kepala Badan Kesatuan Bangsa Dan Politik Provinsi kepulaun Riau
    
    </div>
        </div>
    </body>
</html><?php /**PATH /var/www/html/siJempol/resources/views/pdf/penelitian.blade.php ENDPATH**/ ?>
<html>
    <title>Serah Terima Berkas Permohonan</title>
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
        .text-bold{
            font-weight: bold;
        }
        .text-right{
            text-align: right;
        }
        .text-center{
            text-align:center;
        }
        .kiriBawah{
            font-style:italic;
            top:-100px;
        }
        .content{
            padding:10px;
            display:inline;
        }
        #tableBO{
            border-collapse: collapse;
            border: 1px solid #eee;
            width: 100%;
        }
         #tableBO th{
            padding : 5px;
            border: 1px solid #333;
            text-align: center;
        }
        #tableBO td{
            padding : 5px;
            border: 1px solid #333;
        }
        .Valign{
            vertical-align: top !important;
        }
    </style>
    <body>
        <div class="header">
            <img src="<?php echo e(url('public/images/cop_surat.png')); ?>">
        </div>
        <div style="padding:20px">
            <center class="judul">ROUTING SLIP DOKUMEN PERIZINAN/NON PERIZINAN <br/> DPMPTSP PROVINSI KEPULAUAN RIAU</center>
            <br/><br/>
            <div style="width:60%; float:left">
            <table>
                <tr>
                    <td class="Valign">Tanggal Daftar</td>
                    <td class="Valign">&nbsp;&nbsp; : &nbsp;&nbsp;</td>
                    <td class="Valign"><?php echo e($p->created_at); ?></td>
                </tr>
                <tr>
                    <td class="Valign">Izin</td>
                    <td class="Valign">&nbsp;&nbsp; : &nbsp;&nbsp;</td>
                    <td class="Valign">
                        <?php echo e($p->izin->nama_izin); ?><br/>
                        <?php echo e($p->izin->kategori); ?><br/>
                        <?php echo e($p->opd->opd); ?><br/>
                    </td>
                </tr>
                <tr>
                    <td>Nama Perusahaan</td>
                    <td>&nbsp; : &nbsp;</td>
                    <td><?php echo e($p->perusahaan->fullname); ?></td>
                </tr>
                <tr>
                   <td>Nama Pemohon</td>
                   <td>&nbsp; : &nbsp;</td>
                   <td><?php echo e($p->pemohon->nama); ?></td>
               </tr>
               <tr>
                    <td>Email / Hp</td>
                    <td>&nbsp; : &nbsp;</td>
                    <td><?php echo e($p->pemohon->email); ?> / <?php echo e($p->pemohon->contact); ?></td>
                </tr>
            </table>
            </div>
            <div style="width:40%; float:right">
                <div class="text-right">
          
                    <br/>
                    <table class="text-right">
                        <tr>
                            <td>Nomor Bukti Penerimaan</td>
                            <td>&nbsp; : &nbsp;</td>
                            <td><?php echo e($p->permohonan_code); ?></td>
                        </tr>
                        <tr>
                           <td>Front Office</td>
                           <td>&nbsp; : &nbsp;</td>
                           <td></td>
                       </tr>
                    </table>
                    <img src="data:image/png;base64, <?php echo e(base64_encode(QrCode::format('png')->size(100)->generate($p->permohonan_code))); ?>" width=80px>
                </div>
            </div>
            <div style="clear:both"></div>
        </div>
        <div style="padding:20px">
            <br/>
         <table id="tableBO">
             <thead>
                 <tr>
                     <th width="10">NO</th>
                     <th width="300px">URAIAN</th>
                     <th>PARAF</th>
                 </tr>
             </thead>
             <tbody>
                 <?php $__currentLoopData = $p->persyaratan; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $i): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                 <tr>
                     <td><?php echo e($index+1); ?></td>
                     <td><?php echo e($i->persyaratan); ?></td>
                     <td></td>
                 </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
             </tbody>
         </table>
        </div>
    </body>
</html><?php /**PATH /var/www/html/siJempol/resources/views/pdf/routingSlip.blade.php ENDPATH**/ ?>
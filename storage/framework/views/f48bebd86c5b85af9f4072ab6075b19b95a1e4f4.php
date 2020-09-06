<html>
    <title><?php echo e($p->nama_izin); ?></title>
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
        .persyaratan{
            border-collapse: collapse;
            border: 1px solid #333;
            width: 100%;
        }

        .persyaratan th{
            border: 1px solid #333;
            padding: 5px;
        }
        .persyaratan td{
            border: 1px solid #333;
            padding: 5px;
        }
    </style>
    <body>
        <div class="header">
            <img src="<?php echo e(url('public/images/cop_surat.png')); ?>">
        </div>
        <div style="padding:20px">
            <center class="judul">PERSYARATAN PERIZINAN/NON PERIZINAN <br/> DPMPTSP PROVINSI KEPULAUAN RIAU</center>
            <br/><br/>
            <div style="width:60%; float:left">
            <table>
                    <td class="Valign">Izin</td>
                    <td class="Valign">&nbsp;&nbsp; : &nbsp;&nbsp;</td>
                    <td class="Valign">
                        <?php echo e($p->nama_izin); ?><br/>
                        <?php echo e($p->kategori); ?><br/>
                        <?php echo e($p->opd->opd); ?><br/>
                    </td>
                </tr>
            </table>
            </div>
            <div style="clear:both"></div>
            <br/><br/>
           <table class="persyaratan">
               <thead>
                <tr>
                    <th>No</th>
                    <th>Persyaratan</th>
                </tr>
               </thead>
               <tbody>
                   <?php $__currentLoopData = $p->persyaratan; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $p => $i): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <tr>
                        <td class="text-bold"><center><?php echo e($p+1); ?></center></td>
                        <td><?php echo e($i->persyaratan); ?></td>
                    </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>   
                <tbody>
        </table>
        <br/><br/>
        <?php (date_default_timezone_set("Asia/Bangkok")); ?>
        <?php ($data = date("d/m/Y H:i:s")); ?>
        di print pada tanggal : <?php echo e($data); ?>

        </div>
    </body>
</html><?php /**PATH C:\laragon\www\Lpanel\resources\views/pdf/persyaratan.blade.php ENDPATH**/ ?>
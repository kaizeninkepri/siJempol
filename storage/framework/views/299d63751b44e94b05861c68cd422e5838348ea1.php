<html>
<title>BUKTI PENDAFTARAN</title>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="shortcut icon" href="<?php echo e(url('public/images/logo.png')); ?>" type="image/x-icon" />
    <link rel="apple-touch-icon" href="<?php echo e(url('public/images/logo.png')); ?>">
</head>
<style type="text/css">
    @page  {
        size: A4;
        margin: 0;
    }

    .page_break {
        page-break-before: always;
    }

    html {
        margin: 10px;

        padding: 0;
        font-size: 12px;
        font-family: "Arial, Helvetica, sans-serif";
    }

    body {
        background-image: url("<?php echo e(url('public/images/bg-pendaftaran.png')); ?>");
        background-size: cover;
        /* <------ */
        background-repeat: no-repeat;
        background-position: center top;
    }

    .header {
        width: 21cm;
        clear: both;

    }

    .judul {
        font-size: 13px;
        font-weight: bold;

    }

    .text-bold {
        font-weight: bold;
    }

    .text-right {
        text-align: right;
    }

    .text-center {
        text-align: center;
    }

    .kiriBawah {
        font-style: italic;
        top: -100px;
    }

    .content {
        padding: 10px;
        display: inline;
    }

    #tableBO {
        border-collapse: collapse;
        border: 1px solid #eee;
        width: 100%;
    }

    #tableBO th {
        padding: 5px;
        border: 1px solid #333;
        text-align: center;
    }

    #tableBO td {
        padding: 5px;
        border: 1px solid #333;
    }

    .Valign {
        vertical-align: top !important;
    }

    .persyaratan {
        border-collapse: collapse;
        border: 1px solid #333;
        width: 100%;
    }

    .persyaratan th {
        border: 1px solid #333;
        padding: 5px;
    }

    .persyaratan td {
        border: 1px solid #333;
        padding: 5px;
    }

    .content {
        padding: 70px !important;
        top: 120px;
        position: absolute;
    }

</style>

<body>
    <div class="content">
        Berdasarkan Peraturan Kementerian Dalam Negeri Nomor 138 Tahun 2017 Tentang Penyelenggaraan Pelayanan Terpadu
        Satu intu Daerah,
        Peraturan Pemerintah Nomor 82 Tahun 2012 tentang Penyelenggaraan Sistem dan Transaksi Elektronik menerbitkan :
        <br /><br />
        <table>
            <tr>
                <td>Nomor Pokok Wajib Pajak</td>
                <td>&nbsp; &nbsp; : &nbsp;&nbsp;</td>
                <td><?php echo e($perusahaan->npwp); ?></td>
            </tr>
            <tr>
                <td>Nama Perusahaan</td>
                <td>&nbsp; &nbsp; : &nbsp;&nbsp;</td>
                <td><?php echo e($perusahaan->fullname); ?></td>
            </tr>
            <tr>
                <td>Alamat</td>
                <td>&nbsp; &nbsp; : &nbsp;&nbsp;</td>
                <td><?php echo e($perusahaan->alamat); ?></td>
            </tr>
            <tr>
                <td>Email</td>
                <td>&nbsp; &nbsp; : &nbsp;&nbsp;</td>
                <td><?php echo e($perusahaan->email); ?></td>
            </tr>
            <tr>
                <td>Nama Direktur</td>
                <td>&nbsp; &nbsp; : &nbsp;&nbsp;</td>
                <td>NPWP</td>
            </tr>
            <tr>
                <td>Nomor Induk Kependudukan</td>
                <td>&nbsp; &nbsp; : &nbsp;&nbsp;</td>
                <td>NPWP</td>
            </tr>
        </table>
        <br />
        <p>Surat ini merupakan tanda bukti pendaftaran akun Perusahaan melalui aplikasi yang sekaligus merupakan
            mendapatkan
            hak akses pengajuan perizinan.</p>
        <p>DPMPTSP Berwenang untuk melakukan evaluasi dan/atau perubahan / penonaktifkan sesuai ketentuan
            perundang-undagan.</p>

        <p>Seluruh data yang tercantum dalam aplikasi DPMPTSP dapat berubah sesuai dengan perkembangan kegiatan
            berusaha.</p>


    </div>
</body>

</html>
<?php /**PATH C:\laragon\www\siJempol\resources\views/pdf/pendaftaran.blade.php ENDPATH**/ ?>
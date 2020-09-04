<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


    <!-- Twitter -->
    <meta name="twitter:site" content="">
    <meta name="twitter:creator" content="<?php echo e($identitas->meta_author); ?>">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo e($identitas->meta_title); ?>">
    <meta name="twitter:description" content="<?php echo e($identitas->meta_description); ?>">

    <!-- Facebook -->
    <meta property="og:title" content="<?php echo e($identitas->meta_title); ?>">
    <meta property="og:description" content="<?php echo e($identitas->meta_description); ?>">
    <link rel="shortcut icon" href="<?php echo e(url('public/images/logo.png')); ?>" type="image/x-icon" />
    <link rel="apple-touch-icon" href="<?php echo e(url('public/images/logo.png')); ?>">


    <title><?php echo e($identitas->meta_title); ?></title>

    <!-- vendor css -->
    <link href="<?php echo e(url('public/admin/lib/font-awesome/css/font-awesome.css')); ?>" rel="stylesheet">
    <link href="<?php echo e(url('public/admin/lib/Ionicons/css/ionicons.css')); ?>" rel="stylesheet">
    <link href="<?php echo e(url('public/admin/lib/perfect-scrollbar/css/perfect-scrollbar.css')); ?>" rel="stylesheet">
    <link href="<?php echo e(url('public/admin/lib/jquery-switchbutton/jquery.switchButton.css')); ?>" rel="stylesheet">
    <link href="<?php echo e(url('public/admin/lib/rickshaw/rickshaw.min.css')); ?>/" rel="stylesheet">
    <link href="<?php echo e(url('public/admin/lib/chartist/chartist.css')); ?>" rel="stylesheet">

    <!-- Bracket CSS -->
    <link rel="stylesheet" href="<?php echo e(url('public/admin/css/bracket.css')); ?>">
</head>

<body>
    <div id="app">

        <div class="d-flex align-items-center justify-content-center bg-br-primary ht-100v">
            <div class="login-wrapper wd-300 wd-xs-350 pd-25 pd-xs-40 bg-white rounded shadow-base">
                <div class="signin-logo tx-center tx-28 tx-bold tx-inverse">
                    <span class="tx-normal">[</span> <?php echo e($identitas->login_title); ?>

                    <span class="tx-normal">]</span>
                </div>
                <div class="tx-center mg-b-60"><?php echo e($identitas->login_subtitle); ?></div>
                <form method="POST" action="<?php echo e(route('login')); ?>">
                    <?php echo csrf_field(); ?>

                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Enter your username" name="email" />
                    </div>
                    <!-- form-group -->
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Enter your password" name="password" />
                        <!-- <a href class="tx-info tx-12 d-block mg-t-10">Forgot password?</a> -->
                    </div>
                    <!-- form-group -->
                    <button type="submit" class="btn btn-info btn-block">Login</button>
                    <a href="http://192.168.123.37/ptsp_pemohon/pendaftaran" class="btn btn-info btn-block">Daftar</a>
                </form>
            </div>
            <!-- login-wrapper -->
        </div>
    </div>
    <script src="<?php echo e(url('public/js/app.js')); ?>"></script>
</body>

</html>
<?php /**PATH C:\laragon\www\Lpanel\resources\views/panel/login.blade.php ENDPATH**/ ?>
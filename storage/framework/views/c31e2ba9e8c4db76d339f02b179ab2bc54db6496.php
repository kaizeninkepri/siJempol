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
        <login-form></login-form>

    </div>
    <script src="<?php echo e(url('public/js/app.js')); ?>"></script>
</body>

</html>
<?php /**PATH /var/www/html/siJempol/resources/views/panel/login.blade.php ENDPATH**/ ?>
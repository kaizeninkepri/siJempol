<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title><?php echo e($identitas->meta_title); ?></title>

    <link rel="shortcut icon" href="<?php echo e(url('public/images/logo.png')); ?>" type="image/x-icon" />
    <link rel="apple-touch-icon" href="<?php echo e(url('public/images/logo.png')); ?>">
    <!-- vendor css -->
    <link href="<?php echo e(url('public/admin/lib/font-awesome/css/font-awesome.css')); ?>" rel="stylesheet">
    <link href="<?php echo e(url('public/admin/lib/Ionicons/css/ionicons.css')); ?>" rel="stylesheet">
    <link href="<?php echo e(url('public/admin/lib/perfect-scrollbar/css/perfect-scrollbar.css')); ?>" rel="stylesheet">
    <link href="<?php echo e(url('public/admin/lib/jquery-switchbutton/jquery.switchButton.css')); ?>" rel="stylesheet">
    <link href="<?php echo e(url('public/admin/lib/rickshaw/rickshaw.min.css')); ?>/" rel="stylesheet">
    <link href="<?php echo e(url('public/admin/lib/chartist/chartist.css')); ?>" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" />

    <!-- Bracket CSS -->
    <link rel="stylesheet" href="<?php echo e(url('public/admin/css/bracket.css')); ?>">
    <script type="module" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule="" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js"></script>

</head>

<body>
    <div id="app">
        <!-- ########## START: LEFT PANEL ########## -->
        <div class="br-logo"><a href="<?php echo e(url('/dashboard')); ?>"><span>[</span><?php echo e($identitas->login_title); ?><span>]</span></a>
        </div>
        <div class="br-sideleft overflow-y-auto">
            <!-- <div class="align-items-center justify-content-between mg-t-20 mg-b-50">
                <center>
                    <img src="<?php echo e(url('public/images/user.png')); ?>" class="wd-100 rounded-circle" alt="">
                    <div class="pd-t-10 tx-15 tx-bold tx-white"><?php echo e(Auth::user()->email); ?></div>
                </center>
            </div> -->

            <label class="sidebar-label pd-x-15 mg-t-20">Navigation
                <pre></pre></label>
            <div class="br-sideleft-menu">
                <!-- <a href="<?php echo e(url('/dashboard')); ?>" class="br-menu-link">
                    <div class="br-menu-item">
                        <i class="menu-item-icon icon ion-ios-home-outline tx-22"></i>
                        <span class="menu-item-label">Dashboard</span>
                    </div>
                </a>
                <a href="#" class="br-menu-link">
                    <div class="br-menu-item">
                        <i class="menu-item-icon icon ion-ios-filing-outline tx-24"></i>
                        <span class="menu-item-label">Management</span>
                        <i class="menu-item-arrow fa fa-angle-down"></i>
                    </div>
                </a>
                <ul class="br-menu-sub nav flex-column">
                    <li class="nav-item"><a href="<?php echo e(url('roles/modul')); ?>" class="nav-link">Modul</a></li>
                    <li class="nav-item"><a href="<?php echo e(url('roles/permission')); ?>" class="nav-link">Role Permission</a></li>
                </ul> -->
                <?php $__currentLoopData = $menu; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $m): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <?php if(count($m['child']) == 0): ?>
                <?php if($m['parent']['crud']['create'] == true): ?>

                <a href="<?php echo e(url($m['parent']['url'])); ?>" class="br-menu-link">
                    <div class="br-menu-item">
                        <i class="menu-item-icon <?php echo e($m['parent']['icon']); ?> tx-22"></i>
                        <span class="menu-item-label"><?php echo e($m['parent']['nama']); ?></span>
                    </div><!-- menu-item -->
                </a>
                <?php endif; ?>
                <?php else: ?>
                <?php if($m['parent']['crud']['create'] == true): ?>
                <a href="#" class="br-menu-link">
                    <div class="br-menu-item">
                        <i class="menu-item-icon icon <?php echo e($m['parent']['icon']); ?> tx-24"></i>
                        <span class="menu-item-label"><?php echo e($m['parent']['nama']); ?></span>
                        <i class="menu-item-arrow fa fa-angle-down"></i>
                    </div><!-- menu-item -->
                </a><!-- br-menu-link -->
                <ul class="br-menu-sub nav flex-column">
                    <?php $__currentLoopData = $m['child']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $c): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <?php if($c['crud']['create'] == true): ?>
                    <li class="nav-item"><a href="<?php echo e(url($c['url'])); ?>" class="nav-link"><?php echo e($c['nama']); ?></a>
                        <?php endif; ?>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </ul>
                <?php endif; ?>
                <?php endif; ?>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <a href="<?php echo e(url('logout')); ?>" class="br-menu-link">
                    <div class="br-menu-item" style="position: fixed; bottom: 0;">
                        <i class="menu-item-icon icon icon ion-power tx-22 text-danger"></i>
                        <span class="menu-item-label">Keluar</span>
                    </div>
                </a>
            </div>
        </div>
        <div class="br-header">
            <div class="navicon-left hidden-lg-up"><a id="btnLeftMenuMobile" href=""><i
                        class="icon ion-navicon-round"></i></a></div>

            <div class="d-flex align-items-center justify-content-between hidden-lg-up">

                <h4 class="mg-b-0 tx-uppercase tx-bold tx-spacing--2 tx-inverse tx-poppins mg-r-20">
                    <?php echo e($identitas->login_title); ?></h4>

            </div>
            <div class="br-header-left hidden-sm-down">
                <div class="input-group hidden-xs-down wd-270 transition">
                    <!-- <span class="input-group-btn">
                        <button class="btn btn-secondary" type="button"><i class="fa fa-search"></i></button>
                    </span>
                    <input id="searchbox" type="text" class="form-control" placeholder="Pencarian ..">. -->
                    <span class="tx-bold mg-l-20"> Informasi Layanan : (+62)811-7779-727 </span>
                </div>
            </div><!-- br-header-left -->
            <div class="br-header-right">
                <nav class="nav">
                    <div class="dropdown">
                        <a href="" class="nav-link nav-link-profile" data-toggle="dropdown">
                            <span class="logged-name hidden-md-down"><?php echo e(Auth::user()->email); ?></span>
                            <i class="icon ion-ios-person tx-20"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-header wd-200">
                            <ul class="list-unstyled user-profile-nav">
                                <li><a href="<?php echo e(url('identitas')); ?>"><i class="icon ion-ios-person"></i>Identitas</a></li>
                                <li><a href="<?php echo e(url('logout')); ?>"><i class="icon ion-power"></i>Keluar</a></li>
                            </ul>
                        </div><!-- dropdown-menu -->
                    </div><!-- dropdown -->
                </nav>
            </div><!-- br-header-right -->
        </div><!-- br-header -->

        <div class="br-mainpanel">
            <router-view></router-view>
            <vue-progress-bar></vue-progress-bar>

        </div><!-- br-mainpanel -->
        <!-- ########## END: MAIN PANEL ########## -->



    </div>

    <script src="<?php echo e(url('public/admin/lib/jquery/jquery.js')); ?>"></script>
    <script src="<?php echo e(url('public/admin/lib/popper.js/popper.js')); ?>"></script>
    <script src="<?php echo e(url('public/admin/lib/bootstrap/bootstrap.js')); ?>"></script>
    <script src="<?php echo e(url('public/admin/js/bracket.js')); ?>"></script>
    <script src="<?php echo e(url('public/admin/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.js')); ?>"></script>
    <script src="<?php echo e(url('public/admin/lib/moment/moment.js')); ?>"></script>
    <script src="<?php echo e(url('public/js/app.js')); ?>">
    </script>
</body>

</html>
<?php /**PATH C:\laragon\www\siJempol\resources\views/panel/index.blade.php ENDPATH**/ ?>
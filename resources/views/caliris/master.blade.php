<!DOCTYPE HTML>
<html lang="en-US">

<head>
    <title>Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu Provinsi Kepulauan Riau</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="Template by CocoBasic" />
    <meta name="keywords" content="HTML, CSS, JavaScript, PHP" />
    <meta name="author" content="CocoBasic" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <link rel="shortcut icon" href="{{url('public/caliris/images/favicon.ico')}}" />
    <link
        href='https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700%7COpen%20Sans:300,400,700%7CMontserrat:700'
        rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="{{url('public/caliris/style.css')}}" />
    <link rel="stylesheet" type="text/css" href="{{url('public/caliris/css/clear.css')}}" />
    <link rel="stylesheet" type="text/css" href="{{url('public/caliris/css/sm-clean.css')}}" />
    <link rel="stylesheet" type="text/css" href="{{url('public/caliris/css/slick.css')}}" />
    <link rel="stylesheet" type="text/css" href="{{url('public/caliris/css/common.css')}}" />


    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

</head>

<body class=" page-template-onepage">

    <div class="site-wrapper">

        <div class="doc-loader">
            <img src="{{url('public/caliris/images/preloader.gif')}}" alt="Caliris">
        </div>


        <header class="header-holder">
            <div class="menu-wrapper center-relative relative">
                <div class="header-logo">
                    <a href="index.html">
                        <img src="{{url('public/caliris/images/logo.png')}}" alt="Caliris">
                    </a>
                </div>

                <div class="toggle-holder">
                    <div id="toggle" class="">
                        <div class="first-menu-line"></div>
                        <div class="second-menu-line"></div>
                        <div class="third-menu-line"></div>
                    </div>
                </div>

                <div class="menu-holder">
                    <nav id="header-main-menu">
                        <ul class="main-menu sm sm-clean">
                            <li>
                                <a href="#about">Layanan Izin</a>
                            </li>
                            <li>
                                <a href="#services">Layanan Informasi</a>
                            </li>
                            <li>
                                <a href="#news">FAQ</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="clear"></div>
            </div>
        </header>



        <div id="content" class="site-content center-relative">

            <!-- Home Section -->
            <div id="home" class="section full-width full-screen">
                <div class="section-wrapper block content-1170 center-relative">
                    <div class="content-wrapper">
                        <h4 class="">
                            Aplikasi Online<br>
                            Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu <br>
                            Si Jempol
                        </h4>
                        <div class="text-left">
                            <a href="#footer" class="button scroll top-30">Mulai</a>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Services Section -->
            <div id="services" class="section page-split">
                <div class="section-wrapper block content-1170 center-relative">

                    <div class="bg-holder float-left">
                        <img src="{{url('public/caliris/images/left_obj_01.png')}}" alt="">
                    </div>

                    <div class="section-title-holder float-left" data-background="#a13dd7">
                        <div class="section-num">
                            <span class="current-section-num">
                                15
                            </span>
                            <span class="total-section-num">
                                Sektor
                            </span>
                        </div>
                        <h2 class="entry-title">
                            Layanan
                        </h2>
                        <p class="page-desc">
                            layanan Perizinan & Non Perizinan
                        </p>
                    </div>
                    <div class="section-content-holder float-right">
                        <div class="content-wrapper">
                            <div class="row">
                                @foreach($opd->slice(0,9) as $i => $opd)
                                <div class="col-md-4 mb-5 animate">
                                    <div class=" service-item">
                                        <img class="service-icon" src="{{url('public/caliris/images/icon_07.png')}}"
                                            alt="">
                                        <p class="service-title">{{$opd->opd}}</p>
                                    </div>
                                </div>
                                @endforeach
                            </div>

                            <center><a href="#" class="button">Sektor Lainnya</a></center>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>


        </div>



    </div>

    <!--Load JavaScript-->
    <script src="{{url('public/caliris/js/jquery.js')}}"></script>
    <script src="{{url('public/caliris/js/jquery.sticky.js')}}"></script>
    <script src="{{url('public/caliris/js/imagesloaded.pkgd.js')}}"></script>
    <script src="{{url('public/caliris/js/jquery.fitvids.js')}}"></script>
    <script src="{{url('public/caliris/js/jquery.smartmenus.min.js')}}"></script>
    <script src="{{url('public/caliris/js/isotope.pkgd.js')}}"></script>
    <script src="{{url('public/caliris/js/jquery.easing.1.3.js')}}"></script>
    <script src="{{url('public/caliris/js/jquery.prettyPhoto.js')}}"></script>
    <script src="{{url('public/caliris/js/owl.carousel.min.js')}}"></script>
    <script src="{{url('public/caliris/js/main.js')}}"></script>
</body>

</html>

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


    <!-- Twitter -->
    <meta name="twitter:site" content="">
    <meta name="twitter:creator" content="Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu Provinsi Kepulauan Riau">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu Provinsi Kepulauan Riau">
    <meta name="twitter:description" content="Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu Provinsi Kepulauan Riau">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Facebook -->
    <meta property="og:title" content="Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu Provinsi Kepulauan Riau">
    <meta property="og:description" content="Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu Provinsi Kepulauan Riau">
    <link rel="shortcut icon" href="{{url('public/images/logo.png')}}" type="image/x-icon" />
    <link rel="apple-touch-icon" href="{{url('public/images/logo.png')}}">


    <title>Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu Provinsi Kepulauan Riau</title>

    <!-- vendor css -->
    <link href="{{url('public/admin/lib/font-awesome/css/font-awesome.css')}}" rel="stylesheet">
    <link href="{{url('public/admin/lib/Ionicons/css/ionicons.css')}}" rel="stylesheet">
    <link href="{{url('public/admin/lib/perfect-scrollbar/css/perfect-scrollbar.css')}}" rel="stylesheet">
    <link href="{{url('public/admin/lib/jquery-switchbutton/jquery.switchButton.css')}}" rel="stylesheet">
    <link href="{{url('public/admin/lib/rickshaw/rickshaw.min.css')}}/" rel="stylesheet">
    <link href="{{url('public/admin/lib/chartist/chartist.css')}}" rel="stylesheet">

    <!-- Bracket CSS -->
    <link rel="stylesheet" href="{{url('public/admin/css/bracket.css')}}">
    <script type="text/javascript">      
        window.csrf_token = "{{ csrf_token() }}"
      </script>
    
</head>

<body>
    <div id="app">
        <login-form> {{ csrf_field() }}</login-form>
{{-- 
        <div class="d-flex align-items-center justify-content-center bg-br-primary ht-100v">
            <div class="login-wrapper wd-300 wd-xs-350 pd-25 pd-xs-40 bg-white rounded shadow-base">
                <div class="signin-logo tx-center tx-28 tx-bold tx-inverse">
                    <span class="tx-normal">[</span> {{$identitas->login_title}}
                    <span class="tx-normal">]</span>
                </div>
                <div class="tx-center mg-b-60">{{$identitas->login_subtitle}}</div>
                <form method="POST" action="{{ route('login') }}">
                    @csrf

                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Enter your Email" name="email" />
                    </div>
                    <!-- form-group -->
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Enter your password" name="password" />
                        <!-- <a href class="tx-info tx-12 d-block mg-t-10">Forgot password?</a> -->
                    </div>
                    <!-- form-group -->
                    <button type="submit" class="btn btn-info btn-block">Login</button>
                </form>
            </div>
            <!-- login-wrapper -->
        </div> --}}
    </div>
    <script src="{{url('public/js/app.js')}}"></script>
</body>

</html>

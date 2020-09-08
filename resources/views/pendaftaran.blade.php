<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


    <!-- Twitter -->
    <meta name="twitter:site" content="">
    <meta name="twitter:creator" content="{{$identitas->meta_author}}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{$identitas->meta_title}}">
    <meta name="twitter:description" content="{{$identitas->meta_description}}">

    <!-- Facebook -->
    <meta property="og:title" content="{{$identitas->meta_title}}">
    <meta property="og:description" content="{{$identitas->meta_description}}">
    <link rel="shortcut icon" href="{{url('public/images/logo.png')}}" type="image/x-icon" />
    <link rel="apple-touch-icon" href="{{url('public/images/logo.png')}}">


    <title>{{$identitas->meta_title}}</title>

    <!-- vendor css -->
    <link href="{{url('public/admin/lib/font-awesome/css/font-awesome.css')}}" rel="stylesheet">
    <link href="{{url('public/admin/lib/Ionicons/css/ionicons.css')}}" rel="stylesheet">
    <link href="{{url('public/admin/lib/perfect-scrollbar/css/perfect-scrollbar.css')}}" rel="stylesheet">
    <link href="{{url('public/admin/lib/jquery-switchbutton/jquery.switchButton.css')}}" rel="stylesheet">
    <link href="{{url('public/admin/lib/rickshaw/rickshaw.min.css')}}/" rel="stylesheet">
    <link href="{{url('public/admin/lib/chartist/chartist.css')}}" rel="stylesheet">

    <!-- Bracket CSS -->
    <link rel="stylesheet" href="{{url('public/admin/css/bracket.css')}}">
</head>

<body>
    <div id="app">
        <pemohon-pendaftaran></pemohon-pendaftaran>
    </div>
    <script src="{{url('public/js/app.js')}}"></script>
</body>

</html>

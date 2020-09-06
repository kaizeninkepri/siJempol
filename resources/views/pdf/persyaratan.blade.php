<html>
    <title>{{$p->nama_izin}}</title>
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
            <img src="{{url('public/images/cop_surat.png')}}">
        </div>
        <div style="padding:20px">
            <center class="judul">PERSYARATAN PERIZINAN/NON PERIZINAN <br/> DPMPTSP PROVINSI KEPULAUAN RIAU</center>
            <br/><br/>
            <div style="width:60%; float:left">
            <table>
                    <td class="Valign">Izin</td>
                    <td class="Valign">&nbsp;&nbsp; : &nbsp;&nbsp;</td>
                    <td class="Valign">
                        {{$p->nama_izin}}<br/>
                        {{$p->kategori}}<br/>
                        {{$p->opd->opd}}<br/>
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
                   @foreach($p->persyaratan as $p => $i)
                    <tr>
                        <td class="text-bold"><center>{{$p+1}}</center></td>
                        <td>{{$i->persyaratan}}</td>
                    </tr>
                    @endforeach   
                <tbody>
        </table>
        <br/><br/>
        @php(date_default_timezone_set("Asia/Bangkok"))
        @php($data = date("d/m/Y H:i:s"))
        di print pada tanggal : {{$data}}
        </div>
    </body>
</html>
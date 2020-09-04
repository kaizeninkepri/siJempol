<template>
    <div>        
            <el-table v-loading="table.isLoading"
                :data="table.data.filter(data => !table.search 
                  || data.permohonan_code.toLowerCase().includes(table.search.toLowerCase())
                  || data.perusahaan.fullname.toLowerCase().includes(table.search.toLowerCase())
                  || data.izin.nama_izin.toLowerCase().includes(table.search.toLowerCase())
                  || data.opd.opd.toLowerCase().includes(table.search.toLowerCase())
                )"
                style="width: 100%">
                <el-table-column type="index" width="50"></el-table-column>
                    <el-table-column prop="izin.nama_izin" label="Nama Izin" header-align="center"></el-table-column>
                <el-table-column label="Waktu Permohonan" align="center">
                    <el-table-column prop="created_at" label="Tanggal" align="center" width="100"></el-table-column>
                    <el-table-column prop="jam" label="jam" align="center" width="60"></el-table-column>
                </el-table-column>
                <el-table-column
                        align="right">
                        <template slot="header" slot-scope="scope">
                            <el-input
                            v-model="table.search"
                            size="mini"
                            placeholder="Type to search"/>
                        </template>
                    <template slot-scope="scope">
                        <el-button size="mini" type="success" @click="edit(scope.$index, scope.row)">Routing Slip</el-button>
                        <el-button size="mini" @click="edit(scope.$index, scope.row)">Detail</el-button>
                    </template>
                    </el-table-column>
            </el-table>
    </div>
</template>

<script>

import urlBase from '@/js/url';
import moment from 'moment';

export default {
  data () {
    return {
      today : moment().format('DD-MM-YYYY'),
      perusahaan : {},
      isLoading : false,
      table:{
        isLoading : false,
        data :[],
        search: null,
      }
    }
  },
  mounted() {
        console.log("perusahaan Data")
        this.$parent.$data.activeLink = 'perizinan';
        this.$parent.$data.activeName = 'Permohonan Data';
        this.GetData(this.npwp)
  },
  props:['npwp'],
  methods:{
       moment(arg) {
             moment.locale('id');
             return moment(arg);
        },
        GetData(npwp){
            this.isLoading = true
            this.perusahaan = {}
            axios
                .post(urlBase.urlWeb+'/perizinan/perusahaan',{
                    type : "dataBynpwp",
                    npwp : npwp
                })
                .then(r => (
                    console.log(r.data),
                    this.perusahaan = r.data[0],
                    this.table.data = r.data[0].permohonan,
                    this.isLoading = false
                ));
        },
        edit(index,row){
             axios
                .post(urlBase.urlWeb+'/master/aclGroup',{
                    type : "putsession",
                    aclGroup_id : row.aclGroup_id
                })
                .then(r => (
                    this.$parent.$data.aclGroup.nama = row.nama,
                    this.$parent.$data.aclGroup.is_active = row.is_active,
                    this.$parent.$data.aclGroup.aclGroup_id = row.aclGroup_id,
                    
                    this.$parent.$data.show.form = true,
                    this.$parent.$data.show.data = false,

                    this.GetModulGroup()
                ));
        },
        deleteTable(index,row) {
            this.$confirm('hapus Data ini ?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
            }).then(() => {
                axios
                .post(urlBase.urlWeb+'/master/aclGroup',{
                    type : "hapus",
                    aclId : row.aclGroup_id
                })
                .then(r => (
                    this.GetModulGroup()
                ));
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Delete canceled'
                });          
            });
      }
    }
}
</script>

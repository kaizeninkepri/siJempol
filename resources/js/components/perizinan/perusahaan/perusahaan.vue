<template>
    <div>
       <div class="row">
        <div class="col-md-12" v-show="show.data">        
            <el-table v-loading="table.isLoading"
                :data="table.data.filter(data => !table.search 
                  || data.fullname.toLowerCase().includes(table.search.toLowerCase())
                  || data.npwp.toLowerCase().includes(table.search.toLowerCase())
                  || data.status.toLowerCase().includes(table.search.toLowerCase())
                )"
                style="width: 100%">
                <el-table-column type="index" width="50"></el-table-column>                    
                    <el-table-column prop="npwp" label="npwp" header-align="center"></el-table-column>
                    <el-table-column prop="fullname" label="Perusahaan" header-align="center"></el-table-column>
                    <el-table-column prop="alamat" label="Alamat" header-align="center"></el-table-column>
                    <el-table-column prop="contact" label="contact" header-align="center"></el-table-column>
                
                <el-table-column
                        align="right">
                        <template slot="header" slot-scope="scope">
                            <el-input
                            v-model="table.search"
                            size="mini"
                            placeholder="Type to search"/>
                        </template>
                    <template slot-scope="scope">
                        <el-button size="mini" @click="edit(scope.$index, scope.row)">Detail</el-button>
                    </template>
                    </el-table-column>
            </el-table>
        </div>
        <div class="col-md-12">
            <perusahaanDetail v-if="show.detail" v-bind:npwp="npwp" v-bind:rincian="true"></perusahaanDetail>
        </div>
        </div>
    </div>
</template>

<script>

import urlBase from '@/js/url';
import moment from 'moment';
import perusahaanDetail from '@/js/components/perizinan/perusahaan/detail';

export default {
  data () {
    return {
      today : moment().format('DD-MM-YYYY'),
      table:{
        isLoading : false,
        data :[],
        search: null,
      },
      show :{
          detail : false,
          data : true
      },
      npwp : null,
    }
  },
  created(){
      if(this.$route.query.detail) {
            this.show.detail = this.$route.query.detail;
            this.npwp = this.$route.query.npwp;
            this.show.data = false;
      }
  },
  mounted() {
        console.log("perusahaan Data")
        this.$parent.$data.activeLink = 'perizinan';
        this.$parent.$data.activeName = 'Permohonan Data';
        this.GetData()
  },
  methods:{
       moment(arg) {
             moment.locale('id');
             return moment(arg);
        },
        GetData(date){
            this.table.isLoading = true
            this.table.data = []
            axios
                .post(urlBase.urlWeb+'/perizinan/perusahaan',{
                    type : "dataAll"
                })
                .then(r => (
                    console.log(r.data),
                    this.table.data = r.data,
                    this.table.isLoading = false
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
       },
       edit(index, row){
           this.npwp = row.npwp
           this.show.detail = true
           this.show.data   = false
       }

  },
  components:{
      perusahaanDetail
  }
}
</script>

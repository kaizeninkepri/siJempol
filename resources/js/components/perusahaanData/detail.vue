<template>
  <div>
    <transition mode="out-in" name="fade">
      <div v-if="page.isLoading" key="info">
        <skeleton></skeleton>
      </div>
      <div v-else key="warning">
        <div class="br-msg-header d-flex justify-content-between">
          <div class="pd-x-0 pd-t-30">
            <h4 class="tx-gray-800 mg-b-5">DAFTAR PERUSAHAAN</h4>
            <p class="mg-b-0" v-if="user.role">{{user.role.role}}</p>
          </div>
        </div>
        <div class="br-pagebody">
          <el-card class="mg-b-20">
            <el-row :gutter="10">
              <el-col :md="8">
                <el-input
                  placeholder="Cari Nama Perusahaan "
                  prefix-icon="el-icon-search"
                  v-model="table.search"
                ></el-input>
              </el-col>
            </el-row>
          </el-card>
          <el-card>
            <el-table
              :data="tabledata"
              style="width: 100%"
            >
              <el-table-column type="index" label="No" width="50"></el-table-column>
              <el-table-column prop="npwp" label="Nomor Pokok Wajib Pajak"></el-table-column>
              <el-table-column prop="fullname" label="Nama Perusahaan"></el-table-column>
              <el-table-column prop="alamat" label="alamat"></el-table-column>
              <!-- <el-table-column prop="address" label="Aksi" width="180">
                <template slot-scope="scope">
                  <a :href="scope.row.linkPDF" target="_blank">
                    <i class="el-icon-printer"></i> Cetak Persyaratan
                  </a>
                </template>
              </el-table-column> -->
            </el-table>
            <el-row justify="end" type="flex">
              <el-col :md="10">
                <el-pagination
                  style="float: right"
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="table.page"
                  :page-size="table.size"
                  layout="total, prev, pager, next"
                  :total="table.data.length"
                ></el-pagination>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import urlBase from "@/js/url";
import skeleton from "@/js/components/dashboard/pemohon_skeleton";
export default {
  data() {
    return {
      page: {
        isLoading: true,
      },
      table: {
        search: null,
        data: [],
        size: 10,
        page: 1,
        list: 0,
        end: 10,
      },
    };
  },
  mounted() {
    this.page.isLoading = false;
  },
  created() {
    this.getIzin();
  },
  computed: {
    user() {
      return this.$store.state.StoreUser.user;
    },
    tabledata() {
      let result = this.table.data;
      if (!this.table.search) return result.slice(this.table.list, this.table.end)

      const filterValue = this.table.search.toLowerCase();

      const filter = (event) =>
        event.npwp.toLowerCase().includes(filterValue) || 
        event.fullname.toLowerCase().includes(filterValue);

      return result.filter(filter);

      
    },
  },
  methods: {
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      var start = Math.max(0, val - 1);
      var end = this.table.size;
      var newstart = Math.max(0, start * end);
      var newend = val * end;

      this.table.list = newstart;
      this.table.end = newend;

      console.log(`current page: ${val}`);
    },
    getIzin() {
      this.page.isLoading = true;
      this.axios
        .post(urlBase.web + "/perizinan/perusahaan", {
          type: "dataAll",
        })
        .then((r) => {
          this.table.data = r.data;
        });
    },
  },
  components: {
    skeleton,
  },
};
</script>
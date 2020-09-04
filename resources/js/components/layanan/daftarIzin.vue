<template>
  <div>
    <transition mode="out-in" name="fade">
      <div v-if="page.isLoading" key="info">
        <skeleton></skeleton>
      </div>
      <div v-else key="warning">
        <div class="br-msg-header d-flex justify-content-between">
          <div class="pd-x-0 pd-t-30">
            <h4 class="tx-gray-800 mg-b-5">DAFTAR LAYANAN PERIZINAN & NON PERIZINAN</h4>
            <p class="mg-b-0" v-if="user.role">{{user.role.role}}</p>
          </div>
        </div>
        <div class="br-pagebody">
          <el-card class="mg-b-20">
            <el-row :gutter="10">
              <el-col :md="8">
                <el-input
                  placeholder="Cari Nama Izin / Sektor "
                  prefix-icon="el-icon-search"
                  v-model="table.search"
                ></el-input>
              </el-col>
            </el-row>
          </el-card>
          <el-card>
            <el-table
              :data="table.data.filter(data => !table.search || data.name.toLowerCase().includes(table.search.toLowerCase()))"
              style="width: 100%"
            >
              <el-table-column type="index" label="No" width="50"></el-table-column>
              <el-table-column prop="name" label="Nama Izin"></el-table-column>
              <el-table-column prop="address" label="Jumlah Izin"></el-table-column>
              <el-table-column prop="address" label="Sektor"></el-table-column>
              <el-table-column prop="address" label="Aksi"></el-table-column>
            </el-table>
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
        data: [
          {
            date: "2016-05-03",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles",
          },
          {
            date: "2016-05-02",
            name: "ran",
            address: "No. 189, Grove St, Los Angeles",
          },
          {
            date: "2016-05-04",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles",
          },
          {
            date: "2016-05-01",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles",
          },
        ],
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
  },
  methods: {
    getIzin() {
      this.page.isLoading = true;
      this.axios
        .post(urlBase.web + "/master/opd", {
          type: "namaIzin",
        })
        .then((r) => {
          consoloe.log(r.data);
        });
    },
  },
  components: {
    skeleton,
  },
};
</script>
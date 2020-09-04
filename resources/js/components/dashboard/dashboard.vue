<template>
  <div class="mg-t-120">
    <div class="br-pagebody">
      <el-row class="pd-5" :gutter="10">
        <el-col :md="24" class="mg-b-20">
          <el-row :gutter="10">
            <el-col :md="6">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <ion-icon name="layers-outline" class="tx-50 tx-primary"></ion-icon>
                  <div class="mg-l-20">
                    <p
                      class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                    >Izin / Non izin</p>
                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">{{keabsahan}}</p>
                    <span class="tx-11 tx-roboto tx-primary">Validasi Keabsahan Berkas</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :md="6">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <ion-icon name="mail-outline" class="tx-50 tx-warning"></ion-icon>
                  <div class="mg-l-20">
                    <p
                      class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                    >Permintaan Surat</p>
                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">{{teknis}}</p>
                    <span class="tx-11 tx-roboto tx-warning">Untuk OPD Teknis</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :md="6">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <ion-icon name="mail-open-outline" class="tx-50 tx-teal"></ion-icon>
                  <div class="mg-l-20">
                    <p
                      class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                    >Balasan Suratp</p>
                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">{{balasanteknis}}</p>
                    <span class="tx-11 tx-roboto tx-teal">Dari OPD Teknis</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :md="6">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <ion-icon name="receipt-outline" class="tx-50 tx-success"></ion-icon>
                  <div class="mg-l-20">
                    <p class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10">DRAFT</p>
                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">0</p>
                    <span class="tx-11 tx-roboto tx-success">SURAT KEPUTUSAN</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row class="mg-t-10">
            <el-card>
              <div class="d-flex align-items-center justify-content-between mg-b-30">
                <div>
                  <h6
                    class="tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1"
                  >PERMOHONAN IZIN / NON IZIN</h6>
                  <p class="mg-b-0">Validasi / Permintaan Surat Telaah / Balasan Rekomendasi Teknis</p>
                </div>
                <div class="wd-230">
                  <el-input placeholder="Cari Data Permohonan ..." prefix-icon="el-icon-search"></el-input>
                </div>
              </div>
              <!-- d-flex -->

              <table class="table table-valign-middle mg-b-0 table-hover">
                <thead>
                  <tr>
                    <th>Nama Perusahaan</th>
                    <th>izin</th>
                    <th>waktu</th>
                    <th>kategori</th>
                    <th>Front Office</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(i,Index) in permohonan.data.slice(permohonan.list,permohonan.end)"
                    :key="Index"
                    v-if="i.status != 'tolak'"
                  >
                    <td class="pd-l-0-force">
                      <div class="tx-13 tx-bold mg-b-0">{{i.perusahaan.fullname}}</div>
                      <div
                        class="tx-12 tx-roboto mg-b-1 tx-primary"
                        v-if="i.perusahaan.kategori != 'perorangan'"
                      >{{i.pemohon.nama}}</div>
                    </td>
                    <td class="pd-l-0-force">
                      <div>
                        <p class="tx-13 tx-bold mg-b-0 tx-teal">{{i.izin.nama_izin}}</p>
                        <p class="tx-12 tx-roboto mg-b-0">{{i.opd.opd}} / {{i.izin.kategori}}</p>
                      </div>
                    </td>
                    <td class="pd-l-0-force">
                      <span class="tx-12 tx-roboto mg-b-0">{{i.lastjam}}</span>
                    </td>
                    <td class="pd-l-0-force" :class="i.BOstatus">
                      <center>{{i.statusDataInHuman}}</center>
                    </td>
                    <td class="pd-r-0-force tx-center" v-if="i.petugas">{{i.petugas.name}}</td>
                    <td class="pd-r-0-force tx-center">
                      <router-link
                        :to="{name : i.BOActionButton.routerName, params:{id : i.BOActionButton.id}}"
                      >
                        <i class="icon ion-more tx-18 lh-0"></i>
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <el-row justify="end" type="flex">
                <el-col :md="10">
                  <el-pagination
                    style="float: right"
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="permohonan.page"
                    :page-size="permohonan.size"
                    :page-count="permohonan.pagecount"
                    layout="total, prev, pager, next"
                    :total="permohonan.data.length"
                  ></el-pagination>
                </el-col>
              </el-row>
            </el-card>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import urlBase from "@/js/url";
import VideoBackground from "vue-responsive-video-background-player";
export default {
  data() {
    return {
      page: {
        isLoading: true,
      },
      url: {
        assets: urlBase.web + "/images",
      },
      permohonan: {
        data: [],
        size: 10,
        page: 1,
        list: 0,
        end: 10,
      },
    };
  },
  created() {
    this.getpermohonan();
  },
  mounted() {
    this.$parent.justExpand();
  },
  computed: {
    keabsahan() {
      var total = 0;
      this.permohonan.data.forEach((e) => {
        if (e.status == "keabsahan") {
          total = total + 1;
        }
      });
      return total;
    },
    teknis() {
      var total = 0;
      this.permohonan.data.forEach((e) => {
        if (e.status == "teknis") {
          total = total + 1;
        }
      });
      return total;
    },
    balasanteknis() {
      var total = 0;
      this.permohonan.data.forEach((e) => {
        if (e.status == "teknisbalas") {
          total = total + 1;
        }
      });
      return total;
    },
  },
  methods: {
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      var start = Math.max(0, val - 1);
      var end = this.permohonan.size;
      var newstart = Math.max(0, start * end);
      var newend = val * end;

      this.permohonan.list = newstart;
      this.permohonan.end = newend;

      console.log(`current page: ${val}`);
    },
    getpermohonan() {
      this.page.isLoading = true;
      this.axios
        .post(urlBase.web + "/perizinan/permohonan", {
          type: "data",
          status: "bo",
        })
        .then(
          (r) => (
            (this.permohonan.data = r.data), (this.page.isLoading = false)
          )
        );
    },
  },
  components: {
    "video-background": VideoBackground,
  },
};
</script>
<style>
.bo-success {
  background-color: #a8d4b9;
  color: white;
  font-weight: bold;
}
.bo-primary {
  background-color: #8bbee9;
  color: white;
  font-weight: bold;
}
.bo-warning {
  background-color: #ffc17a;
  color: white;
  font-weight: bold;
}
</style>

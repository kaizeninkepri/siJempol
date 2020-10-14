<template>
  <div class="mg-t-20">
    <div class="br-msg-header d-flex justify-content-between">
      <div class="pd-x-0 pd-t-30">
        <h4 class="tx-gray-800 mg-b-5">DATA SURAT MASUK & SURAT KELUAR</h4>
        <p class="mg-b-0" v-if="user.role">{{user.role.role}}</p>
      </div>
    </div>
    <div class="br-pagebody">
      <el-row class="pd-5" :gutter="10">
        <el-col :md="24" class="mg-b-20">
          <el-row :gutter="10">
            <el-col :md="8">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <i
                    class="el-icon-postcard tx-50 tx-primary"
                    @click="changeDataSurat('terkirim','Data Surat Masuk')"
                  ></i>
                  <div class="mg-l-20">
                    <p class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10">Surat Masuk</p>
                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">{{datasurat('terkirim').length}}</p>
                    <span class="tx-11 tx-roboto tx-primary">Permintaan Rekomendasi Teknis</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :md="8">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <i
                    class="el-icon-message tx-50 tx-info"
                    @click="changeDataSurat('balas','Data Surat Keluar')"
                  ></i>
                  <div class="mg-l-20">
                    <p
                      class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                    >Surat Keluar</p>
                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">{{datasurat('balas').length}}</p>
                    <span class="tx-11 tx-roboto tx-info">Balasan Rekomendasi Teknis</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :md="8">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <i
                    class="el-icon-finished tx-50 tx-success"
                    @click="changeDataSurat('selesai','Data Surat Keluar')"
                  ></i>
                  <div class="mg-l-20">
                    <p class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10">Selesai</p>
                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">{{datasurat('selesai').length}}</p>
                    <span class="tx-11 tx-roboto tx-success">Jumlah Rekomendasi Teknis</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row class="mg-t-10">
            <el-card v-loading="page.isLoading">
              <div class="d-flex align-items-center justify-content-between mg-b-30">
                <div>
                  <h6 class="tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1">{{table.title}}</h6>
                </div>
                <div class="wd-130">
                  <div class="row">
                    <div class="col-md-4">
                      <el-button
                        icon="el-icon-refresh"
                        @click="changeDataSurat('','Data Surat Masuk')"
                      >Muat Ulang</el-button>
                    </div>
                    <div class="col-md-8">
                      <el-input
                        placeholder="Cari Data Permohonan ..."
                        prefix-icon="el-icon-search"
                        v-model="table.search"
                      ></el-input>
                    </div>
                  </div>
                </div>
              </div>
              <!-- d-flex -->

              <el-table :data="tablesurat" style="width: 100%">
                <el-table-column type="index" width="50"></el-table-column>
                <el-table-column prop="nomor" label="Nomor Surat"></el-table-column>
                <el-table-column prop="perihal" label="Perihal"></el-table-column>
                <el-table-column prop="permohonan.izin.nama_izin" label="Izin"></el-table-column>
                <el-table-column prop="backoffice.name" label="Petugas"></el-table-column>
                <el-table-column prop="waktuHuman" label width="180">
                  <template slot-scope="scope">
                    <el-popover
                      placement="top-start"
                      title="Tanggal Masuk Surat"
                      width="200"
                      trigger="hover"
                      :content="scope.row.created_at"
                    >
                      <span slot="reference">{{scope.row.waktuHuman}}</span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column prop="created_at" width="180">
                  <template slot-scope="scope">
                    <router-link
                      :to="{name : 'bo-surat-permintaan', params:{id : scope.row.permohonan.permohonan_id}}"
                    >
                      <el-button icon="el-icon-document-copy" size="mini" type="primary">Balas Surat</el-button>
                    </router-link>
                  </template>
                </el-table-column>
              </el-table>
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
      surat: [],
      table: {
        title: "Data Surat Masuk",
        search: "",
      },
    };
  },
  mounted() {
    this.$parent.justExpand();
  },
  created() {
    this.getpermohonan();
  },
  computed: {
    user() {
      return this.$store.state.StoreUser.user;
    },
    datasurat() {
      return (salut) =>
        salut == null
          ? this.surat
          : this.surat.filter((p) => p.status == salut);
    },
    tablesurat() {
      var v1 = this.table.search;
      const filter = (p) =>
        p.kategori == v1 ||
        p.nomor.toLowerCase().includes(v1) ||
        p.perihal.toLowerCase().includes(v1) ||
        p.backoffice.name.toLowerCase().includes(v1) ||
        p.status.toLowerCase().includes(v1) ||
        p.permohonan.izin.nama_izin.toLowerCase().includes(v1);
      return v1 == ""
        ? this.surat.filter((p) => p.status == "terkirim")
        : this.surat.filter(filter);
    },
  },
  methods: {
    changeDataSurat(value, title) {
      this.page.isLoading = true;
      this.table.search = value;
      this.table.title = title;
      this.page.isLoading = false;
    },
    getpermohonan() {
      this.page.isLoading = true;
      this.axios
        .post(urlBase.web + "/surat", {
          type: "getSuratByOpd",
        })
        .then((r) => {
          this.surat = r.data;
          this.page.isLoading = false;
        });
    },
  },
  components: {
    "video-background": VideoBackground,
  },
};
</script>

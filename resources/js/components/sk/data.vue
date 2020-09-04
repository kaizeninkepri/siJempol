<template>
  <div>
    <div class="br-pageheader pd-y-15 pd-l-20">
      <nav class="breadcrumb pd-0 mg-0 tx-12"></nav>
    </div>
    <div class="br-msg-header d-flex justify-content-between">
      <div class="pd-x-0 pd-t-30">
        <h4 class="tx-gray-800 mg-b-5">{{page.subtitle}}</h4>
        <h3 class="tx-gray-800 mg-b-5">{{page.title}}</h3>
      </div>
    </div>
    <div class="br-pagebody">
      <el-table
        v-loading="table.isLoading"
        :data="table.data.filter(data => !table.search 
                  || data.permohonan_code.toLowerCase().includes(table.search.toLowerCase())
                  || data.perusahaan.fullname.toLowerCase().includes(table.search.toLowerCase())
                  || data.izin.nama_izin.toLowerCase().includes(table.search.toLowerCase())
                  || data.opd.opd.toLowerCase().includes(table.search.toLowerCase())
                )"
        style="width: 100%"
      >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column label="Identitas Izin" align="center">
          <el-table-column prop="perusahaan.fullname" label="Perusahaan" header-align="center"></el-table-column>
          <el-table-column prop="izin.nama_izin" label="Nama Izin" header-align="center"></el-table-column>
        </el-table-column>
        <el-table-column label="Waktu Permohonan" align="center">
          <el-table-column prop="created_at" label="Tanggal" align="center" width="100"></el-table-column>
          <el-table-column prop="updated_at" label="OPD Teknis" align="center" width="100"></el-table-column>
          <el-table-column prop="lastjam" label="Rentang" align="center" width="80"></el-table-column>
        </el-table-column>
        <el-table-column align="center">
          <template slot="header" slot-scope="scope">
            <el-input v-model="table.search" size="mini" placeholder="Type to search" />
          </template>
          <template slot-scope="scope">
            <router-link
              :to="{ name : 'sk-detail', params:{id:scope.row.permohonan_id, code: scope.row.permohonan_code, perusahaan:scope.row.perusahaan.perusahaan_id}}"
            >
              <el-button size="mini" type="primary">Penerbitan Surat Keputusan</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import urlBase from "@/js/url";

export default {
  data() {
    return {
      page: {
        title: "Pembuatan Draft Surat Keputusan",
        subtitle: "BACK OFFICE ",
        status: "draft",
      },
      online: null,
      url: {
        pdf: urlBase.urlWeb + "/PDF",
        track: urlBase.urlWeb + "/track",
      },
      today: moment().format("DD-MM-YYYY"),
      range: null,
      table: {
        isLoading: false,
        data: [],
        search: null,
      },
    };
  },
  mounted() {
    if (this.$route.query.q == "terbit") {
      this.page.title = "Surat Keputusan";
      this.page.status = "selesai";
    }

    this.GetData(this.today);
  },
  methods: {
    SortType() {
      if (this.sort.type == "Tanggal") {
        this.show.tanggal = true;
        this.show.range = false;
      }
      if (this.sort.type == "range") {
        this.show.tanggal = false;
        this.show.range = true;
      }
    },
    moment(arg) {
      moment.locale("id");
      return moment(arg);
    },
    GetData(date) {
      this.table.isLoading = true;
      this.table.data = [];
      this.axios
        .post(urlBase.web + "/validasi", {
          type: "dataByDate",
          status: this.page.status,
        })
        .then(
          (r) => ((this.table.data = r.data), (this.table.isLoading = false))
        );
    },
    edit(index, row) {
      window.location.href =
        urlBase.web + "/validasi/permohonan/detail/" + row.permohonan_id;
    },
  },
};
</script>

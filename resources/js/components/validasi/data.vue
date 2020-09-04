<template>
  <div>
    <div class="br-pageheader pd-y-15 pd-l-20">
      <nav class="breadcrumb pd-0 mg-0 tx-12"></nav>
    </div>
    <div class="br-msg-header d-flex justify-content-between">
      <div class="pd-x-0 pd-t-30">
        <h4 class="tx-gray-800 mg-b-5">{{page.title}}</h4>
        <p class="mg-b-0">{{page.subtitle}}</p>
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
          <el-table-column prop="updated_at" label="Front Office" align="center" width="100"></el-table-column>
          <el-table-column prop="lastjam" label="Rentang" align="center" width="80"></el-table-column>
        </el-table-column>
        <el-table-column align="center">
          <template slot="header" slot-scope="scope">
            <el-input v-model="table.search" size="mini" placeholder="Type to search" />
          </template>
          <template slot-scope="scope">
            <router-link
              :to="{ name : 'validasi-permohonan-detail', params:{ id : scope.row.permohonan_id}}"
            >
              <el-button size="mini" type="primary">Selengkapnya</el-button>
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
        title: "Permohonan",
        subtitle: "Back Office",
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
      show: {
        tanggal: false,
        range: false,
      },
      sort: {
        type: null,
        data: null,
      },
      options: [
        {
          value: "range",
          label: "Range Tanggal",
        },
        {
          value: "Tanggal",
          label: "Tanggal",
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "Minggu Lalu",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "Bulan Lalu",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "3 Bulan Terakhir",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
    };
  },
  mounted() {
    console.log("permohonan Data");
    this.$parent.$data.activeLink = "perizinan";
    this.$parent.$data.activeName = "Permohonan Data";
    this.GetData(this.today);
    if (this.$route.query.q) {
      this.online = this.$route.query.q;
    }
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
          status: "keabsahan",
          date: date,
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

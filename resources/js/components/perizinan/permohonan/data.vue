<template>
  <div>
    <div class="row">
      <div class="col-md-9">
        <el-select
          v-model="sort.type"
          placeholder="Sortir Berita Berdasarkan.."
          @change="SortType()"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <span class="byDate" v-if="show.tanggal">
          <el-date-picker
            v-model="today"
            @change="GetData(today)"
            type="date"
            value-format="dd-MM-yyyy"
            format="dd-MM-yyyy"
            placeholder="Pick a day"
          ></el-date-picker>
        </span>

        <span class="byRange" v-if="show.range">
          <el-date-picker
            v-model="range"
            @change="GetDataByDateRange(range)"
            type="daterange"
            range-separator="/"
            format="dd-MM-yyyy"
            :picker-options="pickerOptions"
            start-placeholder="Start date"
            end-placeholder="End date"
          ></el-date-picker>
        </span>
        <br />
        <br />
      </div>
      <div class="col-md-3 offset-md-6 text-right"></div>
      <div class="col-md-12">
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
            <el-table-column prop="create_on" label="create_on" header-align="center"></el-table-column>
          </el-table-column>
          <el-table-column label="Waktu Permohonan" align="center">
            <el-table-column prop="created_at" label="Tanggal" align="center" width="100"></el-table-column>
            <el-table-column prop="jam" label="jam" align="center" width="60"></el-table-column>
          </el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-input v-model="table.search" size="mini" placeholder="Type to search" />
            </template>
            <template slot-scope="scope">
              <a
                :href="url.pdf+'?type=routingSlip&id='+scope.row.permohonan_id"
                class="btn btn-sm btn-success"
                target="_blank"
              >Routing Slip</a>
              <el-button size="mini" @click="edit(scope.$index, scope.row)">Detail</el-button>
              <a
                :href="url.track+'/'+scope.row.permohonan_id"
                class="btn btn-sm btn-primary"
                target="_blank"
              >Track</a>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import urlBase from "@/js/url";

export default {
  data() {
    return {
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
      axios
        .post(urlBase.urlWeb + "/perizinan/permohonan", {
          type: "dataByDate",
          online: this.online,
          date: date,
        })
        .then(
          (r) => ((this.table.data = r.data), (this.table.isLoading = false))
        );
    },
    GetDataByDateRange(date) {
      this.table.isLoading = true;
      axios
        .post(urlBase.urlWeb + "/perizinan/permohonan", {
          type: "dataByRange",
          online: this.online,
          date: date,
        })
        .then(
          (r) => (
            console.log(r.data),
            (this.table.data = r.data),
            (this.table.isLoading = false)
          )
        );
    },
    edit(index, row) {
      window.location.href =
        urlBase.urlWeb + "/perizinan-permohonanDetail/" + row.permohonan_id;
    },
    deleteTable(index, row) {
      this.$confirm("hapus Data ini ?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          axios
            .post(urlBase.urlWeb + "/master/aclGroup", {
              type: "hapus",
              aclId: row.aclGroup_id,
            })
            .then((r) => this.GetModulGroup());
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
    },
  },
};
</script>

<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6">
            <h3 class="font-weight-bold no-margin no-padding">{{izin.nama_izin}}</h3>
            <h6 class="text-muted no-margin no-padding">{{opd.opd}}</h6>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <el-form :model="form" ref="modul">
              <div class="row">
                <div class="form-group col-md-2">
                  <label for>NPWP</label>
                  <the-mask :mask="['##.###.###.#-###.###']" v-model="form.perusahaan.npwp" />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-2">
                  <el-form-item
                    label="kategori"
                    prop="perusahaan.kategori"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'change' }"
                  >
                    <el-select
                      v-model="form.perusahaan.kategori"
                      clearable
                      placeholder="Kategori Perusahaan"
                    >
                      <el-option
                        v-for="item in select.perusahaan"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>

                <div class="form-group col-md-4">
                  <el-form-item
                    label="Nama Perusahaan"
                    prop="perusahaan.nama"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-input
                      placeholder="Nama Perusahaan"
                      v-model="form.perusahaan.nama"
                      clearable
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="form-group col-md-3">
                  <el-form-item
                    label="Email"
                    prop="perusahaan.email"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-input
                      placeholder="Email Perusahaan"
                      v-model="form.perusahaan.email"
                      clearable
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="form-group col-md-2">
                  <el-form-item
                    label="Hp/ Telp"
                    prop="perusahaan.contact"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-input
                      placeholder="Hp/Telp Perusahaan"
                      v-model="form.perusahaan.contact"
                      clearable
                    ></el-input>
                  </el-form-item>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-5">
                  <el-form-item
                    label="Alamat"
                    prop="perusahaan.alamat"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'change' }"
                  >
                    <el-input
                      type="textarea"
                      :rows="4"
                      placeholder="Alamat Perusahaan"
                      v-model="form.perusahaan.alamat"
                    ></el-input>
                  </el-form-item>
                </div>
              </div>

              <el-divider content-position="right">IDENTITAS PEMOHON</el-divider>
              <div class="row">
                <div class="form-group col-md-4">
                  <el-form-item
                    label="NOMOR NIK"
                    prop="pemohon.identitas_no"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-input
                      placeholder="Nomor Identitas KTP"
                      v-model="form.pemohon.identitas_no"
                      clearable
                    ></el-input>
                  </el-form-item>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <el-form-item
                    label="Nama Pemohon"
                    prop="pemohon.nama"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-input placeholder="nama Pemohon" v-model="form.pemohon.nama" clearable></el-input>
                  </el-form-item>
                </div>
                <div class="form-group col-md-2">
                  <el-form-item
                    label="Nomor Hp/Telp"
                    prop="pemohon.contact"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-input placeholder="Nomor Hp/Telp" v-model="form.pemohon.contact" clearable></el-input>
                  </el-form-item>
                </div>
                <div class="form-group col-md-2">
                  <el-form-item
                    label="Email"
                    prop="pemohon.email"
                    :rules="{message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-input placeholder="Email Pemohon" v-model="form.pemohon.email" clearable></el-input>
                  </el-form-item>
                </div>
              </div>

              <el-divider content-position="right">KELENGKAPAN BERKAS PERSYARATAN</el-divider>
              <el-row :gutter="5">
                <el-col :md="12">
                  <el-input v-model="table.search" placeholder="Type to search" />
                </el-col>
                <el-col :md="12">
                  <el-switch
                    style="display: block"
                    v-model="kelengkapanAll"
                    @change="berkasLengkapAll"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="Berkas lengkap"
                  ></el-switch>
                </el-col>
              </el-row>
              <br />
              <el-table
                ref="table_persyaratan"
                v-loading="table.isLoading"
                :data="form.persyaratan.filter(persyaratan => !table.search || persyaratan.persyaratan.toLowerCase().includes(table.search.toLowerCase()))"
                border
                style="width: 100%"
              >
                <el-table-column type="index" width="50"></el-table-column>
                <el-table-column label="Persyaratan" prop="persyaratan"></el-table-column>
                <el-table-column label="kelengkapan Berkas" align="center">
                  <template slot-scope="scope">
                    <el-switch
                      style="display: block"
                      v-model="scope.row.kelengkapan"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      active-text="Berkas lengkap"
                    ></el-switch>
                  </template>
                </el-table-column>
                <el-table-column label="Catatan" align="center">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.catatan"></el-input>
                  </template>
                </el-table-column>
              </el-table>
            </el-form>
          </div>
          <div class="card-footer">
            <el-button type="primary" @click="InsertProses()">Proses</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import urlBase from "@/js/url";
import moment from "moment";

export default {
  data() {
    return {
      id: this.$route.params.id,
      form: {
        perusahaan: {
          perusahaan_id: null,
          perusahaan_code: null,
          npwp: null,
          kategori: null,
          nama: null,
          alamat: null,
          email: null,
          contact: null
        },
        pemohon: {
          perusahaanp_id: null,
          nama: null,
          email: null,
          contact: null,
          identitas_no: null,
          identitas_kategori: "KTP",
          perusahaan_id: null
        },
        izin: {},
        persyaratan: []
      },
      select: {
        perusahaan: [
          { label: "Perorangan", value: "perorangan" },
          { label: "CV", value: "CV" },
          { label: "PT", value: "PT" }
        ]
      },
      table: {
        data: [],
        isLoading: true,
        search: null
      },
      izin: {},
      opd: {},
      kelengkapanAll: false
    };
  },
  mounted() {
    this.$parent.$data.activeLink = "perizinan";
    this.$parent.$data.activeName = "Form Permohonan";
  },
  created() {
    this.GetIzin();
  },
  methods: {
    notif(s, m, type) {
      this.$notify({
        title: s,
        message: m,
        type: type
      });
    },
    kelengkapanPersyaratan() {
      this.form.persyaratan.forEach((item, index) => {
        this.$set(item, "kelengkapan", "false");
        this.$set(item, "catatan", null);
      });
    },
    berkasLengkapAll() {
      this.form.persyaratan.forEach((item, index) => {
        item.kelengkapan = this.kelengkapanAll;
      });
    },
    GetIzin() {
      axios
        .post(urlBase.urlWeb + "/opd/izin", {
          type: "izinById",
          id: this.id
        })
        .then(
          r => (
            (this.izin = r.data[0]),
            (this.opd = r.data[0].opd),
            (this.form.izin = r.data[0]),
            (this.form.persyaratan = r.data[0].persyaratan),
            this.kelengkapanPersyaratan(),
            (this.table.isLoading = false)
          )
        );
    },
    InsertProses() {
      axios
        .post(urlBase.urlWeb + "/perizinan/permohonan", {
          type: "insert",
          form: this.form
        })
        .then(
          r => (
            this.notif(r.data.title, r.data.message, r.data.type),
            this.$router.push({
              name: "perizinan-permohonanDetail",
              params: { id: r.data.dataId }
            })
          )
        );
    }
  }
};
</script>
<style scoped>
.item {
  margin-right: 50px;
}
</style>
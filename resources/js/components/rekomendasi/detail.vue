<template>
  <div>
    <div class="br-pageheader pd-y-15 pd-l-20">
      <nav class="breadcrumb pd-0 mg-0 tx-12"></nav>
    </div>
    <div class="br-msg-header d-flex justify-content-between">
      <div class="pd-x-0 pd-t-30">
        <h4 class="tx-gray-800 mg-b-5">{{page.subtitle}}</h4>
        <h5 class="tx-gray-800 mg-b-5">{{page.title}}</h5>
      </div>
    </div>
    <div class="br-pagebody">
      <el-steps
        direction="horizontal"
        :active="active.index"
        process-status="finish"
        finish-status="success"
      >
        <el-step title="Permohonan Tela'ah Rekomedasi Teknis" description="Selesai">
          <template slot="title">
            <div @click="activeTab(0)">Permohonan Tela'ah Rekomedasi Teknis</div>
          </template>
        </el-step>
        <el-step title="Balasan Rekemondasi Teknis" description="proses" @click="activeTab(1)">
          <template slot="title">
            <div @click="activeTab(1)">Balasan Rekemondasi Teknis</div>
          </template>
        </el-step>
      </el-steps>
      <br />
      <div v-if="active.card[0]">
        <div class="card">
          <div class="card-body">
            <el-form :model="permintaan" ref="permintaan_form" :inline="false" label-position="top">
              <div class="row">
                <div class="col-md-3">
                  <el-form-item
                    prop="nomor"
                    label="Nomor Surat"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-input
                      placeholder="Nomor Surat"
                      v-model="permintaan.nomor"
                      :autofocus="true"
                      :disabled="permintaan.disabled"
                      clearable
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="col-md-3">
                  <el-form-item
                    prop="opd_id"
                    label="Organisasi Perangkat Daerah"
                    label-position="top"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'change' }"
                  >
                    <el-select
                      v-model="permintaan.opd_id"
                      placeholder="Organisasi Perangkat Daerah"
                      filterable
                      :disabled="permintaan.disabled"
                    >
                      <el-option
                        v-for="item in opd"
                        :key="item.opd_id"
                        :label="item.opd"
                        :value="item.opd_id"
                        :disabled="!item.aktif"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>

                <div class="col-md-3" style="margin-top:10px">
                  <label for>Scan Surat Permohonan Telaah / Rekomendasi</label>
                  <input
                    type="file"
                    class="form-control-uniform"
                    @change="onFilesChange($event)"
                    ref="permintaanInputFile"
                    style="margin-top:18px"
                  />
                  <span class="text-danger" v-if="permintaan.validate.file">File Belum di pilih</span>
                </div>
              </div>
            </el-form>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-sm btn-success" @click="uploadPermintaan()">Upload</button>
          </div>
        </div>
        <br />
        <div class="card">
          <div class="card-body">
            <el-table
              v-loading="table.permintaan.isLoading"
              :data="table.permintaan.data.filter(data => !table.permintaan.search 
                        || data.nomor_kajian.toLowerCase().includes(table.permintaan.search.toLowerCase())
                        )"
              style="width: 100%"
            >
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column prop="nomor_kajian" label="Nomor" header-align="center"></el-table-column>
              <el-table-column label="Tujuan & Waktu" align="center">
                <el-table-column
                  prop="opd.opd"
                  label="Organisasi Perangkat Daerah"
                  header-align="center"
                ></el-table-column>
                <el-table-column
                  prop="created_at_kajian"
                  label="Upload File"
                  header-align="center"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="kirimKajian"
                  label="Kirim File"
                  header-align="center"
                  align="center"
                >
                  <template slot-scope="scope">
                    <div v-if="scope.row.kirimKajian == 'Surat Belum Di Kirim'">
                      <el-tag type="danger">{{scope.row.kirimKajian}}</el-tag>
                    </div>
                    <div v-else>{{scope.row.kirimKajian}}</div>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                  <el-input
                    v-model="table.permintaan.search"
                    size="mini"
                    placeholder="Type to search"
                  />
                </template>
                <template slot-scope="scope">
                  <div v-if="scope.row.kirimKajian == 'Surat Belum Di Kirim'">
                    <a
                      :href="url.file+'/storage/app/permohonan/'+permohonan.permohonan_code+'/rekomendasi/'+scope.row.file_kajian"
                      class="btn btn-sm btn-primary"
                      target="blank"
                    >Unduh</a>
                    <el-button size="mini" type="warning" @click="kirimFile(scope.row)">Kirim File</el-button>
                    <el-button size="mini" type="danger" @click="hapus(scope.row)">Hapus</el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div v-if="active.card[1]">
        <div class="card">
          <div class="card-body">
            <el-table
              v-loading="table.permintaan.isLoading"
              :data="table.permintaan.data.filter(data => !table.permintaan.search 
                        || data.nomor_kajian.toLowerCase().includes(table.permintaan.search.toLowerCase())
                        )"
              style="width: 100%"
            >
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column label="Nomor Surat" align="center">
                <el-table-column
                  prop="nomor_kajian"
                  label="Nomor Surat DPMPTSP"
                  header-align="center"
                >
                  <template slot-scope="scope">
                    <div class="row">
                      <div class="col-md-8">{{scope.row.nomor_kajian}}</div>
                      <hr />
                      <div class="col-md-12" v-if="scope.row.file_kajian != null">
                        <a
                          :href="url.file+'/storage/app/permohonan/'+permohonan.permohonan_code+'/rekomendasi/'+scope.row.file_kajian"
                          class="btn btn-sm btn-primary"
                          target="_blank"
                        >Unduh</a>
                        <router-link
                          :to="{name : 'validasi-permohonan-detail', params:{id : permohonan.permohonan_id}}"
                          class="btn btn-sm btn-teal"
                          target="_blank"
                        >Berkas Persyaratan</router-link>
                      </div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="nomor_rekom"
                  label="Nomor Surat OPD Teknis"
                  header-align="center"
                >
                  <template slot-scope="scope">
                    <div class="row">
                      <div class="col-md-8">{{scope.row.nomor_rekom}}</div>

                      <div class="col-md-4" v-if="scope.row.file_rekom != null">
                        <a
                          :href="url.file+'/storage/app/permohonan/'+permohonan.permohonan_code+'/rekomendasi/'+scope.row.nomor_rekom"
                          class="btn btn-sm btn-primary"
                          target="_blank"
                        >Unduh</a>
                      </div>
                    </div>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column label="Tujuan & Waktu" align="center">
                <el-table-column
                  prop="kirimKajian"
                  label="Upload File"
                  header-align="center"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="kirimRekom"
                  label="Kirim"
                  header-align="center"
                  align="center"
                >
                  <template slot-scope="scope">
                    <div v-if="scope.row.kirimRekom == 'Surat Belum Di Kirim'">
                      <el-tag type="danger">{{scope.row.kirimRekom}}</el-tag>
                    </div>
                    <div v-else>{{scope.row.kirimRekom}}</div>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                  <el-input
                    v-model="table.permintaan.search"
                    size="mini"
                    placeholder="Type to search"
                  />
                </template>
                <template slot-scope="scope">
                  <div v-if="scope.row.kirimRekom == 'Surat Belum Di Kirim'">
                    <el-button size="mini" type="warning" @click="balasForm(scope.row)">Upload</el-button>
                  </div>
                  <!-- <div>
                    <el-button
                      v-if="scope.row.permohonan == 'Terima'"
                      size="mini"
                      type="success"
                      @click="toDraft()"
                    >Pembuatan Draft Surat Keputusan</el-button>
                    <el-button
                      v-if="scope.row.permohonan == 'Tolak'"
                      size="mini"
                      type="success"
                      @click="toTolak()"
                    >Tolak permohonan</el-button>
                  </div>-->
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <br />
        <div class="card" v-if="show.formBalasan">
          <div class="card-body">
            <el-form :model="balasan" ref="balasan_form" :inline="false" label-position="top">
              <div class="row">
                <div class="col-md-3">
                  <el-form-item
                    prop="nomor"
                    label="Nomor Surat"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-input
                      placeholder="Nomor Surat"
                      v-model="balasan.nomor"
                      :autofocus="true"
                      :disabled="balasan.disabled"
                      clearable
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="col-md-3">
                  <el-form-item
                    prop="opd_id"
                    label="Organisasi Perangkat Daerah"
                    label-position="top"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'change' }"
                  >
                    <el-select
                      v-model="balasan.opd_id"
                      placeholder="Organisasi Perangkat Daerah"
                      filterable
                      :disabled="balasan.disabled"
                    >
                      <el-option
                        v-for="item in opd"
                        :key="item.opd_id"
                        :label="item.opd"
                        :value="item.opd_id"
                        :disabled="item.aktif"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="col-md-3">
                  <el-form-item
                    prop="permohonan"
                    label="Terima / Tolak"
                    label-position="top"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'change' }"
                  >
                    <el-select
                      v-model="balasan.permohonan"
                      placeholder="Status Surat"
                      filterable
                      :disabled="balasan.disabled"
                    >
                      <el-option
                        v-for="item in permohonanTerima"
                        :key="item.id"
                        :label="item.status"
                        :value="item.status"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="col-md-3" style="margin-top:10px">
                  <label for>Scan Surat Balasan Telaah / Rekomendasi</label>
                  <input
                    type="file"
                    class="form-control-uniform"
                    @change="onFilesChangeBalasan($event)"
                    ref="balasanInputFile"
                    style="margin-top:18px"
                  />
                  <span class="text-danger" v-if="balasan.validate.file">File Belum di pilih</span>
                </div>
              </div>
            </el-form>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-sm btn-success" @click="uploadBalasan()">Upload</button>
          </div>
        </div>
      </div>
    </div>

    <div
      id="permintaan_modal"
      class="modal fade"
      tabindex="-1"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">STATUS UPLOAD</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              :disabled="permintaan.upload.disabled"
            >&times;</button>
          </div>

          <div class="modal-body">
            <table class="table table-striped">
              <tr>
                <td>Scan Surat Permohonan Telaah / Rekomendasi</td>
                <td width="300">
                  <div class="progress" v-if="permintaan.upload.progress">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      style="width: 100%"
                    >
                      <span style="margin-top:20px">Uploading File</span>>
                    </div>
                  </div>
                  <el-progress
                    :percentage="100"
                    status="success"
                    v-if="!permintaan.upload.progress"
                  ></el-progress>
                </td>
              </tr>
            </table>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-link"
              data-dismiss="modal"
              :disabled="permintaan.upload.disabled"
              @click="resetform('permintaan_form'),GetPermintaanData()"
            >Tutup</button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="balasan_modal"
      class="modal fade"
      tabindex="-1"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">STATUS UPLOAD</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              :disabled="balasan.upload.disabled"
            >&times;</button>
          </div>

          <div class="modal-body">
            <table class="table table-striped">
              <tr>
                <td>Scan Surat balasan Telaah / Rekomendasi</td>
                <td width="300">
                  <div class="progress" v-if="permintaan.upload.progress">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      style="width: 100%"
                    >
                      <span style="margin-top:20px">Uploading File</span>>
                    </div>
                  </div>
                  <el-progress :percentage="100" status="success" v-if="!balasan.upload.progress"></el-progress>
                </td>
              </tr>
            </table>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-link"
              data-dismiss="modal"
              :disabled="balasan.upload.disabled"
            >Tutup</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import urlBase from "@/js/url";
n;
import perusahaan from "@/js/components/perizinan/perusahaan/detail";

export default {
  data() {
    return {
      permohonanTerima: [
        { id: 1, status: "Terima" },
        { id: 2, status: "Tolak" },
      ],
      page: {
        title: "Permohonan Rekomendasi Teknis",
        subtitle: "BACK OFFICE",
      },
      active: {
        index: 0,
        card: [true, false, false],
      },
      show: {
        formBalasan: false,
      },
      id: this.$route.params.id,
      url: {
        file: urlBase.web,
      },
      table: {
        permintaan: {
          data: [],
          isLoading: false,
          search: null,
        },

        balasan: {
          data: [],
          isLoading: false,
          search: null,
        },
      },
      opd: [],
      permintaan: {
        nomor: null,
        file: null,
        opd_id: null,
        upload: {
          progress: false,
          disabled: true,
        },
        disabled: false,
        validate: {
          file: false,
        },
      },
      balasan: {
        stRekom_id: null,
        nomor: null,
        file: null,
        opd_id: 1,
        permohonan: "Terima",
        upload: {
          progress: false,
          disabled: true,
        },
        disabled: false,
        validate: {
          file: false,
        },
      },
      permohonan: {
        permohonan_id: "1025",
        permohonan_code: "PRMN00996",
      },
      perusahaan_id: null,
    };
  },
  mounted() {
    console.log("permohonan Data");
    this.$parent.$data.activeLink = "perizinan";
    this.$parent.$data.activeName = "Permohonan Data";

    this.permohonan.permohonan_id = this.$route.params.id;
    this.permohonan.permohonan_code = this.$route.params.code;
    this.perusahaan_id = this.$route.params.perusahaan;
    if (this.$route.query.q == "teknisrespon") {
      this.active.index = 1;
      this.active.card[0] = false;
      this.active.card[1] = true;
      this.active.card[2] = false;
      this.page.title =
        "Proses Kajian Dan Pengiriman Surat Telaah Rekomendasi Teknis";
      this.page.subtitle = "OPD TEKNIS";
    }
    this.GetOpd();
    this.GetPermintaanData();
  },
  components: {
    perusahaan,
  },
  //   props:['permohonan'],
  methods: {
    toDraft() {
      this.axios
        .post(urlBase.web + "/surat/rekomendasi", {
          type: "toDraft",
          permohonan_id: this.permohonan.permohonan_id,
          perusahaan_id: this.perusahaan_id,
        })
        .then((r) =>
          this.$router.push({
            name: "sk",
            query: { q: "draft" },
          })
        );
    },
    toTolak() {
      this.axios
        .post(urlBase.web + "/surat/rekomendasi", {
          type: "toTolak",
          permohonan_id: this.permohonan.permohonan_id,
          perusahaan_id: this.perusahaan_id,
        })
        .then((r) =>
          this.$router.push({
            name: "sk",
            query: { q: "draft" },
          })
        );
    },
    activeTab(row) {
      let a = row;
      let b = row;
      this.active.card[1] = true;
      this.active.card[0] = false;
      this.active.card[2] = false;
    },
    notif(s, m, type) {
      this.$notify({
        title: s,
        message: m,
        type: type,
      });
    },
    uploadPermintaan() {
      if (this.permintaan.file == null) {
        this.permintaan.validate.file = true;
      }
      this.$refs["permintaan_form"].validate((valid) => {
        if (valid) {
          if (this.permintaan.file == null) {
            this.permintaan.validate.file = true;
          } else {
            this.UploadFIle();
            this.openModal("show");
          }
        } else {
          return false;
        }
      });
    },
    uploadBalasan() {
      if (this.balasan.file == null) {
        this.balasan.validate.file = true;
      }
      this.$refs["balasan_form"].validate((valid) => {
        if (valid) {
          if (this.balasan.file == null) {
            this.balasan.validate.file = true;
          } else {
            this.UploadFIleBalasan();
            this.balasanModal("show");
          }
        } else {
          return false;
        }
      });
    },
    GetOpd() {
      this.axios
        .post(urlBase.web + "/master/opd", {
          type: "dataAll",
        })
        .then((r) => ((this.opd = r.data), (this.opd[12].aktif = false)));
    },
    GetPermintaanData() {
      this.table.permintaan.isLoading = true;
      this.axios
        .post(urlBase.web + "/surat/rekomendasi", {
          type: "RekomendasiByPermohonanId",
          permohonan_id: this.permohonan.permohonan_id,
        })
        .then(
          (r) => (
            (this.table.permintaan.isLoading = false),
            (this.table.permintaan.data = r.data)
          )
        );
    },
    openModal(type) {
      $("#permintaan_modal").modal(type);
    },
    balasanModal(type) {
      $("#balasan_modal").modal(type);
    },
    checkUpload() {
      let que = this.queue;
      let length = this.queue.length;
      // console.log(que.length)
      if (length > 0) {
        this.UploadFIle(que[0]);
      } else {
        this.show.modal = false;
      }
    },
    moment(arg) {
      moment.locale("id");
      return moment(arg);
    },

    kirimFile(row) {
      let loading = this.table.permintaan.isLoading;
      loading = true;
      this.$confirm("Kirim File Ini ?", "Info", {
        confirmButtonText: "Kirim",
        cancelButtonText: "Batal",
        type: "info",
      })
        .then(() => {
          this.axios
            .post(urlBase.web + "/surat/rekomendasi", {
              type: "kirimPemintaanOpd",
              stRekom_id: row.stRekom_id,
              nomor: row.nomor_kajian,
              opd: row.opd.opd,
              permohonan_id: this.permohonan.permohonan_id,
              perusahaan_id: this.perusahaan_id,
            })
            .then(
              (r) => (
                console.log(r.data),
                this.GetPermintaanData(),
                this.notif(r.data.title, r.data.message, r.data.type),
                (loading = false)
              )
            );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Surat Batal Di Kirim",
          });
        });
    },

    hapus(row) {
      let loading = this.table.permintaan.isLoading;
      loading = true;
      this.$confirm("hapus Data ini ?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          this.axios
            .post(urlBase.web + "/surat/rekomendasi", {
              type: "deleteByid",
              stRekom_id: row.stRekom_id,
              nomor: row.nomor_kajian,
            })
            .then(
              (r) => (
                console.log(r.data),
                this.GetPermintaanData(),
                this.notif(r.data.title, r.data.message, r.data.type),
                (loading = false)
              )
            );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
    },

    onFilesChange(event) {
      console.log(event);
      let fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = (e) => {
        this.permintaan.file = e.target.result;
      };
    },
    onFilesChangeBalasan(event) {
      console.log(event);
      let fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = (e) => {
        this.balasan.file = e.target.result;
      };
    },
    UploadFIle(i) {
      this.permintaan.upload.progress = true;
      this.axios
        .post(urlBase.web + "/surat/rekomendasi", {
          type: "UploadSuratTelaah",
          persyaratan: this.permintaan,
          permohonanCode: this.permohonan.permohonan_code,
          permohonan_id: this.permohonan.permohonan_id,
          perusahaan_id: this.perusahaan_id,
        })
        .then(
          (r) => (this.permintaan.upload.progress = false),
          (this.permintaan.upload.disabled = false),
          (this.$refs.permintaanInputFile.value = ""),
          (this.permintaan.validate.file = false)
        );
    },
    resetform(data) {
      this.$refs[data].resetFields();
    },
    UploadFIleBalasan(i) {
      this.balasan.upload.progress = true;
      this.axios
        .post(urlBase.web + "/surat/rekomendasi", {
          type: "UploadSuratBalasan",
          persyaratan: this.balasan,
          permohonanCode: this.permohonan.permohonan_code,
          permohonan_id: this.permohonan.permohonan_id,
          perusahaan_id: this.perusahaan_id,
        })
        .then(
          (r) => (
            (this.balasan.upload.progress = false),
            (this.balasan.upload.disabled = false),
            this.GetPermintaanData(),
            this.$refs["balasan_form"].resetFields(),
            (this.$refs.balasanInputFile.value = ""),
            (this.balasan.validate.file = false),
            (this.show.formBalasan = false)
          )
        );
    },

    balasForm(row) {
      this.show.formBalasan = true;
      this.balasan.stRekom_id = row.stRekom_id;
    },
  },
};
</script>
<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
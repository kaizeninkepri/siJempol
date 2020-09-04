<template>
  <div>
    <div class="br-pagebody pd-t-30">
      <el-row :gutter="10" type="flex" justify="center" class="mg-b-20 pd-b-10">
        <el-col :md="24" justify="center" style="color:#333" class="tx-bold">
          <h4 class="tx-center">PENGISIAN FORMULIR PERMOHONAN LAYANAN</h4>
          <h5 class="tx-center" v-if="permohonan.izin">{{permohonan.izin.nama_izin}}</h5>
          <h5 class="tx-center" v-if="permohonan.opd">Sektor {{permohonan.opd.opd}}</h5>
        </el-col>
      </el-row>
      <el-row :gutter="10" type="flex" justify="center" class="mg-t-10 mg-b-20 pd-b-10">
        <el-col :md="6">
          <div class="pd-5 d-flex align-items-center">
            <ion-icon name="albums-outline" class="tx-50" :class="steps.pertama"></ion-icon>
            <div class="mg-l-20">
              <p
                class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                :class="steps.pertama"
              >Langkah Ke - 1</p>
              <p
                class="tx-15 tx-lato tx-bold mg-b-2 lh-1"
                :class="steps.pertama"
              >PENGISIAN FORM PENDAFTARAN</p>
            </div>
          </div>
        </el-col>
        <el-col :md="6">
          <div class="pd-5 d-flex align-items-center">
            <ion-icon name="cloud-upload-outline" class="tx-50" :class="steps.kedua"></ion-icon>
            <div class="mg-l-20">
              <p
                class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                :class="steps.kedua"
              >Langkah ke - 2</p>
              <p
                class="tx-15 tx-lato tx-bold mg-b-2 lh-1"
                :class="steps.kedua"
              >UNGGAH BERKAS PERSYARATAN</p>
            </div>
          </div>
        </el-col>
        <el-col :md="6">
          <div class="pd-5 d-flex align-items-center">
            <ion-icon name="paper-plane-outline" class="tx-50" :class="steps.ketiga"></ion-icon>
            <div class="mg-l-20">
              <p
                class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                :class="steps.ketiga"
              >Langkah Ke - 3</p>
              <p
                class="tx-15 tx-lato tx-bold mg-b-2 lh-1"
                :class="steps.ketiga"
              >KIRIM FILE PERMOHONAN</p>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :md="24">
          <el-card v-loading="page.isLoading">
            <el-divider content-position="left">KELENGKAPAN BERKAS PERSYARATAN</el-divider>
            <div class="bd bd-gray-300 rounded table-responsive mg-b-20 pd-b-20">
              <table class="table mg-b-0">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Persyaratan</th>
                    <th></th>
                    <th>Unggah Berkas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(i,Index) in permohonan.persyaratan" :key="Index" :class="i.classBind">
                    <td width="10">{{Index+1}}</td>
                    <td>{{i.persyaratan}}</td>
                    <td v-show="!i.ionClass">
                      <ion-icon name="close-circle-outline" class="tx-20 tx-danger"></ion-icon>
                    </td>
                    <td v-show="i.ionClass">
                      <ion-icon name="checkmark-done-outline" class="tx-20 tx-success"></ion-icon>
                    </td>
                    <td>
                      <div class="progress" v-if="i.progress">
                        <div
                          class="progress-bar progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 100%"
                        ></div>
                      </div>
                      <label :for="Index" class="custom-file-upload" v-if="!i.pratinjau">
                        <i class="fa fa-cloud-upload"></i> Unggah Berkas
                      </label>
                      <input
                        :id="Index"
                        type="file"
                        @change="onFilesChange($event, Index)"
                        v-if="!i.pratinjau"
                      />

                      <el-button
                        type="primary"
                        size="mini"
                        @click="UploadFIle(Index)"
                        v-if="i.upload"
                      >Upload</el-button>

                      <el-button
                        type="primary"
                        size="mini"
                        @click="OpenPratinjau(Index)"
                        v-if="i.pratinjau"
                        icon="el-icon-tickets"
                      >Pratinjau</el-button>

                      <el-button
                        type="danger"
                        size="mini"
                        @click="DeleteFIle(Index)"
                        v-if="i.pratinjau"
                        icon="el-icon-delete"
                      >Hapus</el-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="permohonan.persyaratan">
              <el-button type="primary" size="mini" @click="checkUpload()" v-if="uploadedCek">Upload</el-button>
              <el-button
                type="success"
                @click="kirimPengajuan()"
                v-if="kirimptsp"
                icon="el-icon-upload2"
              >Kirim Pengajuan Permohonan</el-button>
            </div>
            <!-- <div class="mg-t-30 pd-t-20 pd-30 bd">
              <span class="tx-1">*) Formulir Harus Di isi</span>
              <div class="tx-1">
                <button type="button" class="btn btn-success mg-b-5"></button> Langkah Pengajuan Permohonan Dalam Pengerjaan
              </div>
              <div class="tx-1">
                <button type="button" class="btn btn-success mg-b-5"></button> Langkah Pengajuan Permohonan Selesai
              </div>
              <div class="tx-1">
                <button type="button" class="btn btn-success"></button> Proses
              </div>
            </div>-->
          </el-card>
        </el-col>
      </el-row>
    </div>

    <el-drawer
      :title="pratinjau.title"
      :visible.sync="pratinjau.preview"
      :with-header="true"
      size="80%"
      direction="btt"
    >
      <iframe v-if="pratinjau.objectURL" :src="pratinjau.objectURL" width="100%" height="100%"></iframe>
    </el-drawer>
  </div>
</template>
<script>
import urlBase from "@/js/url";
import { required, minLength, between } from "vuelidate/lib/validators";
const form = () =>
  import(
    /* webpackChunkName: "modulForm" */ "@/js/components/roles/modul_form"
  );
export default {
  data() {
    return {
      pratinjau: {
        preview: false,
        objectURL: null,
        title: null,
      },
      page: {
        title: "DASHBOARD",
        subtitle: "DPMPTSP",
        show: true,
        isLoading: true,
      },
      steps: {
        pertama: "tx-success",
        kedua: "tx-primary",
        ketiga: "",
      },
      izin: {},
      permohonan: {
        pemohon: {
          perusahaanp_id: null,
          nama: null,
          contact: null,
          email: null,
          perusahaan_id: null,
          identitas_no: null,
          identitas_kategori: "KTP",
        },
        persyaratan: [],
      },
      queue: [],
    };
  },
  validations: {
    permohonan: {
      pemohon: {
        nama: {
          required,
        },
        email: {
          required,
        },
        contact: {
          required,
        },
        identitas_no: {
          required,
        },
      },
    },
  },
  mounted() {
    this.page.isLoading = false;
    this.$parent.justcollpasedmenu();
  },
  created() {
    this.GetPengajuan();
  },
  computed: {
    kirimptsp() {
      var terisi = 0;
      var total = 0;
      this.permohonan.persyaratan.forEach((c) => {
        if (c.status == "uploaded") {
          terisi = terisi + 1;
        }
        total = total + 1;
      });
      if (terisi == total) {
        this.steps.kedua = "tx-success";
        this.steps.ketiga = "tx-primary";
        return true;
      } else {
        this.steps.kedua = "tx-primary";
        this.steps.ketiga = "";
        return false;
      }
    },
    uploadedCek() {
      var terisi = 0;
      var total = 0;
      this.permohonan.persyaratan.forEach((c) => {
        if (c.status != null) {
          terisi = terisi + 1;
        }
        total = total + 1;
      });
      if (terisi == total) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    checkPersyaratanUpload() {
      this.permohonan.persyaratan.forEach((e) => {
        if (e.file != null) {
          e.classBind = "";
        } else {
          e.classBind = "errorUpload";
        }
      });
    },
    onFilesChange(event, r) {
      this.queue.push(r);
      let fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = (e) => {
        this.permohonan.persyaratan[r].file = e.target.result;
        this.permohonan.persyaratan[r].ionClass = true;
        this.permohonan.persyaratan[r].classBind = "";

        this.permohonan.persyaratan[r].upload = true;
      };
    },
    GetPengajuan() {
      this.axios
        .post(urlBase.web + "/pemohon", {
          type: "pengajuanById",
          id: this.$route.params.id,
        })
        .then((r) => (this.permohonan = r.data));
    },
    checkUpload() {
      let que = this.queue;
      let length = this.queue.length;
      // console.log(que.length)
      if (length > 0) {
        this.UploadFIle(que[0]);
      } else {
        this.checkPersyaratanUpload();
      }
    },
    UploadFIle(i) {
      this.permohonan.persyaratan[i].progress = true;
      this.axios
        .post(urlBase.web + "/pemohon", {
          type: "uploadFile",
          persyaratan: this.permohonan.persyaratan[i],
          permohonanCode: this.permohonan.permohonan_code,
          permohonan_id: this.permohonan.permohonan_id,
          perusahaan: this.permohonan.perusahaan,
        })
        .then((r) => {
          this.$delete(this.queue, 0),
            this.checkUpload(),
            (this.permohonan.persyaratan[i].progress = false);
          this.permohonan.persyaratan[i].upload = false;
          this.permohonan.persyaratan[i].pratinjau = true;
          this.permohonan.persyaratan[i].file = r.data.file;
          this.permohonan.persyaratan[i].status = r.data.status;
        });
    },

    DeleteFIle(i) {
      this.permohonan.persyaratan[i].progress = true;
      this.axios
        .post(urlBase.web + "/pemohon", {
          type: "deleteFile",
          persyaratan: this.permohonan.persyaratan[i],
          permohonanCode: this.permohonan.permohonan_code,
          permohonan_id: this.permohonan.permohonan_id,
          perusahaan: this.permohonan.perusahaan,
        })
        .then((r) => {
          this.permohonan.persyaratan[i].progress = false;
          this.permohonan.persyaratan[i].pratinjau = false;
          this.permohonan.persyaratan[i].ionClass = false;
          this.permohonan.persyaratan[i].file = r.data.file;
          this.permohonan.persyaratan[i].status = r.data.status;
        });
    },

    OpenPratinjau(i) {
      this.pratinjau.preview = true;
      this.pratinjau.title = this.permohonan.persyaratan[i].persyaratan;

      this.pratinjau.objectURL =
        urlBase.assets +
        "/" +
        this.permohonan.perusahaan.npwp +
        "/" +
        this.permohonan.permohonan_code +
        "/persyaratan/" +
        this.permohonan.persyaratan[i].file;
    },

    kirimPengajuan() {
      this.$confirm("Kirim Permohonan ?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "info",
      })
        .then(() => {
          this.axios
            .post(urlBase.web + "/pemohon", {
              type: "kirimtoptsp",
              permohonan_id: this.permohonan.permohonan_id,
            })
            .then(
              (r) =>
                this.$notify({
                  title: "Success",
                  message: "File Berhasil Di kirim",
                  type: "success",
                }),
              this.$router.push({
                name: "pemohon-dashboard",
              })
            );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Pengajuan di batalkan",
          });
        });
    },
  },
};
</script>
<style>
.wd-20 {
  width: 40px;
}
.wd-40 {
  width: 80px;
}
.wd-100px {
  width: 100px;
}
tr.errorUpload td {
  background-color: #d7574a;
  color: white;
}
.inputWrapper {
  height: 32px;
  width: 64px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  /*Using a background color, but you can use a background image to represent a button*/
  background-color: #ddf;
}
.fileInput {
  cursor: pointer;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  /*This makes the button huge. If you want a bigger button, increase the font size*/
  font-size: 50px;
  /*Opacity settings for all browsers*/
  opacity: 0;
  -moz-opacity: 0;
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
}

input[type="file"] {
  display: none;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}
</style>

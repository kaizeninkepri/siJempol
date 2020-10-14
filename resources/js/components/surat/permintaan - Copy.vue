<template>
  <div class="br-pagebody" v-if="permission">
    <!-- br-pageheader -->
    <div class="pd-x-20 pd-sm-x-30 pd-t-20 pd-sm-t-30">
      <div class="d-flex align-items-center justify-content-between">
        <div v-if="user.role && user.role_id == '2'">
          <h4 class="tx-gray-800 mg-b-5 tx-bold">PENGIRIMAN PERMINTAAN SURAT TELAAH</h4>
          <p class="mg-b-0">{{user.role.role}}</p>
        </div>
        <div v-if="user.role && user.role_id == '4'">
          <h4 class="tx-gray-800 mg-b-5 tx-bold">PENGIRIMAN SURAT REKOMENDASI</h4>
          <p class="mg-b-0">{{user.role.role}}</p>
        </div>
        <div class="wd-230 tx-right">
          <router-link :to="{name : 'bo-dashboard'}" v-if="user.role_id == 2">
            <el-button type="primary">Dashbord</el-button>
          </router-link>
          <router-link :to="{name : 'opd-dashboard'}" v-if="user.role_id == 4">
            <el-button type="primary">Dashbord</el-button>
          </router-link>
        </div>
      </div>

      <el-row class="mg-t-20 pd-t-20">
        <el-card
          v-loading="page.isLoading"
          style="border-radius: 5px; min-height:300px"
          class="mg-t-10 pd-t-10"
          :body-style="{ padding: '0px' }"
        >
          <div slot="header" class="clearfix">
            <!-- <el-button type="primary" icon="el-icon-edit" round>Tulis Pesan</el-button> -->

            <el-button style="float: right; padding: 3px 0" type="text">
              <span
                v-if="permohonan.perusahaan"
                class="tx-20 tx-bold"
              >{{permohonan.perusahaan.fullname.toUpperCase()}}</span>
            </el-button>
          </div>
          <el-row>
            <el-col :md="8">
              <div class="pd-30 d-flex align-items-center bd-r bd-3 bd-primary">
                <ion-icon name="layers-outline" class="tx-50 tx-primary"></ion-icon>
                <div class="mg-l-20">
                  <p
                    class="tx-24 tx-lato tx-bold mg-b-2 lh-1"
                    v-if="permohonan.izin"
                  >{{permohonan.izin.nama_izin}}</p>
                  <span
                    class="tx-11 tx-roboto tx-primary"
                    v-if="permohonan.opd"
                  >Dinas {{permohonan.opd.opd}}</span>
                </div>
              </div>
            </el-col>
            <el-col :md="16" style="background:#f9f9f9; min-height:300px;">
              <center class="pd-t-50" v-if="!permohonan.suratpermintaan">
                <h1>Surat Belum Di Kirim</h1>
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  round
                  v-if="JSON.parse(permission.create)"
                  @click="openDrawer()"
                >Tulis Pesan</el-button>
              </center>
              <div
                class="d-flex align-items-center justify-content-between pd-20"
                v-if="permohonan.suratpermintaan"
              >
                <div v-if="permohonan.suratpermintaan">
                  <h6
                    class="tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1"
                  >Nomor &nbsp;&nbsp;: {{permohonan.suratpermintaan.nomor}}</h6>
                  <p
                    class="mg-b-10 tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1"
                  >Perihal : {{permohonan.suratpermintaan.perihal}}</p>
                  <el-button
                    type="primary"
                    size="mini"
                    class="pd-t-10"
                    icon="el-icon-view"
                    @click="pratinjauBerkasPermintaan()"
                    v-if="JSON.parse(permission.create)"
                  >Berkas Surat Permintaan</el-button>
                  <router-link
                    :to="{name : 'bo-permohonan-detail', params:{id : this.permohonan.permohonan_id}}"
                  >
                    <span class="mg-l-10">
                      <el-button type="text">Berkas persyaratan</el-button>
                      <i class="icon ion-more tx-18 lh-0"></i>
                    </span>
                  </router-link>
                </div>
                <div class="wd-230">
                  <p
                    class="mg-b-0 tx-8 tx-primary tx-uppercase tx-semibold tx-spacing-1"
                  >Tanggal Kirim</p>
                  <p class="mg-b-0 tx-15 tx-uppercase tx-inverse tx-semibold tx-spacing-1">
                    {{permohonan.suratpermintaan.created_at}}
                    <el-button
                      type="text"
                      size="mini"
                      class="pd-t-10"
                      icon="el-icon-info"
                      @click="openSuratTrack()"
                    ></el-button>
                  </p>
                </div>
              </div>
              <el-divider
                content-position="right"
                v-if="permohonan.suratpermintaan"
              >Balasan Surat {{permohonan.suratpermintaan.perihal}}</el-divider>
              <center class="pd-t-50" v-if="JSON.parse(permission.update)">
                <h1>Surat Rekomendasi Teknis Belum Di Kirim</h1>
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  round
                  v-if="JSON.parse(permission.update)"
                  @click="openDrawer()"
                >Tulis Pesan</el-button>
              </center>
              <br />
              <br />
            </el-col>
          </el-row>
        </el-card>
      </el-row>
    </div>

    <!-- BASIC MODAL -->
    <div id="modalShow" class="modal zoomIn">
      <div class="modal-dialog modal-lg modal-dialog-vertical-center" role="document">
        <div class="modal-content bd-0 tx-14">
          <div class="modal-header pd-y-20 pd-x-25">
            <h6 class="tx-14 mg-b-0 tx-uppercase tx-inverse tx-bold">Informasi Surat</h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body pd-25">
            <div class="row">
              <div class="col-md-12">
                <div
                  class="d-flex align-items-center justify-content-between mg-b-5"
                  v-for="(petugas, index) in petugas"
                  :key="index"
                >
                  <div>
                    <p class="tx-gray-800 tx-12 mg-b-2 tx-bold">{{petugas.kategori.toUpperCase()}}</p>
                    <p class="tx-gray-800 tx-10 mg-b-0">{{petugas.created_at}}</p>
                  </div>
                  <div class="wd-230 tx-right">
                    <el-button type="text">{{petugas.petugas.name.toUpperCase()}}</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary tx-11 tx-uppercase pd-y-12 pd-x-25 tx-mont tx-medium"
              data-dismiss="modal"
            >Tutup</button>
          </div>
        </div>
      </div>
      <!-- modal-dialog -->
    </div>
    <!-- modal -->
    <!-- d-flex -->
    <el-drawer
      title="Tulis Pesan Pengiriman Permintaan Surat Telaah"
      size="70%"
      :visible.sync="drawer.show"
      direction="ttb"
      :before-close="handleClose"
    >
      <el-row
        :gutter="20"
        class="pd-20"
        v-loading="pratinjau.isLoading"
        element-loading-text="Uploading & kirim Surat Permintaan..."
      >
        <el-col :md="4">
          <div class="form-group">
            <label class="form-control-label">
              Nomor Surat:
              <span class="tx-danger">*</span>
            </label>
            <input
              v-model="$v.permintaan.nomor.$model"
              class="form-control"
              :class="{ 'is-invalid': $v.permintaan.nomor.$error }"
              type="text"
              placeholder="Ketik Nomor Surat"
            />
          </div>
        </el-col>
        <el-col :md="7">
          <div class="form-group">
            <label class="form-control-label">
              Perihal:
              <span class="tx-danger">*</span>
            </label>
            <input
              v-model="$v.permintaan.perihal.$model"
              class="form-control"
              :class="{ 'is-invalid': $v.permintaan.perihal.$error }"
              type="text"
              placeholder="ketik Perihal Surat"
            />
          </div>
        </el-col>

        <el-col :md="4" v-if="user.role_id == '4'">
          <div class="form-group">
            <label class="form-control-label">
              Kategori Balasan Surat:
              <span class="tx-danger">*</span>
            </label>
            <select
              v-model="$v.permintaan.status.$model"
              class="form-control"
              :class="{ 'is-invalid': $v.permintaan.status.$error }"
              type="text"
              placeholder="Ketik Nomor Surat"
              v-on:input="$v.permintaan.status.$touch"
            >
              <option value label="Pilih Kategori">pilih Kategori</option>
              <option value="terima">Terima</option>
              <option value="tolak">Tolak</option>
            </select>
          </div>
        </el-col>
        <el-col :md="4">
          <div class="form-group">
            <label class="form-control-label" v-loading="pratinjau.isLoading">
              Unggah Surat Permintaan:
              <span class="tx-danger">*</span>
            </label>
            <label for="permintaan" class="custom-file-upload">
              <i class="fa fa-cloud-upload"></i> Unggah Berkas
            </label>
            <input id="permintaan" type="file" @change="onFilesChange($event)" />
            <el-button @click="drawer.innerDrawer = true" v-if="pratinjau.objectURL">Pratinjau</el-button>
          </div>
        </el-col>
        <el-col :md="24">
          <div class="form-group">
            <el-button type="primary" @click="submit()">Kirim Surat</el-button>
          </div>
        </el-col>
      </el-row>

      <el-drawer
        title="File Surat Permintaan Surat Telaah"
        :append-to-body="true"
        size="100%"
        :visible.sync="drawer.innerDrawer"
      >
        <embed :src="pratinjau.objectURL" />
      </el-drawer>
    </el-drawer>
    <el-drawer
      :title="drawer.title"
      :append-to-body="true"
      size="100%"
      :before-close="closeDrawer"
      :visible.sync="drawer.pratinjauSurat"
    >
      <embed :src="pratinjau.objectURL" />
    </el-drawer>
    <!-- br-pagebody -->
  </div>
  <!-- br-mainpanel -->
</template>

<script>
import urlBase from "@/js/url";
import { required, minLength, between } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      page: {
        isLoading: true,
      },
      permohonan: {},
      drawer: {
        isLoading: false,
        show: false,
        innerDrawer: false,
        pratinjauSurat: false,
      },
      petugas: [],
      permintaan: {
        surat_permintaan_id: null,
        nomor: null,
        opd_id: null,
        perihal: null,
        file: null,
        user_id: null,
        status: null,
        permohonan_id: this.$route.params.id,
        kategori: "1",
      },
      role_id: null,
      pratinjau: {
        objectURL: null,
        isLoading: false,
        progressBar: 0,
        title: null,
      },
    };
  },
  created() {
    this.getPermohonan();
    this.getsuratpengurusById();
  },
  validations: {
    permintaan: {
      nomor: {
        required,
      },
      perihal: {
        required,
      },
      status: {
        required,
      },
      file: {
        required,
      },
    },
  },
  computed: {
    user() {
      var a = this.$store.state.StoreUser.user;
      if (a.role_id == "4") {
        this.permintaan.kategori = "2";
      } else if (a.role_id == "2") {
        this.permintaan.status = "terkirim";
        this.permintaan.kategori = "1";
      }
      return a;
    },
    permission() {
      return this.$store.getters["StoreUser/gtrspermissionActive"]("15");
    },
  },
  mounted() {
    this.$parent.justcollpasedmenu();
  },
  methods: {
    getPermohonan() {
      this.axios
        .post(urlBase.web + "/perizinan/permohonan", {
          type: "dataById",
          id: this.$route.params.id,
        })
        .then((r) => {
          (this.permohonan = r.data), (this.page.isLoading = false);
        });
    },
    getsuratpengurusById() {
      this.axios
        .post(urlBase.web + "/surat", {
          type: "getsuratpengurusById",
          id: this.$route.params.id,
        })
        .then((r) => {
          this.petugas = r.data;
        });
    },
    openDrawer() {
      this.drawer.show = true;
    },
    handleClose(done) {
      this.$confirm(
        "Yakin untuk Keluar, jika Ya data yang telah di Upload Akan Hilang?"
      )
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    onFilesChange(event) {
      const file = event.target.files[0];

      if (file.size > 2097152) {
        this.$message.error("File Upload terlalu besar, Maksimal 2 MB");
        return;
      }
      this.pratinjau.isLoading = true;
      this.pratinjau.objectURL = URL.createObjectURL(file);
      let fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = (e) => {
        this.permintaan.file = e.target.result;
        this.pratinjau.isLoading = false;
      };
    },
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.pratinjau.isLoading = true;
        this.$Progress.start();
        this.axios
          .post(urlBase.web + "/surat", {
            type: "pengirimanSuratTelaah",
            data: this.permintaan,
          })
          .then(
            (r) => {
              this.pratinjau.isLoading = false;
              this.$Progress.finish();
              this.drawer.show = false;
              this.pratinjau.objectURL = null;
              this.permintaan = {
                surat_permintaan_id: null,
                nomor: null,
                opd_id: null,
                perihal: null,
                file: null,
                user_id: null,
                status: "terkirim",
                permohonan_id: this.$route.params.id,
              };

              this.$nextTick(() => {
                this.$v.$reset();
              });
            },
            (response) => {
              this.$Progress.fail();
            }
          );
      }
    },
    pratinjauBerkasPermintaan() {
      this.pratinjau.objectURL =
        urlBase.assets +
        "/" +
        this.permohonan.perusahaan.npwp +
        "/" +
        this.permohonan.permohonan_code +
        "/surat/" +
        this.permohonan.suratpermintaan.file;
      this.drawer.title =
        "Surat Permintaan Telaah " +
        this.permohonan.perusahaan.fullname +
        "  -  " +
        this.permohonan.izin.nama_izin +
        "";
      this.drawer.pratinjauSurat = true;
    },
    closeDrawer(done) {
      this.pratinjau.objectURL = null;
      done();
    },
    openSuratTrack() {
      $("#modalShow").modal("show");
    },
  },
};
</script>
<style>
.is-invalid {
  background: #fdd;
}
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
  background: #1479ff;
  color: white;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}
object,
iframe {
  border: 3px solid #cecece;
  background: #e9e9e9;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
embed {
  border: 3px solid #cecece;
  background: #e9e9e9;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>

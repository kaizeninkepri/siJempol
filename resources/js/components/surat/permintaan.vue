<template>
  <div class="br-pagebody">
    <!-- br-pageheader -->
    <div class="pd-x-20 pd-sm-x-30 pd-t-20 pd-sm-t-30">
      <h4 class="tx-gray-800 mg-b-5 tx-bold">PENGIRIMAN PERMINTAAN SURAT TELAAH</h4>
      <p class="mg-b-0">Back Office</p>

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
              <center class="pd-t-50">
                <h1>Surat Belum Di Kirim</h1>
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  round
                  @click="openDrawer()"
                >Tulis Pesan</el-button>
              </center>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
    </div>
    <!-- d-flex -->
    <el-drawer
      title="Tulis Pesan Pengiriman Permintaan Surat Telaah"
      size="70%"
      :visible.sync="drawer.show"
      direction="ttb"
      :before-close="handleClose"
    >
      <el-row :gutter="20" class="pd-20">
        <el-col :md="4">
          <div class="form-group">
            <label class="form-control-label">
              Nomor Surat:
              <span class="tx-danger">*</span>
            </label>
            <input
              v-model="permintaan.nomor"
              class="form-control"
              type="text"
              name="firstname"
              value="John Paul"
              placeholder="Enter firstname"
            />
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
      </el-row>
      <el-drawer
        title="I'm inner Drawer"
        :append-to-body="true"
        size="100%"
        :visible.sync="drawer.innerDrawer"
      >
        <iframe :src="pratinjau.objectURL"></iframe>
      </el-drawer>
    </el-drawer>
    <!-- br-pagebody -->
  </div>
  <!-- br-mainpanel -->
</template>

<script>
import urlBase from "@/js/url";
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
      },
      permintaan: {
        surat_permintaan_id: null,
        nomor: null,
        opd_id: null,
        perihal: null,
        file: null,
        user_id: null,
      },
      pratinjau: {
        objectURL: null,
        isLoading: false,
      },
    };
  },
  created() {
    this.getPermohonan();
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
      this.pratinjau.isLoading = true;

      const file = event.target.files[0];
      this.pratinjau.objectURL = URL.createObjectURL(file);
      let fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = (e) => {
        this.permintaan.file = e.target.result;
        this.pratinjau.isLoading = false;
      };
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
</style>

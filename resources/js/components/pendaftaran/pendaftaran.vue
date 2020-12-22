<template>
  <div
    class="align-items-center justify-content-center pd-t-50 ht-100v pd-l-100 pd-r-100"
    style="background: #d0dcec"
  >
    <el-card
      style="border-radius: 5px; border: none"
      :body-style="{ padding: '0px' }"
    >
      <el-row>
        <el-col :md="20" style="padding: 20px">
          <h1 class="tx-roboto tx-bold tx-20" style="color: #48a5ea">
            IDENTITAS PERUSAHAAN
          </h1>
          <div class="mg-t-50">
            <div class="row">
              <div class="col-lg-3">
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    Nomor Pokok Wajib Pajak:
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    @blur="CheckNpwp()"
                    :readonly="loading.submit"
                    v-model.trim="$v.perusahaan.npwp.$model"
                    class="form-control"
                    :class="{ 'is-invalid': $v.perusahaan.npwp.$error }"
                    type="text"
                    v-mask="'##.###.###.#-###.###'"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2">
                <div class="form-group">
                  <label class="form-control-label tx-gray-600">
                    Kategori:
                    <span class="tx-danger">*</span>
                  </label>
                  <select
                    class="form-control"
                    :readonly="loading.submit"
                    v-model.trim="$v.perusahaan.kategori.$model"
                    :class="{ 'is-invalid': $v.perusahaan.kategori.$error }"
                    @change="kategoriAction()"
                  >
                    <option value="Badan Usaha">Badan Usaha</option>
                    <option value="perorangan">Perorangan</option>
                    <option value="penelitian">penelitian</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2" v-if="jenisshow">
                <div class="form-group">
                  <label class="form-control-label tx-gray-600">
                    Jenis Perusahaan:
                    <span class="tx-danger">*</span>
                  </label>
                  <select
                    :readonly="loading.submit"
                    class="form-control"
                    v-model.trim="$v.perusahaan.jenis.$model"
                    :class="{ 'is-invalid': $v.perusahaan.jenis.$error }"
                  >
                    <option v-for="(i,Index) in KategoriBadanUsaha" :key="Index" :value="i.nama">{{i.nama}}</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    Nama:
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    :readonly="loading.submit"
                    class="form-control"
                    type="text"
                    v-model.trim="$v.perusahaan.nama.$model"
                    :class="{ 'is-invalid': $v.perusahaan.nama.$error }"
                  />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    email:
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    :readonly="loading.submit"
                    class="form-control"
                    type="text"
                    v-model.trim="$v.perusahaan.email.$model"
                    :class="{ 'is-invalid': $v.perusahaan.email.$error }"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    Provinsi :
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    :readonly="loading.submit"
                    class="form-control"
                    type="text"
                    v-model.trim="$v.perusahaan.provinsi.$model"
                    :class="{ 'is-invalid': $v.perusahaan.provinsi.$error }"
                  />
                </div>
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    Kota / Kabupaten:
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    :readonly="loading.submit"
                    v-model.trim="$v.perusahaan.kota.$model"
                    :class="{ 'is-invalid': $v.perusahaan.kota.$error }"
                  />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    Kode Pos :
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    :readonly="loading.submit"
                    class="form-control"
                    type="text"
                    v-model.trim="$v.perusahaan.kode_pos.$model"
                    :class="{ 'is-invalid': $v.perusahaan.kode_pos.$error }"
                  />
                </div>
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    Telp / Hp:
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    :readonly="loading.submit"
                    class="form-control"
                    type="text"
                    v-model.trim="$v.perusahaan.contact.$model"
                    :class="{ 'is-invalid': $v.perusahaan.contact.$error }"
                  />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label class="form-control-label tx-gray-600">
                    Alamat:
                    <span class="tx-danger">*</span>
                  </label>
                  <textarea
                    :readonly="loading.submit"
                    v-model.trim="$v.perusahaan.alamat.$model"
                    :class="{ 'is-invalid': $v.perusahaan.alamat.$error }"
                    class="form-control"
                    id=""
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
            <el-divider content-position="left">Identias Akun</el-divider>
            <div class="row">
              <div class="col-lg-3">
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    Username :
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    readonly
                    v-model.trim="$v.user.email.$model"
                    :class="{ 'is-invalid': $v.user.email.$error }"
                  />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    password:
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    :readonly="loading.submit"
                    v-model.trim="$v.user.password.$model"
                    :class="{ 'is-invalid': $v.user.password.$error }"
                  />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    password:

                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    :readonly="loading.submit"
                    class="form-control"
                    type="text"
                    v-model="$v.user.repeatPassword.$model"
                    :class="{ 'is-invalid': $v.user.repeatPassword.$error }"
                  />
                </div>
              </div>
            </div>
            <el-divider content-position="left">Kelengkapan Berkas</el-divider>
            <el-row :gutter="10">
              <el-col :md="6" v-for="(i, Index) in upload" :key="Index">
                <label :for="i.id" class="custom-file-upload" :class="i.css">
                  <i class="fa fa-cloud-upload"></i>
                  <p v-if="!i.files">{{ i.name }}</p>
                  <!-- <el-progress
                    type="circle"
                    :percentage="progressBar"
                    :color="colors"
                  ></el-progress> -->
                  <div
                    v-if="i.files"
                    class=""
                    style="
                      background: #c0c8dd;
                      position: relative;
                      color: #333;
                      bottom: -25px;
                    "
                  >
                    <el-row>
                      <el-col
                        :md="20"
                        class="tx-left tx-bold"
                        style="padding: 15px 10px 10px 10px"
                        >{{ i.name }}</el-col
                      >
                      <el-col :md="4" style="padding: 5px">
                        <el-progress
                          :width="35"
                          type="circle"
                          :percentage="i.progressBar"
                          :color="colors"
                        ></el-progress>
                      </el-col>
                    </el-row>
                  </div>
                </label>
                <input
                  type="file"
                  :id="i.id"
                  @change="changeFile(Index, $event)"
                />
              </el-col>
            </el-row>
            <el-divider content-position="left"></el-divider>
            <el-button type="primary" @click="daftar" :loading="loading.submit"
              >Daftar</el-button
            >
          </div>
        </el-col>
        <el-col
          :md="4"
          style="background: #48a5ea; padding: 20px; min-height: 835px"
          class="hidden-lg-down"
        >
          <div class="block">
            <center>
              <el-image
                :src="url.assets + '/images/logo.png'"
                style="width: 100px; height: auto"
              >
                <div slot="placeholder" class="image-slot">
                  Loading<span class="dot">...</span>
                </div>
              </el-image>
            </center>
            <center>
              <span class="tx-center tx-bold tx-white tx-roboto"
                >Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu Provinsi
                Kepulauan Riau</span
              >
            </center>
          </div>
          <el-divider content-position="left"></el-divider>
          <el-card
            style="background: #f6cfcf; border-color: #dc3545"
            v-if="$v.$error || $v.$anyError"
          >
            Data Field Harus Terisi
            <p v-if="!$v.perusahaan.npwp.minLength">15 Digit NPWP</p>
            <span v-if="$v.user.repeatPassword.$error">
              Password Tidak Sama</span
            >
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import url from "@/js/url";
import { required, minLength, between, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      loading: {
        submit: false,
      },
      KategoriBadanUsaha :[
        {nama  : "PT"},
        {nama  : "CV"},
        {nama  : "FIRMA"},
        {nama  : "PERDDATA"},
        {nama  : "KOMANDITER"},
        {nama  : "NEGARA UMUM"},
        {nama  : "YAYASAN"},
        {nama  : "KELOMPOK MASYARAKAT"},
      ],
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#6f7ad3", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#5cb87a", percentage: 100 },
      ],
      queue: [],
      url: {
        assets: url.publicData,
      },
      jenisshow : true,
      perusahaan: {
        npwp: null,
        perusahaan_code: null,
        kategori: null,
        jenis: null,
        nama: null,
        alamat: null,
        email: null,
        contact: null,
        create_on: "mandiri",
        provinsi: null,
        kota: null,
        kode_pos: null,
      },
      user: {
        email: null,
        password: null,
        is_active: false,
        role_id: 5,
        repeatPassword: null,
      },
      upload: [
        {
          name: "Nomor Pokok Wajib Pajak",
          nameFile: "Unggah Berkas NPWP",
          praname: "Unggah Berkas NPWP",
          type: null,
          size: 0,
          objectURL: null,
          id: "npwp",
          button: false,
          files: null,
          css: null,
          fileTemp: null,
          progressBar: 0,
        },
        {
          name: "NIB OSS",
          nameFile: "Unggah Berkas NIB",
          praname: "Unggah Berkas NIB",
          type: null,
          size: 0,
          objectURL: null,
          id: "nib",
          button: false,
          files: null,
          css: null,
          fileTemp: null,
          progressBar: 0,
        },
        {
          name: "Izin Usaha / KBLI",
          nameFile: "Unggah Berkas Izin Usaha / KBLI",
          praname: "Unggah Berkas Izin Usaha / KBLI",
          type: null,
          size: 0,
          objectURL: null,
          id: "kbli",
          button: false,
          files: null,
          css: null,
          fileTemp: null,
          progressBar: 0,
        },
      ],
      submitStatus: null,
    };
  },
  validations: {
    perusahaan: {
      npwp: { required, minLength: minLength(20) },
      kategori: { required },
      nama: { required },
      alamat: { required },
      email: { required },
      contact: { required },
      provinsi: { required },
      kota: { required },
      jenis: { required },
      kode_pos: { required },
    },
    user: {
      email: { required },
      password: { required },
      repeatPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  watch: {
    // whenever question changes, this function will run
    "perusahaan.email": function (oldQuestion) {
      this.user.email = oldQuestion;
    },
  },
  methods: {
    ToPenelitianForm(){
       window.location.href = url.web + '/pendaftaran/penelitian'
    },
    kategoriAction(){
      if(this.perusahaan.kategori == 'perorangan'){
        this.perusahaan.jenis = 'pt';
        this.jenisshow = false;
      }
      else if(this.perusahaan.kategori == 'penelitian'){
        this.ToPenelitianForm();
      }
      else{
        this.jenisshow = true
      }
    },
    pushToSelesai() {
      location.href =
        url.web + "/pendaftaran/selesai?npwp=" + this.perusahaan.npwp;
    },
    changeFile(i, event) {
      if (this.objectURL) {
        URL.revokeObjectURL(this.objectURL);
      }

      const file = event.target.files[0];
      if (file.size > 2097152) {
        this.$message.error("File Upload terlalu besar, Maksimal 2 MB");
        return;
      }
      this.queue.push(i);
      this.upload[i].nameFile = file.name;
      this.upload[i].type = file.type;
      this.upload[i].size = file.size;
      this.upload[i].fileTemp = file;
      this.upload[i].objectURL = URL.createObjectURL(file);
      this.upload[i].button = true;
      this.upload[i].praname = this.upload[i].nameFile.substring(0, 60) + "...";
      this.upload[i].css = "custom-file-upload-success";

      let fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = (e) => {
        this.upload[i].files = e.target.result;
      };
    },
    CheckUpload() {
      this.empty = [];
      for (var i = 0; i < this.upload.length; i++) {
        if (this.upload[i].files == null) {
          this.empty.push(i);
          this.upload[i].css = "custom-file-upload-error";
        }
        if (this.queue.length > 0) {
          this.ExecuteUpload();
        } else {
          this.loading.submit = false;
          setTimeout(this.pushToSelesai(), 20000);
        }
      }
    },
    ExecuteUpload() {
      let que = this.queue;
      let length = this.queue.length;
      // console.log(que.length)
      if (length > 0) {
        this.UploadFIle(que[0]);
      } else {
        this.CheckUpload();
      }
    },
    UploadFIle(i) {
      this.axios
        .post(
          url.web + "/master/pendaftaran",
          {
            type: "UplaodFileSingle",
            upload: this.upload[i],
            perusahaan: this.perusahaan,
          },
          {
            onUploadProgress: function (progressEvent) {
              this.upload[i].progressBar = parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              );
            }.bind(this),
          }
        )
        .then((r) => {
          this.$delete(this.queue, 0), this.ExecuteUpload();
        });
    },

    CheckNpwp() {
      this.axios
        .post(url.web + "/perizinan/perusahaan", {
          type: "dataBynpwp",
          npwp: this.perusahaan.npwp,
        })
        .then((r) => {
          console.log(r);
          r.data == ""
            ? ""
            : ((this.perusahaan = r.data),
              this.$alert(
                "Perusahaan ini Telah Melakukan Pendaftaran, Silahkan Isi Form yang telah di sediakan.",
                "Informasi",
                {
                  confirmButtonText: "OK",
                  callback: (action) => {
                    this.$message({
                      type: "info",
                      message: `action: ${action}`,
                    });
                  },
                }
              ));
        });
    },
    InsertDatabase() {
      this.loading.submit = true;
      this.axios
        .post(url.web + "/master/pendaftaran", {
          type: "daftar",
          perusahaan: this.perusahaan,
          user: this.user,
        })
        .then((r) => {
          this.CheckUpload();
        });
    },
    daftar() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        this.empty = [];
        for (var i = 0; i < this.upload.length; i++) {
          if (this.upload[i].files == null) {
            this.empty.push(i);
            this.upload[i].css = "custom-file-upload-error";
          }
        }
      } else {
        this.InsertDatabase();
      }
    },
  },
};
</script>
<style lang="css" scoped>
.form-control {
  border-radius: 6px;
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  border: 3px dashed #ccc;
  display: inline-block;
  padding: 40px 5px 5px 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  min-height: 150px;
}

.custom-file-upload-error {
  border: 3px dashed red;
}
.custom-file-upload-success {
  border: 3px dashed green;
}
</style>
  
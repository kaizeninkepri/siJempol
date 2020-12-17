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
            SURAT KETERANGAN PENELITIAN;
          </h1>
          <div class="mg-t-50">
            <div class="row">
               <div class="col-lg-2">
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    Nomor Induk Mahasiswa:
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    :readonly="loading.submit"
                    class="form-control"
                    type="text"
                    v-model.trim="$v.mahasiswa.nim.$model"
                    :class="{ 'is-invalid': $v.mahasiswa.nim.$error }"
                  />
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
                    v-model.trim="$v.mahasiswa.nama.$model"
                    :class="{ 'is-invalid': $v.mahasiswa.nama.$error }"
                  />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    universitas:
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    :readonly="loading.submit"
                    class="form-control"
                    type="text"
                    v-model.trim="$v.mahasiswa.universitas.$model"
                    :class="{ 'is-invalid': $v.mahasiswa.universitas.$error }"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    Jenjang :
                    <span class="tx-danger">*</span>
                  </label>
                  <select
                    class="form-control"
                    :readonly="loading.submit"
                    v-model.trim="$v.mahasiswa.pendidikan.$model"
                    :class="{ 'is-invalid': $v.mahasiswa.pendidikan.$error }"
                    @change="kategoriAction()"
                  >
                    <option value="Strata Satu (S-1)">Strata Satu (S-1)</option>
                    <option value="Strata Dua (S-2)">Strata Dua (S-2)</option>
                  </select>
                </div>
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    Email :
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    :readonly="loading.submit"
                    v-model.trim="$v.mahasiswa.email.$model"
                    :class="{ 'is-invalid': $v.mahasiswa.email.$error }"
                  />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group tx-gray-600">
                  <label class="form-control-label">
                    Program Studi :
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    :readonly="loading.submit"
                    v-model.trim="$v.mahasiswa.jurusan.$model"
                    :class="{ 'is-invalid': $v.mahasiswa.jurusan.$error }"
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
                    v-model.trim="$v.mahasiswa.contact.$model"
                    :class="{ 'is-invalid': $v.mahasiswa.contact.$error }"
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
                    v-model.trim="$v.mahasiswa.alamat.$model"
                    :class="{ 'is-invalid': $v.mahasiswa.alamat.$error }"
                    class="form-control"
                    id=""
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
            <el-divider content-position="left">Kelengkapan Berkas</el-divider>
            <el-row :gutter="10">
              <el-col :md="6" v-for="(i, Index) in persyaratan.persyaratan" :key="Index">
                <label :for="i.UploadAtemp.id" class="custom-file-upload" :class="i.css">
                  <i class="fa fa-cloud-upload"></i>
                  <p v-if="!i.UploadAtempfiles">{{ i.UploadAtemp.name }}</p>
                  <!-- <el-progress
                    type="circle"
                    :percentage="progressBar"
                    :color="colors"
                  ></el-progress> -->
                  <div
                    v-if="i.UploadAtemp.files"
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
                        >{{ i.UploadAtemp.name }}</el-col
                      >
                      <el-col :md="4" style="padding: 5px">
                        <el-progress
                          :width="35"
                          type="circle"
                          :percentage="i.UploadAtemp.progressBar"
                          :color="colors"
                        ></el-progress>
                      </el-col>
                    </el-row>
                  </div>
                </label>
                <input
                  type="file"
                  :id="i.UploadAtemp.id"
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
      mahasiswa : {
        nim : null,
        nama : null,
        universitas : null,
        pendidikan : null,
        jurusan : null,
        judul_teliti : null,
        contact : null,
        email : null,
        lokasi : null,
        alamat : null
      },
      persyaratan : [],
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
    mahasiswa: {
      nim: { required},
      nama: { required },
      universitas: { required },
      pendidikan: { required },
      jurusan: { required },
      judul_teliti: { required },
      contact: { required },
      email: { required },
      lokasi: { required },
      kode_pos: { required },
      alamat: { required },
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
  created(){
    this.persyaratanData(); 
  },
  methods: {
    kategoriAction(){
      if(this.perusahaan.kategori == 'perorangan'){
        this.perusahaan.jenis = 'pt';
        this.jenisshow = false;
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
      this.persyaratan.persyaratan[i].UploadAtemp.nameFile = file.name;
      this.persyaratan.persyaratan[i].UploadAtemp.type = file.type;
      this.persyaratan.persyaratan[i].UploadAtemp.size = file.size;
      this.persyaratan.persyaratan[i].UploadAtemp.fileTemp = file;
      this.persyaratan.persyaratan[i].UploadAtemp.objectURL = URL.createObjectURL(file);
      this.persyaratan.persyaratan[i].UploadAtemp.button = true;
      this.persyaratan.persyaratan[i].UploadAtemp.praname = this.persyaratan.persyaratan[i].UploadAtemp.nameFile.substring(0, 60) + "...";
      this.persyaratan.persyaratan[i].UploadAtemp.css = "custom-file-upload-success";

      let fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = (e) => {
        this.persyaratan.persyaratan[i].UploadAtemp.files = e.target.result;
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

    persyaratanData() {
      this.axios
        .get(url.web + "/pendaftaran/penelitian/penelitianById")
        .then((r) => {
          this.persyaratan = r.data
          console.log(r.data)
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
  min-height: 180px;
}

.custom-file-upload-error {
  border: 3px dashed red;
}
.custom-file-upload-success {
  border: 3px dashed green;
}
</style>
  
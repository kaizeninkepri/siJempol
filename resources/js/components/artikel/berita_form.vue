<template>
  <div class v-loading="isLoading" element-loading-text="Loading...">
    <div class="row">
      <div class="col-md-4">
        <label class="custom-file-upload" for="GambarINDex">
          <img :src="form.gambar" v-if="form.gambar" class="img-previewUpload" />
          <h1 style="margin-top:80px" v-if="!form.gambar">Unggah</h1>
        </label>
        <input
          type="file"
          id="GambarINDex"
          ref="file"
          accept="image/*"
          @change="handleFileUpload($event)"
        />
        <div class="form-group">
          <label class="form-control-label">
            Keterangan Gambar:
            <span class="tx-danger">*</span>
          </label>
          <input
            class="form-control"
            :class="{ 'is-invalid': $v.form.ket_gambar.$error }"
            type="text"
            v-model.trim="$v.form.ket_gambar.$model"
            placeholder="Keterangan Gambar"
          />
        </div>
      </div>
      <div class="col-md-8">
        <el-date-picker
          :disabled="disabled"
          v-model="form.tgl_publish"
          type="date"
          value-format="dd-MM-yyyy"
          format="dd-MM-yyyy"
          placeholder="Pick a day"
        ></el-date-picker>
        <div class="row mg-t-20">
          <div class="col-lg-4">
            <div class="form-group">
              <label class="form-control-label">
                Judul:
                <span class="tx-danger">*</span>
              </label>
              <input
                class="form-control"
                :class="{ 'is-invalid': $v.form.judul.$error }"
                type="text"
                v-model.trim="$v.form.judul.$model"
                placeholder="Judul Berita"
              />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group">
              <label class="form-control-label">
                Judul Highlight :
                <span class="tx-danger">*</span>
              </label>
              <input
                class="form-control"
                :class="{ 'is-invalid': $v.form.judul_highlight.$error }"
                type="text"
                v-model.trim="$v.form.judul_highlight.$model"
                placeholder="Judul Higlight"
              />
            </div>
          </div>
          <div class="col-lg-2">
            <div class="form-group">
              <label class="form-control-label">
                Kategori :
                <span class="tx-danger">*</span>
              </label>
              <select
                @change="GetSubKategori()"
                class="form-control"
                :class="{ 'is-invalid': $v.form.id_kategori.$error }"
                v-model.trim="$v.form.id_kategori.$model"
                placeholder="Kategori"
              >
                <option
                  v-for="(k,index) in kategori"
                  :key="index"
                  :value="k.id_kategori"
                >{{k.nama_kategori}}</option>
              </select>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="form-group">
              <label class="form-control-label">
                SubKategori :
                <span class="tx-danger">*</span>
              </label>
              <select
                class="form-control"
                :class="{ 'is-invalid': $v.form.id_subkategori.$error }"
                v-model.trim="$v.form.id_subkategori.$model"
                placeholder="Sub Kategori"
              >
                <option
                  v-for="(k,index) in subKategori"
                  :key="index"
                  :value="k.id_subkategori"
                >{{k.nama_subkategori}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="form-group">
              <label class="form-control-label">
                #hastag:
                <span class="tx-danger">*</span>
              </label>
              <div class="col-md-12 row">
                <el-select
                  style="width:100%"
                  v-model="form.tag"
                  multiple
                  filterable
                  allow-create
                  default-first-option
                  placeholder="#hastag"
                >
                  <el-option v-for="item in hastag" :key="item" :label="item" :value="item"></el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="mg-md-t-40">
              <el-checkbox v-model="form.redaksi">Redaksi</el-checkbox>
              <el-checkbox v-model="form.headline">headline</el-checkbox>
              <el-checkbox v-model="form.publish">publish</el-checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <wysiwyg v-model="form.isi_berita" />
      </div>
    </div>
    <hr />
    <div class="form-layout-footer">
      <button class="btn btn-info" @click="ToDatabase()">Simpan</button>
    </div>
  </div>
</template>
<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import urlBase from "@/js/url";

export default {
  data() {
    return {
      page: {
        submitType: "store",
        notification: "Data Berhasil Di Simpan",
      },
      isLoading: false,
      form: {
        id_berita: null,
        id_kategori: null,
        id_subkategori: 0,
        id_user: null,
        judul: null,
        judul_highlight: null,
        isi_berita: null,
        tgl_posting: null,
        tgl_publish: moment().format("DD-MM-YYYY"),
        jam: null,
        gambar: null,
        ket_gambar: null,
        dibaca: null,
        tag: [],
        headline: null,
        redaksi: null,
        aktif: null,
        publish: null,
        status: null,
      },
      select: {
        kategori: false,
        subKategori: true,
      },
      image: {
        showPreview: false,
        imagePreview: "",
      },
      kategori: [],
      subKategori: [],
      hastag: [],
      disabled: false,
      objectURL: null,
      accepts: ["image/*"].join(","),
    };
  },
  validations: {
    form: {
      id_kategori: {
        required,
      },
      id_subkategori: 0,
      judul: {
        required,
      },
      judul_highlight: {
        required,
      },
      isi_berita: {
        required,
      },
      ket_gambar: {
        required,
      },
    },
  },
  created() {
    this.GetKategori();
    this.GetHastag();
    this.GetSubKategori();
  },
  mounted() {
    this.$parent.page.title = "Penambahan Data inilahnews";
    this.$parent.page.show = false;
    if (this.$route.query.v) {
      this.getData(this.$route.query.v);
      this.page.submitType = "update";
    }
    this.getSelect();
  },
  methods: {
    GetKategori() {
      this.axios
        .post(urlBase.web + "/MasterKategori", {
          type: "GetByAktif",
        })
        .then((r) => (this.kategori = r.data));
    },
    GetHastag() {
      this.axios
        .post(urlBase.web + "/Masterberita", {
          type: "HastagFull",
        })
        .then((r) => ((this.hastag = r.data), console.log(this.hastag)));
    },
    GetSubKategori() {
      this.axios
        .post(urlBase.web + "/MasterSubKategori", {
          type: "GetByKategori",
          id: this.form.id_kategori,
        })
        .then(
          (r) => (
            (this.subKategori = r.data),
            this.subKategori.length === 0
              ? (this.select.subKategori = true)
              : (this.select.subKategori = false),
            (this.form.id_subkategori = 0)
          )
        );
    },
    handleFileUpload(event) {
      if (this.objectURL) {
        URL.revokeObjectURL(this.objectURL);
      }

      const file = event.target.files[0];

      let fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = (e) => {
        this.form.gambar = e.target.result;
      };
    },
    typeOnChange() {
      if (this.modul.type == "child") {
        this.parentBoolean = true;
      } else {
        this.parentBoolean = false;
      }
    },
    ToDatabase() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.isLoading = true;
        this.axios
          .post(urlBase.web + "/Masterberita", {
            type: "insert",
            form: this.form,
          })
          .then((r) => {
            this.$parent.page.show = true;
            this.$parent.refresh();
            this.$router.push({
              name: "artikel-berita",
            });

            this.$notify({
              title: "Info",
              message: this.page.notification,
              type: "success",
            });
          });
      }
    },
    getData(id) {
      this.axios
        .post(urlBase.web + "/roles/modul", {
          type: "dataById",
          data: id,
        })
        .then((r) => (this.modul = r.data));
    },
    getSelect() {
      this.axios
        .post(urlBase.web + "/roles/modul", {
          type: "select",
        })
        .then((r) => (this.select = r.data));
    },
    toParentPage() {
      this.$v.$reset,
        this.$parent.refresh(),
        this.$router.push({
          name: "roles-modul",
        });
      this.$parent.page.show = true;
    },
  },
};
</script>
<style>
.modal-xl {
  width: 1440px !important;
}
</style>
<style>
.img-previewUpload {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.itemDS {
  top: -30px !important;
  width: 100% !important;
}
.itemWarp {
  margin-top: -40px !important;
  font-size: 9px !important;
}

input[type="file"] {
  display: none;
}
.custom-file-upload {
  display: table;
  border: 2px dashed #ccc;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  height: 220px;
}

.text-file-upload {
  display: table-cell;
  vertical-align: middle;
  padding: 10px;
  margin: auto;
}

.custom-file-upload-error {
  border: 3px dashed red;
}
.custom-file-upload-success {
  border: 3px dashed green;
}
</style>
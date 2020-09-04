<template>
  <div>
    <div class="br-pageheader pd-y-15 pd-l-20">
      <nav class="breadcrumb pd-0 mg-0 tx-12"></nav>
    </div>
    <!-- br-pageheader -->

    <div class="br-msg-header d-flex justify-content-between">
      <div class="pd-x-0 pd-t-30">
        <h4 class="tx-gray-800 mg-b-5">Pergantian Hak Akses Pengguna Jasa</h4>
        <p class="mg-b-0"></p>
      </div>
    </div>
    <div class="br-pagebody">
      <div class="br-section-wrapper">
        <div class="col-lg-3">
          <div class="form-group">
            <label class="form-control-label">
              Password Baru:
              <span class="tx-danger">*</span>
            </label>

            <input
              class="form-control"
              :class="{ 'is-invalid': $v.password.$error }"
              type="text"
              v-model.trim="$v.password.$model"
              placeholder="Ganti Password"
            />
          </div>
          <el-button type="primary" @click="gantiPassword()">simpan</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import urlBase from "@/js/url";
const form = () =>
  import(
    /* webpackChunkName: "modulForm" */ "@/js/components/roles/modul_form"
  );
export default {
  data() {
    return {
      password: null,
    };
  },
  validations: {
    password: {
      required,
    },
  },
  methods: {
    gantiPassword() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$confirm("Kirim Permohonan ?", "Warning", {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "info",
        })
          .then(() => {
            this.axios
              .post(urlBase.web + "/pemohon", {
                type: "gantipassword",
                password: this.password,
              })
              .then((r) => {
                this.$notify({
                  title: "Success",
                  message: "File Berhasil Di kirim",
                  type: "success",
                });
              });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "Pengajuan di batalkan",
            });
          });
      }
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
</style>

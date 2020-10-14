<template>
  <div class="pd-t-50 ht-100v pd-l-15 pd-r-15" style="background: #d0dcec">
    <el-row :gutter="10">
      <el-col :md="17">
        <el-card>
          <div class="d-flex align-items-center">
            <div class="block">
              <el-avatar :size="80" :src="circleUrl"></el-avatar>
            </div>
            <div class="mg-l-15">
              <div class="tx-inverse">Katherine Lumaad</div>
              <span class="tx-12">klumaad@themepixels.me</span>
            </div>
          </div>
        </el-card>

        <el-card class="mg-t-10">
          <div class="d-flex align-items-center">
            <div class="block">
              <el-avatar :size="80" :src="circleUrl"></el-avatar>
            </div>
            <div class="mg-l-15">
              <div class="tx-inverse">Katherine Lumaad</div>
              <span class="tx-12">klumaad@themepixels.me</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :md="7">
        <el-card>a</el-card>
      </el-col>
    </el-row>
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
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
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

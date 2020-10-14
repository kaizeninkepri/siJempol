<template>
  <div
    class="align-items-center justify-content-center pd-t-50 ht-100v pd-l-100 pd-r-100"
    style="background: #d0dcec"
  >
    <el-card>
      <div class="row w-100">
        <div class="col-md-8 mx-auto">
          <div class="auto-form-wrapper">
            <center class="tx-bold">
              DINAS PENANAMAN MODAL DAN PELAYANAN TERPADU SATU PINTU
              <BR /> PROVINSI KEPULAUAN RIAU
            </center>
            <el-divider>Pendaftaran Berhasil</el-divider>
            <el-row :gutter="20" type="flex" justify="center">
              <el-col :md="4">
                <el-image :src="url.web + '/public/images/email.png'">
                  <div slot="placeholder" class="image-slot">
                    Loading
                    <span class="dot">...</span>
                  </div>
                </el-image>
              </el-col>
            </el-row>
            <el-row :gutter="20" type="flex" justify="center">
              <el-col :md="18" class="text-center">
                <p>
                  Pendaftaran account anda sudah di terima, 1 step lagi untuk
                  menyelesaikannya. silahkan login dengan email yang telah di
                  isi sebelumnya
                </p>
                <a :href="url.web + '/login'" class="btn btn-primary btn-sm"
                  >Masuk Aplikasi SI-JEMPOL</a
                >
                <a
                  target="_blank"
                  :href="url.web + '/pdf/pendaftaran?npwp=' + npwp"
                  class="btn btn-success btn-sm"
                  >Cetak Tanda Daftar akun</a
                >
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import urlBase from "@/js/url";
export default {
  data() {
    return {
      npwp: this.$route.query.npwp,
      url: {
        assets: urlBase.assets,
        web: urlBase.web,
      },
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
    };
  },
  created() {
    this.CheckNpwp();
  },
  methods: {
    CheckNpwp() {
      this.axios
        .post(url.web + "/perizinan/perusahaan", {
          type: "dataBynpwp",
          npwp: this.npwp,
        })
        .then((r) => {
          this.perusahaan = r.data;
        });
    },
  },
};
</script>
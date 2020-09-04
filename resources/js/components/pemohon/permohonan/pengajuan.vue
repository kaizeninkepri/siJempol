<template>
  <div>
    <div class="br-pagebody pd-t-30">
      <el-row :gutter="10" type="flex" justify="center" class="mg-b-20 pd-b-10">
        <el-col :md="24" justify="center" style="color:#333" class="tx-bold">
          <h4 class="tx-center">PENGISIAN FORMULIR PERMOHONAN LAYANAN</h4>
          <h5 class="tx-center">{{izin.nama_izin}}</h5>
          <h5 class="tx-center" v-if="izin.opd">Sektor {{izin.opd.opd}}</h5>
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
            <el-divider content-position="left">NARAHUBUNG</el-divider>
            <div class="row mg-t-20 mg-b-20 pd-b-20">
              <div class="col-lg-3">
                <div class="form-group">
                  <label class="form-control-label">
                    Nomor Induk Kependudukan
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    class="form-control"
                    :class="{ 'is-invalid': $v.permohonan.pengurus.identitas_no.$error }"
                    type="text"
                    v-model.trim="$v.permohonan.pengurus.identitas_no.$model"
                    placeholder="NIK Pengurus Izin"
                  />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label class="form-control-label">
                    Nama
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    class="form-control"
                    :class="{ 'is-invalid': $v.permohonan.pengurus.nama.$error }"
                    type="text"
                    v-model.trim="$v.permohonan.pengurus.nama.$model"
                    placeholder="Nama Pengurus Izin"
                  />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <label class="form-control-label">
                    Hp
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    class="form-control"
                    :class="{ 'is-invalid': $v.permohonan.pengurus.contact.$error }"
                    type="text"
                    v-model.trim="$v.permohonan.pengurus.contact.$model"
                    placeholder="Hp Pengurus Izin"
                  />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label class="form-control-label">
                    Email
                    <span class="tx-danger">*</span>
                  </label>
                  <input
                    class="form-control"
                    :class="{ 'is-invalid': $v.permohonan.pengurus.email.$error }"
                    type="text"
                    v-model.trim="$v.permohonan.pengurus.email.$model"
                    placeholder="Email Pengurus Izin"
                  />
                </div>
              </div>
            </div>
            <el-divider content-position="left">KELENGKAPAN BERKAS PERSYARATAN</el-divider>
            <div class="bd bd-gray-300 rounded table-responsive mg-b-20 pd-b-20">
              <table class="table mg-b-0">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Persyaratan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(i,Index) in izin.persyaratan" :key="Index">
                    <td width="10">{{Index+1}}</td>
                    <td>{{i.persyaratan}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <el-button type="primary" size="mini" @click="toDatabase()">Proses</el-button>
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
      page: {
        title: "DASHBOARD",
        subtitle: "DPMPTSP",
        show: true,
        isLoading: true,
      },
      steps: {
        pertama: "tx-primary",
        kedua: "",
        ketiga: "",
      },
      izin: {},
      permohonan: {
        pengurus: {
          perusahaanp_id: null,
          nama: null,
          contact: null,
          email: null,
          perusahaan_id: null,
          identitas_no: null,
          identitas_kategori: "KTP",
        },
      },
    };
  },
  validations: {
    permohonan: {
      pengurus: {
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
    this.$parent.collpasedmenu();
    this.page.isLoading = false;
  },
  created() {
    this.GetNamaizin();
  },
  methods: {
    GetNamaizin() {
      this.axios
        .post(urlBase.web + "/opd/izin", {
          type: "izinById",
          id: this.$route.params.id,
        })
        .then((r) => {
          // console.log(r.data),
          this.izin = r.data;
        });
    },
    toDatabase() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.page.isLoading = true;
        this.axios
          .post(urlBase.web + "/pemohon", {
            type: "insertPermohonan",
            form: this.permohonan,
            peryaratan: this.izin.persyaratan,
            izin: this.izin,
          })
          .then((r) =>
            this.$router.push({
              name: "pemohon-pengajuan-step",
              params: { id: r.data },
            })
          );
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

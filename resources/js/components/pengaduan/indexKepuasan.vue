<template>
  <div class="br-pagebody mg-t-120">
    <el-card v-if="!select.show">
      <el-row>
        <el-col :span="6" v-for="(emo,e) in emo" :key="e">
          <center>
            <div class="block" @click="emoSelect(e)">
              <el-avatar :size="100" :src="emo.url"></el-avatar>
            </div>
            <span class="tx-bold tx-12">{{emo.txt}}</span>
          </center>
        </el-col>
      </el-row>
    </el-card>
    <el-card v-if="select.show">
      <el-row>
        <el-col :md="12">
          <center>
            <div class="block">
              <el-avatar :size="150" :src="select.data.url"></el-avatar>
            </div>
            <span class="tx-bold tx-20">{{select.data.txt}}</span>
          </center>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import urlBase from "@/js/url";
export default {
  data() {
    return {
      emo: [
        {
          url: urlBase.publicData + "/emoji/png/004-happy.png",
          txt: "SANGAT BAIK",
        },
        {
          url: urlBase.publicData + "/emoji/png/001-smile.png",
          txt: "BAIK",
        },
        {
          url: urlBase.publicData + "/emoji/png/034-sad.png",
          txt: "BURUK",
        },
        {
          url: urlBase.publicData + "/emoji/png/033-tired.png",
          txt: "SANGAT BURUK",
        },
      ],
      select: {
        show: false,
        data: {
          url: null,
          txt: null,
        },
      },
      pratinjau: {
        preview: false,
        objectURL: null,
        title: null,
        persyaratan: {},
        indexOnarray: null,
      },
      pratinjauCatatanShow: false,
      permohonan_id: this.$route.params.id,
      permohonan: {
        izin: {},
        opd: {},
        perusahaan: {},
        persyaratan: [],
        pemohon: {},
      },
      track: {},
      options: [
        {
          label: "Terima Berkas",
          options: [
            {
              kategori: "terima",
              value: "terima-fo",
              label: "Sesuai Persyaratan",
            },
          ],
        },
        {
          label: "Penolakan Berkas",
          options: [
            {
              kategori: "tolak",
              value: "FO - tidak sesuai judul persyaratan",
              label: "Berkas Tidak Sesuai Judul Persyaratan",
            },
            {
              kategori: "tolak",
              value: "FO - Berkas Buram",
              label: "Berkas Tidak Jelas / dibaca",
            },
            {
              kategori: "tolak",
              value: "FO - Masa Berlaku Berkas Sudah Kadarluarsa",
              label: "Masa aktif Berkas Kadarluarsa",
            },
            {
              kategori: "tolak",
              value: "FO - penolakan dengan catatan",
              label: "Lainnya",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.$parent.justcollpasedmenu();
    this.permohonan_id = this.$route.params.id;
  },
  created() {
    this.getPermohonan();
  },
  computed: {
    VerifikasiPermohonan() {
      var terisi = 0;
      var total = 0;
      this.permohonan.persyaratan.forEach((car) => {
        if (car.status == "terima") {
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
    emoSelect(i) {
      (this.select.show = true), (this.select.data = this.emo[i]);
    },
    OpenPratinjau(i) {
      this.pratinjau.preview = true;
      this.pratinjau.indexOnarray = i;
      this.pratinjau.title = this.permohonan.persyaratan[i].persyaratan;
      this.pratinjau.persyaratan = this.permohonan.persyaratan[i];
      this.pratinjau.objectURL =
        urlBase.assets +
        "/" +
        this.permohonan.perusahaan.npwp +
        "/" +
        this.permohonan.permohonan_code +
        "/persyaratan/" +
        this.permohonan.persyaratan[i].file;
    },
    handleDrawer(done) {
      if (this.pratinjau.persyaratan.catatan == null) {
        this.$alert("Silahkan Pilih Status Berkas", {
          confirmButtonText: "OK",
        });
      } else {
        done();
      }
    },
    toStatusPersyaratan(index, catatan) {
      if (
        this.pratinjau.persyaratan.catatan == "FO - penolakan dengan catatan"
      ) {
        this.pratinjauCatatanShow = true;
      } else {
        this.pratinjauCatatanShow = false;
        var andi = this.StatusBerkasVerifikasi(
          this.pratinjau.persyaratan.catatan
        );
        this.permohonan.persyaratan[index].status = andi;
        this.permohonan.persyaratan[
          index
        ].catatan = this.pratinjau.persyaratan.catatan;
      }
    },
    StatusBerkasVerifikasi(filter) {
      var filter = filter;
      var status = null;
      this.options.forEach((car) => {
        car.options.forEach((a) => {
          if (a.value == filter) {
            status = a.kategori;
          } else {
            status == a.kategori;
          }
        });
      });
      return status;
    },

    getPermohonan() {
      this.axios
        .post(urlBase.web + "/perizinan/permohonan", {
          type: "dataById",
          id: this.permohonan_id,
        })
        .then((r) => (this.permohonan = r.data));
    },
    verifikasiBerkas(kategori) {
      this.$confirm("Verifikasi Permohonan ?", "Warning", {
        inputType: "select",
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "info",
      })
        .then(() => {
          this.axios
            .post(urlBase.web + "/perizinan/permohonan", {
              type: "VerifikasiFO",
              permohonan_id: this.permohonan.permohonan_id,
              kategori: kategori,
              data: this.permohonan.persyaratan,
              perusahaan_id: this.permohonan.perusahaan_id,
            })
            .then(
              (r) =>
                this.$notify({
                  title: "Success",
                  message: "File Berhasil Di kirim",
                  type: "success",
                }),
              this.$router.push({
                name: "fo-dashboard",
              })
            );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Verifikasi di tunda sementara",
          });
        });
    },
  },
};
</script>
<style>
.verifikasiTolak {
  border: 1px solid#cf4436;

  color: white;
  background-color: #e74c3c;
}

.verifikasiTerima {
  border: 1px solid#16a085;
  color: white;
  background-color: #16a085;
}

.overlay-popup {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 999 !important;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-popup-content {
  position: relative;
  top: 15%;
  width: 100%;
  text-align: center;
  margin-top: 5px;
  padding: 10px 50px 10px 50px;
}

.overlay-popup a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay-popup a:hover,
.overlay-popup a:focus {
  color: #f1f1f1;
}

.overlay-popup .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}
</style>
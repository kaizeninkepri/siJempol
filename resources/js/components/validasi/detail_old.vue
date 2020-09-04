<template>
  <div>
    <div class="br-pageheader pd-y-15 pd-l-20">
      <nav class="breadcrumb pd-0 mg-0 tx-12"></nav>
    </div>
    <div class="br-msg-header d-flex justify-content-between">
      <div class="pd-x-0 pd-t-30">
        <h4 class="tx-gray-800 mg-b-5">{{izin.nama_izin}}</h4>
        <p class="mg-b-0">{{opd.opd}}</p>
      </div>
      <nav class="mg-l-auto">
        <div class="text-primary font-size-xs">Tanggal Permohonan Masuk</div>
        <div class="font-weight-bold">{{permohonan.created_at}} - {{permohonan.jam}}</div>
      </nav>
    </div>
    <div class="br-pagebody">
      <perusahaan
        v-bind:npwp="perusahaan.npwp"
        v-bind:rincian="false"
        v-if="show.perusahaan"
        v-bind:pengurus="permohonan.pemohon"
      ></perusahaan>
      <br />
      <el-tabs type="border-card">
        <el-tab-pane label="Peryaratan">
          <el-table
            v-loading="table.isLoading"
            :data="table.data.filter(data => !table.search 
                            || data.persyaratan.toLowerCase().includes(table.search.toLowerCase())
                            )"
            style="width: 100%"
          >
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column prop="persyaratan" label="Persyaratan" header-align="center"></el-table-column>
            <el-table-column prop="catatan" label="Catatan" header-align="center" align="right"></el-table-column>
            <el-table-column align="right">
              <template slot="header" slot-scope="scope">
                <el-input v-model="table.search" size="mini" placeholder="Cari Data Persyaratan" />
              </template>
              <template slot-scope="scope">
                <a
                  class="btn btn-xs btn-primary"
                  v-if="scope.row.statusUpload.download"
                  :href="'http://localhost/ptsp_pemohon/storage/app/permohonan/'+permohonan.permohonan_code+'/persyaratan/'+scope.row.file"
                  target="_blank"
                >Unduh File</a>
                <input
                  type="file"
                  @change="onFilesChange($event, scope.$index)"
                  v-if="scope.row.statusUpload.upload"
                />

                <el-select
                  v-model="scope.row.catatan"
                  placeholder="Select"
                  v-if="scope.row.statusUpload.download"
                  @change="toStatusPersyaratan(scope.$index, scope.row)"
                >
                  <el-option-group v-for="group in options" :key="group.label" :label="group.label">
                    <el-option
                      v-for="item in group.options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-option-group>
                </el-select>
                <el-input
                  type="textarea"
                  :rows="10"
                  v-model="scope.row.catatan"
                  v-if="catatanShow"
                  placeholder="Ketik Persyaratan Penolakan"
                  class="mg-b-10"
                ></el-input>
              </template>
            </el-table-column>
          </el-table>
          <br />
          <!-- <button
              v-if="!DisibleUpdate"
              type="button"
              class="btn btn-primary"
              @click="checkUpload(),openModal('show')"
          >Upload</button>-->
          <button
            v-if="!VerifikasiPermohonan"
            type="button"
            class="btn btn-danger"
            @click="verifikasiOnline('tolak')"
          >Tolak</button>
          <button
            v-if="VerifikasiPermohonan"
            type="button"
            class="btn btn-success"
            @click="verifikasiOnline('terima')"
          >Proses</button>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div
      id="modalUpload"
      class="modal fade"
      tabindex="-1"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">STATUS UPLOAD</h5>
            <button type="button" class="close" data-dismiss="modal" :disabled="show.modal">&times;</button>
          </div>

          <div class="modal-body">
            <table class="table table-striped">
              <tr v-for="p, Index in progress">
                <td>{{p.persyaratan.persyaratan}}</td>
                <td width="300">
                  <div class="progress" v-if="!p.persyaratan.statusUpload.progress">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      style="width: 100%"
                    >
                      <span style="margin-top:20px">Uploading File</span>>
                    </div>
                  </div>
                  <el-progress
                    :percentage="100"
                    status="success"
                    v-if="!p.persyaratan.statusUpload.upload"
                  ></el-progress>
                </td>
              </tr>
            </table>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-link"
              data-dismiss="modal"
              :disabled="show.modal"
            >Tutup</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import urlBase from "@/js/url";
import perusahaan from "@/js/components/perizinan/perusahaan/detail";
import rekomendasi from "@/js/components/perizinan/permohonan/rekomendasi";

export default {
  data() {
    return {
      catatanShow: false,
      url: {
        pdf: urlBase.urlWeb + "/PDF",
        fileName: "http://localhost/ptsp_pemohon",
      },
      id: this.$route.params.id,
      url: {
        file: urlBase.urlWeb,
      },
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
      show: {
        modal: true,
        perusahaan: false,
      },
      today: moment().format("DD-MM-YYYY"),
      table: {
        isLoading: false,
        data: [],
        search: null,
      },
      track: {
        isLoading: false,
        data: [],
        search: null,
      },
      permohonan: [],
      izin: {},
      perusahaan: {
        npwp: null,
      },
      opd: {},
      queue: [],
      progress: [],
    };
  },
  props: ["rekomendasi"],
  mounted() {
    console.log("permohonan Data");
    this.$parent.$data.activeLink = "perizinan";
    this.$parent.$data.activeName = "Permohonan Data";
  },
  created() {
    this.GetData(this.id);
  },
  components: {
    perusahaan,
    rekomendasi,
  },
  computed: {
    DisibleUpdate() {
      var terisi = 0;
      var total = 0;
      this.table.data.forEach((car) => {
        if (car.status == "uploaded") {
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
    VerifikasiPermohonan() {
      var terisi = 0;
      var total = 0;
      this.table.data.forEach((car) => {
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
    toStatusPersyaratan(index, catatan) {
      if (this.table.data[index].catatan == "FO - penolakan dengan catatan") {
        this.catatanShow = true;
      } else {
        this.catatanShow = false;
        var andi = this.StatusBerkasVerifikasi(this.table.data[index].catatan);
        this.table.data[index].status = andi;
      }
    },
    checkUpload() {
      let que = this.queue;
      let length = this.queue.length;
      // console.log(que.length)
      if (length > 0) {
        this.UploadFIle(que[0]);
      } else {
        this.show.modal = false;
      }
    },
    moment(arg) {
      moment.locale("id");
      return moment(arg);
    },
    GetData(id) {
      this.table.isLoading = true;
      (this.table.data = []),
        this.axios
          .post(urlBase.web + "/perizinan/permohonan", {
            type: "dataById",
            id: id,
          })
          .then(
            (r) => (
              (this.table.data = r.data.persyaratan),
              (this.perusahaan = r.data.perusahaan),
              (this.permohonan = r.data),
              (this.izin = r.data.izin),
              (this.opd = r.data.opd),
              (this.table.isLoading = false),
              (this.show.perusahaan = true)
            )
          );
    },
    verifikasiOnline(kategori) {
      this.$confirm("Verifikasi Permohonan ?", "Warning", {
        inputType: "select",
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "info",
      })
        .then(() => {
          this.axios
            .post(urlBase.web + "/validasi", {
              type: "VerifikasiBO",
              permohonan_id: this.id,
              kategori: kategori,
              data: this.table.data,
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
                name: "validasi-permohonan",
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
    onFilesChange(event, r) {
      this.queue.push(r);
      this.progress.push({
        index: r,
        persyaratan: this.table.data[r],
      });
      let fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = (e) => {
        this.table.data[r].file = e.target.result;
      };
    },
    UploadFIle(i) {
      this.axios
        .post(urlBase.urlWeb + "/perizinan/permohonan", {
          kategori: "persyaratan",
          type: "uploadSingle",
          persyaratan: this.table.data[i],
          permohonanCode: this.permohonan.permohonan_code,
          permohonan_id: this.permohonan.permohonan_id,
        })
        .then(
          (r) => (
            (this.table.data[i].statusUpload.download = true),
            (this.table.data[i].statusUpload.upload = false),
            (this.table.data[i].file = r.data),
            (this.progress[i].persyaratan.statusUpload.progress = true),
            (this.progress[i].persyaratan.statusUpload.upload = false),
            this.$delete(this.queue, 0),
            this.checkUpload()
          )
        );
    },
  },
};
</script>
<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
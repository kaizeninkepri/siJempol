<template>
<div>
    <div class="br-subleft">
        <el-card class="verifikasiTolak" v-if="!VerifikasiPermohonan">
            DATA PERMOHONAN BELUM DI VERIFIKASI &nbsp;&nbsp;&nbsp;
            <el-button size="mini" @click="verifikasiBerkas('tolak')">Tolak</el-button>
        </el-card>

        <el-card class="verifikasiTerima" v-if="VerifikasiPermohonan">
            VERIFIKASI DAN VALIDASI BERKAS PERMOHONAN &nbsp;&nbsp;&nbsp;
            <el-button size="mini" @click="verifikasiBerkas('terima')">Terima</el-button>
        </el-card>
        <h6 class="tx-uppercase tx-15 mg-t-40 pd-x-10 bd-b pd-b-10 tx-roboto tx-white-7">DATA PERUSAHAAN</h6>

        <nav class="nav br-nav-mailbox flex-column">
            <span class="nav-link mg-b-0 tx-bold" style="margin-bottom:-10px">NPWP</span>
            <span class="nav-link mg-b-0">{{permohonan.perusahaan.npwp}}</span>
            <span class="nav-link mg-b-0 tx-bold">Nama</span>
            <span class="nav-link mg-b-10">{{permohonan.perusahaan.fullname}}</span>
            <span class="nav-link mg-b-2 tx-bold">Alamat</span>
            <span class="nav-link mg-b-15">{{permohonan.perusahaan.alamat}}</span>
            <span class="nav-link mg-b-0 tx-bold" style="margin-bottom:-10px">HP</span>
            <span class="nav-link mg-b-5">{{permohonan.perusahaan.contact}}</span>
            <span class="nav-link mg-b-0 tx-bold" style="margin-bottom:-10px">Email</span>
            <span class="nav-link mg-b-10">{{permohonan.perusahaan.email}}</span>
        </nav>
        <h6 class="tx-uppercase tx-15 mg-t-40 pd-x-10 bd-b pd-b-10 tx-roboto tx-white-7">NARAHUBUNG</h6>
        <nav class="nav br-nav-mailbox flex-column">
            <span class="nav-link mg-b-0 tx-bold" style="margin-bottom:-10px">Nama</span>
            <span class="nav-link mg-b-5">{{permohonan.pemohon.nama}}</span>
            <span class="nav-link mg-b-0 tx-bold" style="margin-bottom:-10px">HP</span>
            <span class="nav-link mg-b-5">{{permohonan.pemohon.contact}}</span>
            <span class="nav-link mg-b-0 tx-bold" style="margin-bottom:-10px">Email</span>
            <span class="nav-link mg-b-10">{{permohonan.pemohon.email}}</span>
        </nav>
    </div>
    <div class="br-contentpanel">
        <div class="br-pageheader pd-y-15 pd-md-l-20">
            <nav class="breadcrumb pd-0 mg-0 tx-12 tx-warning">
                <span class="breadcrumb-item tx-warning" href="#">
                    <span class="tx-warning tx-bold">BACK OFFICE VALIDASI DAN KEABSAHAN BERKAS</span>
                </span>
            </nav>
        </div>
        <!-- br-pageheader -->
        <div class="d-flex align-items-center justify-content-between mg-b-30">
            <div class="pd-x-20 pd-sm-x-30 pd-t-20 pd-sm-t-30">
                <h4 class="tx-gray-800 mg-b-5">{{permohonan.izin.nama_izin}}</h4>
                <p class="mg-b-20">Sektor {{ permohonan.opd.opd }}.</p>
            </div>
        </div>

        <div class="br-pagebody">
            <el-row>
                <el-col :md="24">
                    <el-card>
                        <table class="table table-valign-middle mg-b-0 table-hover">
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>PERSYARATAN</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(i,Index) in permohonan.persyaratan" :key="Index">
                                    <td class="pd-l-0-force tx-center" width="30">
                                        <div class="tx-13 tx-bold mg-b-0">{{Index+1}}</div>
                                    </td>
                                    <td class="pd-l-0-force">
                                        <div class="tx-13 tx-bold mg-b-0">{{i.persyaratan}}</div>
                                    </td>
                                    <td class="pd-l-0-force">
                                        <span class="tx-13 tx-bold mg-b-0">{{i.catatan}}</span>
                                        <ion-icon name="checkmark-done-circle-outline" class="tx-20 tx-bold tx-success" v-show="i.status =='terima'"></ion-icon>
                                        <ion-icon name="close-circle-outline" class="tx-20 tx-bold tx-danger" v-show="i.status =='tolak'"></ion-icon>
                                    </td>
                                    <td class="pd-r-0-force tx-center">
                                        <el-button type="primary" size="mini" @click="OpenPratinjau(Index)">
                                            <ion-icon name="newspaper-outline" class="tx-12"></ion-icon>&nbsp;&nbsp;&nbsp;Pratinjau
                                        </el-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div v-if="permohonan.izin.opdi_id == '7'">
                            <el-divider></el-divider>
                            <el-input v-model="penelitian.menimbang" @blur="menimbangOninput()" placeholder="Ketik Menimbang Surat" style="width:100%" ref="menimbang" :class="{ 'el-input__error': ErrorMenimbang}"></el-input>
                            <br />
                            <br />
                            <el-button type="primary" v-if="penelitian.menimbang">Pratinjau Surat Penelitian</el-button>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>

    <el-drawer :title="pratinjau.title" :visible.sync="pratinjau.preview" :with-header="true" size="80%" :before-close="handleDrawer" direction="btt">
        <template slot="title">
            <div>
                <div class="d-flex align-items-center justify-content-between mg-b-30">
                    <div>
                        <el-select v-model="pratinjau.persyaratan.catatan" placeholder="Select" v-if="pratinjau.persyaratan" @change="toStatusPersyaratan(pratinjau.indexOnarray, pratinjau.persyaratan)">
                            <el-option-group v-for="group in options" :key="group.label" :label="group.label">
                                <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-option-group>
                        </el-select>
                        <el-input type="textarea" :rows="10" v-model="pratinjau.persyaratan.catatan" v-if="pratinjauCatatanShow" placeholder="Ketik Persyaratan Penolakan" class="mg-b-10"></el-input>
                    </div>
                    <div class="wd-130">
                        <h6 class="tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1">{{pratinjau.title}}</h6>
                    </div>
                </div>
            </div>
        </template>
        <iframe v-if="pratinjau.objectURL" :src="pratinjau.objectURL" width="100%" height="100%"></iframe>
    </el-drawer>
</div>
</template>

<script>
import urlBase from "@/js/url";
export default {
    data() {
        return {
            ErrorMenimbang: false,
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
            options: [{
                    label: "Terima Berkas",
                    options: [{
                        kategori: "terima",
                        value: "terima-fo",
                        label: "Sesuai Persyaratan",
                    }, ],
                },
                {
                    label: "Penolakan Berkas",
                    options: [{
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
            penelitian: {}
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
                .then((r) => {
                    this.permohonan = r.data
                    if (this.permohonan.izin.opdi_id == '7') {
                        this.getPenelitianData();
                    }
                });
        },
        verifikasiBerkas(kategori) {

            if (this.permohonan.izin.opdi_id == '7') {
                if (this.penelitian.menimbang == null || this.penelitian.menimbang == ' ') {
                    this.ErrorMenimbang = true
                    this.$refs.menimbang.focus();
                    this.$message.error('Oops, Menimbang Masih Kosong');
                } else {
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
                                        name: "bo-dashboard",
                                    })
                                );
                        })
                        .catch(() => {
                            this.$message({
                                type: "info",
                                message: "Verifikasi di tunda sementara",
                            });
                        });
                }
            } else {
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
                                    name: "bo-dashboard",
                                })
                            );
                    })
                    .catch(() => {
                        this.$message({
                            type: "info",
                            message: "Verifikasi di tunda sementara",
                        });
                    });
            }
        },
        getPenelitianData() {
            this.axios
                .post(urlBase.web + "/master/penelitian", {
                    type: "getdataById",
                    id: this.permohonan_id,
                })
                .then((r) => (this.penelitian = r.data));
        },
        menimbangOninput() {
            this.ErrorMenimbang = false
            this.axios
                .post(urlBase.web + "/master/penelitian", {
                    type: "InsertMenimbang",
                    id: this.permohonan_id,
                    data: this.penelitian.menimbang
                })
                .then((r) => {

                });
        }
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
<style>
.el-input__inner {
    background-color: var(--bg-color) !important;
}

.el-input__error {
    color: white !important;
    border-radius: 5px;
    background-color: #f6cfcf !important;
}

.el-input__error ::placeholder {
    color: #333 !important;
    border-radius: 5px;
    background-color: #f6cfcf !important;
}
</style>

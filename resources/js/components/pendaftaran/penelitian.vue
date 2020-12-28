<template>
<div class="align-items-center justify-content-center pd-t-50 ht-100v pd-l-100 pd-r-100" style="background: #d0dcec">
    <div class="progress" v-if="isLoading">
        <div class="progress-bar" role="progressbar" :style="{'width': progressBar + '%'}" aria-valuenow="50" aria-valuemin="50" aria-valuemax="100"></div>
    </div>
    <el-card v-loading="isLoading" element-loading-text="Proses Pengajuan Izin penelitian ..." style="margin-top:-3px">
        <el-divider content-position="left">DATA PENELITIAN</el-divider>
        <el-row :gutter="10" class="mg-b-20">
            <el-col :md="4" class="mg-b-8">
                <label>Kategori Penelitian</label>
                <el-select v-model.trim="penelitian.kategori" placeholder="Kategori" style="width:100%" :class="{ 'el-input__error': $v.penelitian.kategori.$error }">
                    <el-option value="mahasiswa">Mahasiswa</el-option>
                    <el-option value="umum">Umum / Instansi / Riset</el-option>
                </el-select>
            </el-col>
            <el-col :md="5" class="mg-b-8">
                <label>Nomor Permohonan</label>
                <el-input v-model.trim="penelitian.permohonan_nomor" placeholder="Universitas / Instansi" :class="{ 'el-input__error': $v.penelitian.permohonan_nomor.$error }"></el-input>
            </el-col>
            <el-col :md="6" class="mg-b-8">
                <label>Universitas / Instansi</label>
                <el-input v-model.trim="penelitian.universitas" placeholder="Universitas / Instansi" :class="{ 'el-input__error': $v.penelitian.universitas.$error }"></el-input>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :md="10" class="mg-b-8">
                <label>Judul Penelitian</label>
                <el-input v-model.trim="penelitian.judul" placeholder="Judul Penelitian" :class="{ 'el-input__error': $v.penelitian.judul.$error }"></el-input>
            </el-col>
            <el-col :md="8">
                <label>Lokasi</label>
                <el-select v-model.trim="penelitian.lokasi" multiple filterable allow-create default-first-option placeholder="Lokasi Penelitian" style="width:100%" class="mg-b-8" :class="{ 'el-input__error': $v.penelitian.lokasi.$error }">
                    <el-option v-for="item in penelitian.lokasi" :key="item" :label="item" :value="item">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :md="6" class="mg-b-8">
                <label>Waktu Penelitian</label>
                <el-date-picker v-model.trim="penelitian.waktu" type="daterange" range-separator="/" start-placeholder="Mulai" end-placeholder="Selesai" style="width:100%" :class="{ 'el-input__error': $v.penelitian.waktu.$error }">
                </el-date-picker>
            </el-col>
        </el-row>
        <el-card v-for="(p,Pindex) in $v.person.$each.$iter" :key="Pindex" class="mg-b-20">
            <el-divider content-position="left"></el-divider>
            <el-row :gutter="10" class="mg-b-20">
                <el-col :md="3">
                    <center>
                        <el-image style="width: 100px; height: 100px" :src="url.uploadImage" fit="fit" class="mg-t-30"></el-image>
                    </center>
                </el-col>
                <el-col :md="20">
                    <el-row :gutter="10">
                        <el-col :md="4" class="mg-b-8">
                            <label>Kategori Identitas</label>
                            <el-select v-model.trim="p.identitas_kategori.$model" placeholder="Kategori" style="width:100%" :class="{ 'el-input__error': p.identitas_kategori.$error }">
                                <el-option value="KTP">Kartu Tanda Penduduk</el-option>
                                <el-option value="NIM">Nomor Induk Mahasiswa</el-option>
                            </el-select>
                        </el-col>
                        <el-col :md="5" class="mg-b-8">
                            <label>Nomor Indentitas</label>
                            <el-input v-model.trim="p.identitas_nomor.$model" placeholder="Nomor Identitas" :class="{ 'el-input__error': p.identitas_nomor.$error }"></el-input>
                        </el-col>
                        <el-col :md="5" class="mg-b-8">
                            <label>Nama</label>
                            <el-input v-model.trim="p.nama.$model" placeholder="Nomor Identitas" :class="{ 'el-input__error': p.nama.$error }"></el-input>
                        </el-col>
                        <el-col :md="5" class="mg-b-8">
                            <label>Jurusan / Fakultas / Jabatan</label>
                            <el-input v-model.trim="p.jurusan.$model" placeholder="Jurusan / Fakultas / Kategori" :class="{ 'el-input__error': p.jurusan.$error }"></el-input>
                        </el-col>
                        <el-col :md="5" class="mg-b-8">
                            <label>Jenjang Pendidikan</label>
                            <el-select v-model.trim="p.jenjang.$model" placeholder="Kategori" style="width:100%" :class="{ 'el-input__error': p.jenjang.$error }">
                                <el-option value="SLTA">Sekolah Lanjutan Tingkat Atas</el-option>
                                <el-option value="D1">Diploma 1</el-option>
                                <el-option value="D2">Diploma 2</el-option>
                                <el-option value="D3">Diploma 3</el-option>
                                <el-option value="D4">Diploma 4</el-option>
                                <el-option value="S1">Starta 1</el-option>
                                <el-option value="S2">Starta 2</el-option>
                                <el-option value="S3">Strata 3</el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <el-col :md="5" class="mg-b-15">
                        <label>Email</label>
                        <el-input v-model.trim="p.email.$model" placeholder="Email" :class="{ 'el-input__error': p.email.$error }"></el-input>
                    </el-col>
                    <el-col :md="3" class="mg-b-8">
                        <label>Telp. / HP</label>
                        <el-input v-model.trim="p.contact.$model" placeholder="Telp. / HP" :class="{ 'el-input__error': p.contact.$error }"></el-input>
                    </el-col>
                    <el-col :md="10" class="mg-b-8">
                        <label>Alamat</label>
                        <el-input v-model.trim="p.alamat.$model" placeholder="Alamat" :class="{ 'el-input__error': p.alamat.$error }"></el-input>
                    </el-col>
                </el-col>
            </el-row>
        </el-card>
        <el-row :gutter="10" type="flex" justify="center">
            <el-button type="primary" @click="Daftar()"> Daftar</el-button>
            <el-button type="primary" @click="tambahAnggota()"> Anggota Penelitian</el-button>
        </el-row>
    </el-card>
</div>
</template>

<script>
import url from "@/js/url";
import {
    required,
    minLength,
    between,
    sameAs
} from "vuelidate/lib/validators";
export default {
    data() {
        return {
            url: {
                uploadImage: url.web + '/public/images/upload-image.png'
            },
            isLoading: false,
            progressBar : 0,
            penelitian: {
                judul: null,
                lokasi: [],
                waktu: null,
                universitas: null,
                permohonan_nomor: null,
                kategori: null,
            },
            person: [{
                identitas_nomor: null,
                identitas_kategori: null,
                nama: null,
                jenjang: null,
                jurusan: null,
                contact: null,
                email: null,
                alamat: null,
                status: null,
            }]
        }

    },
    validations: {
        penelitian: {
            judul: {
                required
            },
            lokasi: {
                required
            },
            waktu: {
                required
            },
            universitas: {
                required
            },
            permohonan_nomor: {
                required
            },
            kategori: {
                required
            },
        },
        person: {
            required,
            $each: {
                identitas_kategori: {
                    required
                },
                identitas_nomor: {
                    required
                },
                nama: {
                    required
                },
                jenjang: {
                    required
                },
                jurusan: {
                    required
                },
                contact: {
                    required
                },
                email: {
                    required
                },
                alamat: {
                    required
                }
            }
        }
    },
    methods: {
        tambahAnggota() {
            this.person.push({
                identitas_nomor: null,
                identitas_kategori: null,
                nama: null,
                jenjang: null,
                jurusan: null,
                contact: null,
                email: null,
                alamat: null,
                status: null,
            })
        },
        TODB() {
            this.isLoading = true
            this.axios
                .post(url.web + "/master/penelitian", {
                    type: "insert",
                    penelitian: this.penelitian,
                    person: this.person,
                }, {
                    onUploadProgress: function (progressEvent) {
                        this.progressBar = parseInt(
                            Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        );
                    }.bind(this),
                })
                .then((r) => {

                });
        },
        Daftar() {
            this.$v.$touch()
        }
    }

}
</script>

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

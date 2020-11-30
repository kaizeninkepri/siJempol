<template>
<div>
    <transition mode="out-in" name="fade">
        <div v-if="page.isLoading" key="info">
            <skeleton></skeleton>
        </div>
        <div v-else key="warning">
            <div class="br-msg-header d-flex justify-content-between">
                <div class="pd-x-0 pd-t-30">
                    <h4 class="tx-gray-800 mg-b-5">Halaman Utama Pemohon</h4>
                    <p class="mg-b-0">{{perusahaan.fullname.toUpperCase()}}</p>
                    <p class="mg-b-0">{{perusahaan.badanusaha}}</p>
                </div>
            </div>
            <div class="br-pagebody">
                <el-row :gutter="10">
                    <el-col :md="18">
                        <el-card>
                            <div class="mg-b-10 tx-bold">PENGAJUAN JENIS IZIN LAYANAN</div>
                            <el-autocomplete style="width:100%" v-model="state2" :fetch-suggestions="querySearch" ref="pencarianIzin" placeholder="Ketik Nama Izin Layanan" :trigger-on-focus="false" @select="handleSelect">
                                <template slot-scope="{ item }">
                                    <el-row>
                                        <el-col :md="12">{{item.value}}</el-col>
                                    </el-row>
                                </template>
                            </el-autocomplete>
                        </el-card>
                        <el-card class="mg-t-10" :body-style="{ padding: '0px' }" v-if="permohonantertunda.length <= 0">
                            <el-row type="flex" justify="center">
                                <el-col :md="8"> <img :src="url.assets+'/images/2658352.jpg'" class="img-fluid">
                                    <div style="padding: 14px;">
                                        <span class="tx-bold">Permohonan perizinan / izin belum di ajukan</span>
                                        <div class="bottom clearfix">
                                            <el-button type="text" class="button" @click="FocusInpencarian()">Ajukan Izin</el-button>
                                            <a :href="url.assets+'/files/30112020.pdf'" target="_blank">Tata Cara Pengajuan Izin</a>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>

                        </el-card>
                        <el-card class="mg-t-10" v-loading="page.isLoading"  v-if="permohonantertunda.length > 0">
                            <div class="d-flex align-items-center justify-content-between mg-b-30">
                                <div>
                                    <h6 class="tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1">PENGAJUAN PERMOHONAN</h6>
                                </div>
                                <div class="wd-230">
                                    <el-input placeholder="Cari Data Permohonan ..." prefix-icon="el-icon-search" v-model="search"></el-input>
                                </div>
                            </div>

                            <div class="table-responsive">

                                <table class="table table-valign-middle mg-b-0 table-hover">
                                    <tbody>
                                        <tr v-for="(i, Index) in permohonantertunda" :key="Index">
                                            <td>{{Index + 1}}</td>
                                            <td>
                                                <el-popover v-show="i.status == 'pending'" placement="top-start" title="proses" width="400" trigger="hover" content="Permohonan belum Di Kirim Ke PTSP">
                                                    <ion-icon slot="reference" name="refresh-circle-outline" class="tx-30 tx-warning"></ion-icon>
                                                </el-popover>

                                                <el-popover v-show="i.status != 'pending' && i.status != 'tolak'" placement="top-start" title="Tracking permohonan" width="400" trigger="hover" content="Permohonan Sedang di Proses">
                                                    <i slot="reference" class="tx-30 tx-primary ion-map"></i>
                                                </el-popover>

                                                <el-popover v-show="i.status == 'tolak'" placement="top-start" title="Permohonan di Tolak" width="400" trigger="hover" content="Permohonan Anda di Tolak terkendala pada Kelengkapan berkas">
                                                    <ion-icon slot="reference" name="close-circle-outline" class="tx-30 tx-danger"></ion-icon>
                                                </el-popover>
                                            </td>
                                            <td class="pd-l-0-force">
                                                <span class="tx-1" style="font-size:11px">{{i.permohonan_code}}</span>
                                                <div class="tx-bold">{{i.pemohon.nama}}</div>
                                            </td>
                                            <td class="pd-l-0-force">
                                                {{i.izin.nama_izin}}
                                                <div>{{i.opd.opd}}</div>
                                            </td>
                                            <td class="pd-l-0-force">
                                                <router-link :to="{name : i.actionButton.routerName, params:{id : i.idCrypt}}" :class="i.actionButton.class" v-if="page.show">{{i.actionButton.name}}</router-link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :md="6">
                        <el-card class="mg-b-10">
                            <h5 class="tx-bold">DATA PENGAJUAN PERMOHONAN</h5>
                            <el-divider></el-divider>
                            <div class="bg-white rounded-bottom d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-start">
                                    <div class="mg-l-15">
                                        <label class="tx-uppercase tx-10 tx-medium tx-spacing-1 mg-b-0 tx-center">TERTUNDA</label>
                                        <h6 class="tx-inverse mg-b-0 tx-lato tx-bold tx-center">{{datatertunda}}</h6>
                                    </div>
                                </div>
                                <!-- d-flex -->
                                <div class="d-flex align-items-center">
                                    <div class="mg-l-15">
                                        <label class="tx-uppercase tx-10 tx-medium tx-spacing-1 tx-center mg-b-0 tx-danger">TOLAK</label>
                                        <h6 class="tx-inverse mg-b-0 tx-lato tx-bold tx-danger tx-center">{{datatolak}}</h6>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="mg-l-15">
                                        <label class="tx-uppercase tx-10 tx-medium tx-spacing-1 mg-b-0 tx-center">PROSES</label>
                                        <h6 class="tx-inverse mg-b-0 tx-lato tx-bold tx-center">{{dataproses}}</h6>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="mg-l-15">
                                        <label class="tx-uppercase tx-10 tx-medium tx-spacing-1 mg-b-0 tx-center">TOTAL</label>
                                        <h6 class="tx-inverse mg-b-0 tx-lato tx-bold tx-center">{{permohonan.length}}</h6>
                                    </div>
                                </div>
                                <!-- d-flex -->
                            </div>
                            <!-- d-flex -->
                        </el-card>
                        <videoPlayer :options="playerOptions"></videoPlayer>
                    </el-col>
                </el-row>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
import urlBase from "@/js/url";
import VueContentLoading from "vue-content-loading";
import skeleton from "@/js/components/dashboard/pemohon_skeleton";
import {
    VclFacebook,
    VclInstagram,
    VclTable
} from "vue-content-loading";
import "video.js/dist/video-js.css";

import {
    videoPlayer
} from "vue-video-player";

const form = () =>
    import(
        /* webpackChunkName: "modulForm" */
        "@/js/components/roles/modul_form"
    );
export default {
    data() {
        return {
            url: {
                assets: urlBase.publicData
            },
            playerOptions: {
                width: "260%",
                // videojs options
                muted: true,
                language: "en",
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{
                    type: "video/mp4",
                    src: "https://appkepri.com/Resources/tutorial1.mp4",
                }, ],
                poster: "/static/images/author.jpg",
            },
            page: {
                title: "DASHBOARD",
                subtitle: "DPMPTSP",
                show: true,
                isLoading: true,
            },
            permohonan: [],
            search: "",
            perusahaan: {
                fullname: "",
            },
            state2: "",
            links: "",
        };
    },
    created() {
        this.getperusahaan();
        this.GetNamaizin();
        this.getpermohonan();
    },
    mounted() {
        this.$parent.justExpand();
    },
    computed: {
        datatertunda() {
            var total = 0;
            this.permohonan.forEach((e) => {
                if (e.status == "pending") {
                    total = total + 1;
                }
            });
            return total;
        },
        dataproses() {
            var total = 0;
            this.permohonan.forEach((e) => {
                if (e.status != "pending") {
                    total = total + 1;
                }
            });
            return total;
        },
        datatolak() {
            var total = 0;
            this.permohonan.forEach((e) => {
                if (e.status == "tolak") {
                    total = total + 1;
                }
            });
            return total;
        },
        permohonantertunda() {
            var total = this.permohonan;
            // this.permohonan.forEach((e) => {
            //   if (e.status == "pending") {
            //     total.push(e);
            //   }
            // });
            let result = total;
            if (!this.search) return result;

            const filterValue = this.search.toLowerCase();

            const filter = (event) =>
                event.permohonan_code.toLowerCase().includes(filterValue) ||
                event.opd.opd.toLowerCase().includes(filterValue) ||
                event.izin.nama_izin.toLowerCase().includes(filterValue) ||
                event.pemohon.nama.toLowerCase().includes(filterValue);
            return result.filter(filter);
        },
    },
    methods: {
        FocusInpencarian(){
            this.$refs.pencarianIzin.focus()
            this.state2 = "izin"
        },
        getperusahaan() {
            this.axios
                .post(urlBase.web + "/pemohon", {
                    type: "dashboard",
                })
                .then((r) => (this.perusahaan = r.data));
        },
        getpermohonan() {
            this.page.isLoading = true;
            this.axios
                .post(urlBase.web + "/pemohon", {
                    type: "permohonanByPerusahaanId ",
                })
                .then((r) => {
                    this.permohonan = r.data;
                    this.page.isLoading = false;
                });
        },
        querySearch(queryString, cb) {
            var links = this.links;
            var results = queryString ?
                links.filter(this.createFilter(queryString)) :
                links;
            // call callback function to return suggestions
            cb(results);
        },
        createFilter(queryString) {
            return (a) => {
                return a.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1;
            };
        },
        GetNamaizin() {
            this.page.isLoading = true;
            this.axios
                .post(urlBase.web + "/opd/izin", {
                    type: "namaIzin",
                })
                .then((r) => {
                    // console.log(r.data),
                    this.links = r.data;
                    this.page.isLoading = false;
                });
        },
        handleSelect(item) {
            this.$router.push({
                name: "pemohon-pengajuan",
                params: {
                    id: item.Crypt
                },
            });
        },
    },
    components: {
        VueContentLoading,
        VclFacebook,
        VclTable,
        skeleton,
        videoPlayer,
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}
</style>

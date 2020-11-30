<template>
<div>
    <transition mode="out-in" name="fade">
        <div v-if="page.isLoading" key="info">
            <skeleton></skeleton>
        </div>
        <div v-else key="warning">
            <div style="background:#3146A4; min-height:250px; border-top:1px solid #C8B046; color:white">
                <div class="br-msg-header d-flex justify-content-between">
                    <div class="pd-x-0 pd-t-30">
                        <h4 class="tx-white-800 mg-b-5">Halaman Utama Pemohon</h4>
                        <p class="mg-b-0">{{perusahaan.fullname.toUpperCase()}}</p>
                        <p class="mg-b-0">{{perusahaan.badanusaha}}</p>
                    </div>
                </div>
            </div>
            <div class="br-pagebody" style="margin-top:-80px">
                <el-row :gutter="10">
                    <el-col :md="{span:4, offset : 4}" :xs="{span:22, offset:1}">
                        <el-card class="card-feature">
                            <img :src="url.assets+'/images/files.png'" class="img-fluid">
                            <div class="bottom clearfix">
                                <el-button type="text" class="button" @click="FocusInpencarian()">Persyaratan</el-button>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :md="4" :xs="{span:22, offset:1}">
                        <el-card class="card-feature">
                            <img :src="url.assets+'/images/consent.png'" class="img-fluid">
                            <div class="bottom clearfix">
                                <el-button type="text" class="button" @click="FocusInpencarian()">Permohonan</el-button>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :md="4" :xs="{span:22, offset:1}">
                        <el-card class="card-feature">
                            <img :src="url.assets+'/images/information.png'" class="img-fluid">
                            <div class="bottom clearfix">
                                <el-button type="text" class="button" @click="FocusInpencarian()">Index Kepuasan</el-button>
                            </div>
                        </el-card>
                    </el-col>
                     <el-col :md="4" :xs="{span:22, offset:1}">
                        <el-card class="card-feature">
                            <img :src="url.assets+'/images/2892186.jpg'" class="img-fluid" style="width:75% !important">
                            <div class="bottom clearfix">
                                <el-button type="text" class="button" @click="FocusInpencarian()">Tata Cara Penggunaan</el-button>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row class="mg-t-50">
                    <el-col :md="{span :4, offset:4}" class="card-feature"><img :src="url.assets+'/images/Untitled.png'" class="img-fluid">
                    </el-col>
                    <el-col :md="12">
                        <h5 class="tx-bold">Informasi Layanan</h5>
                        <p class="mg-b-0">Tetap Terhubung dan Beri Tahu kami bagaimana kami dapat membantu</p>
                        <span>- (+62) 811-7779-727 </span>
                        <span> / (+62) 823-7017-3338 </span>
                        <p>- dpmptsp20@gmail.com</p>
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
        FocusInpencarian() {
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

<style scoped>
.card-feature {
    text-align: center;
}

.card-feature img {
    width: 50% !important;
}

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

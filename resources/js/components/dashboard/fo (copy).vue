<template>
<div class="mg-t-120">
    <div class="br-pagebody">
        <el-row class="pd-5" :gutter="10">
            <el-col :md="24" class="mg-b-20">
                <el-row :gutter="10">
                    <el-col :md="6">
                        <el-card v-loading="page.isLoading">
                            <div class="pd-5 d-flex align-items-center">
                                <ion-icon name="mail-unread-outline" class="tx-50 tx-primary"></ion-icon>
                                <div class="mg-l-20">
                                    <p class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10">Izin</p>
                                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">{{permohonanonlineizin}}</p>
                                    <span class="tx-11 tx-roboto tx-primary">Permohonan Online</span>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :md="6">
                        <el-card v-loading="page.isLoading">
                            <div class="pd-5 d-flex align-items-center">
                                <ion-icon name="mail-unread-outline" class="tx-50 tx-warning"></ion-icon>
                                <div class="mg-l-20">
                                    <p class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10">Non izin</p>
                                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">{{permohonanonlinenonizin}}</p>
                                    <span class="tx-11 tx-roboto tx-warning">Permohonan Onnline</span>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :md="6">
                        <el-card v-loading="page.isLoading">
                            <div class="pd-5 d-flex align-items-center">
                                <ion-icon name="copy-outline" class="tx-50 tx-danger"></ion-icon>
                                <div class="mg-l-20">
                                    <p class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10">PENOLAKAN</p>
                                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">tolak</p>
                                    <span class="tx-11 tx-roboto tx-danger">Administrasi / Kajian Teknis</span>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :md="6">
                        <el-card v-loading="page.isLoading">
                            <div class="pd-5 d-flex align-items-center">
                                <ion-icon name="newspaper-outline" class="tx-50 tx-success"></ion-icon>
                                <div class="mg-l-20">
                                    <p class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10">SURAT KEPUTUSAN</p>
                                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">0</p>
                                    <span class="tx-11 tx-roboto tx-success">SK / Izin Terbit</span>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
        <el-row class="mg-t-10">
            <el-col :md="cardData">
                <!-- <el-button @click="changeCard()">change</el-button> -->
                <el-card>
                    <div class="d-flex align-items-center justify-content-between mg-b-30">
                        <div>
                            <h6 class="tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1">PERMOHONAN IZIN / NON IZIN</h6>
                            <p class="mg-b-0">Online / Walkin</p>
                        </div>
                        <div class="wd-230">
                            <el-input placeholder="Cari Data Permohonan ..." v-model="permohonan.search" prefix-icon="el-icon-search"></el-input>
                        </div>
                    </div>
                    <!-- d-flex -->

                    <table class="table table-valign-middle mg-b-0 table-hover">
                        <tbody>
                            <tr v-for="(i,Index) in permohonanFilter.slice(permohonan.list,permohonan.end)" :key="Index">
                                <td class="pd-l-0-force">
                                    <div class="tx-13 tx-bold mg-b-0">{{i.perusahaan.fullname}}</div>
                                    <div class="tx-12 tx-roboto mg-b-1 tx-primary" v-if="i.perusahaan.kategori != 'perorangan'">{{i.pemohon.nama}}</div>
                                    <p class="tx-12 tx-roboto">{{i.pemohon.contact}} / {{i.pemohon.email}}</p>
                                </td>
                                <td class="pd-l-0-force">
                                    <div>
                                        <p class="tx-13 tx-bold mg-b-0 tx-teal">{{i.izin.nama_izin}}</p>
                                        <p class="tx-12 tx-roboto mg-b-0">{{i.opd.opd}} / {{i.izin.kategori}}</p>
                                    </div>
                                </td>
                                <td class="pd-l-0-force">
                                    <span class="tx-12 tx-roboto mg-b-0">{{i.lastjam}}</span>
                                </td>
                                <td class="pd-l-0-force">
                                    <button type="button" class="btn btn-oblong btn-sm" :class="i.createonkategori">{{i.create_on}}</button>
                                </td>
                                <td class="pd-r-0-force tx-center">
                                    <router-link :to="{name : 'fo-permohonan-detail', params:{id : i.permohonan_id}}">
                                        <i class="icon ion-more tx-18 lh-0"></i>
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <el-row justify="end" type="flex">
                        <el-col :md="10">
                            <el-pagination style="float: right" background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="permohonan.page" :page-size="permohonan.size" :page-count="permohonan.pagecount" layout="total, prev, pager, next" :total="permohonan.data.length"></el-pagination>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</div>
</template>

<script>
import urlBase from "@/js/url";
import VideoBackground from "vue-responsive-video-background-player";
export default {
    data() {
        return {
            cardData: 24,
            page: {
                isLoading: true,
            },
            url: {
                assets: urlBase.web + "/images",
            },
            permohonan: {
                data: [],
                size: 10,
                page: 1,
                list: 0,
                end: 10,
                search: null
            },
        };
    },
    mounted() {
        this.$parent.justExpand();
    },
    created() {
        this.getpermohonan();
    },
    computed: {
        permohonanonline() {
            var total = 0;
            this.permohonan.data.forEach((e) => {
                if (e.create_on == "online") {
                    total = total + 1;
                }
            });
            return total;
        },
        permohonanonlineizin() {
            var total = 0;
            this.permohonan.data.forEach((e) => {
                if (e.create_on == "online" && e.izin.kategori == "perizinan") {
                    total = total + 1;
                }
            });
            return total;
        },
        permohonanonlinenonizin() {
            var total = 0;
            this.permohonan.data.forEach((e) => {
                if (e.create_on == "online" && e.izin.kategori == "nonperizinan") {
                    total = total + 1;
                }
            });
            return total;
        },
        walkin() {
            var total = 0;
            this.permohonan.data.forEach((e) => {
                if (e.create_on == "walkin") {
                    total = total + 1;
                }
            });
            return total;
        },
        tolak() {
            var total = 0;
            this.permohonan.data.forEach((e) => {
                if (e.create_on == "tolak") {
                    total = total + 1;
                }
            });
            return total;
        },
        permohonanFilter() {
            var result = this.permohonan.data
            if (!this.permohonan.search) return result;

            const filterValue = this.permohonan.search.toLowerCase();

            const filter = (event) =>
                event.perusahaan.fullname.toLowerCase().includes(filterValue) ||
                event.permohonan_code.toLowerCase().includes(filterValue) ||
                event.izin.nama_izin.toLowerCase().includes(filterValue);

            return result.filter(filter);
        },
    },
    methods: {
        changeCard() {
            this.cardData = 10
        },
        handleSizeChange(val) {
            console.log(`${val} items per page`);
        },
        handleCurrentChange(val) {
            var start = Math.max(0, val - 1);
            var end = this.permohonan.size;
            var newstart = Math.max(0, start * end);
            var newend = val * end;

            this.permohonan.list = newstart;
            this.permohonan.end = newend;

            console.log(`current page: ${val}`);
        },
        getpermohonan() {
            this.page.isLoading = true;
            this.axios
                .post(urlBase.web + "/perizinan/permohonan", {
                    type: "data",
                    status: "proses",
                })
                .then(
                    (r) => (
                        (this.permohonan.data = r.data), (this.page.isLoading = false)
                    )
                );
        },
    },
    components: {
        "video-background": VideoBackground,
    },
};
</script>

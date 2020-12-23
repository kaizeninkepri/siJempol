<template>
<div>
    <el-card class="pd-40">
        <h4 class="tx-bold tx-20">Selamat Datang !</h4>
        <p class="mg-b-0">Halaman Beranda Back Office</p>
        <p>Dinas penanaman Modal Dan Pelayanan Terpadu Satu Pintu Provinsi Kepulauan Riau</p>
    </el-card>
    <div class="pd-40" style="margin-top:-80px; margin-left:20px">
        <el-tabs v-model="activeName">
            <el-tab-pane label="PERMOHONAN" name="first">
                <el-row class="mg-t-10">
                    <el-col :md="24">
                        <!-- <el-button @click="changeCard()">change</el-button> -->
                        <el-card v-loading="page.isLoading">
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
            </el-tab-pane>
            <el-tab-pane label="LACAK BERKAS" name="second">Config</el-tab-pane>
            <el-tab-pane label="CETAK SERAH TERIMA BERKAS" name="third">
                <el-row class="mg-t-10">
                    <el-col :md="24">
                        <!-- <el-button @click="changeCard()">change</el-button> -->
                        <el-card v-loading="page.isLoading">
                            <div class="d-flex align-items-center justify-content-between mg-b-30">

                                <div class="wd-230">
                                    <el-input placeholder="Cari Data Permohonan ..." v-model="cetakBerkas.search" prefix-icon="el-icon-search"></el-input>
                                </div>
                            </div>
                            <!-- d-flex -->

                            <table class="table table-valign-middle mg-b-0 table-hover">
                                <tbody>
                                    <tr v-for="(i,Index) in CetakBerkasFilter.slice(cetakBerkas.list,cetakBerkas.end)" :key="Index">
                                        <td class="pd-l-0-force">
                                            <div class="tx-13 tx-bold mg-b-0">{{i.perusahaan.fullname}}</div>
                                            <div class="tx-12 tx-roboto mg-b-1 tx-primary" v-if="i.perusahaan.kategori != 'perorangan'">{{i.pemohon.nama}}</div>
                                            <p class="tx-12 tx-roboto">{{i.pemohon.contact}} / {{i.pemohon.email}}</p>
                                        </td>
                                        <td class="pd-l-0-force">
                                            <div>
                                                <p class="tx-13 tx-bold mg-b-0 tx-teal">{{i.izin.nama_izin}}</p>
                                                <p class="tx-12 tx-roboto mg-b-0">{{i.opd.opd}} / {{i.izin.kategori}}</p>
                                                <p class="tx-12 tx-roboto mg-b-0">{{i.permohonan_code}}</p>
                                            </div>
                                        </td>
                                        <td class="pd-l-0-force">
                                            <span class="tx-12 tx-roboto mg-b-0">{{i.lastjam}}</span>
                                        </td>
                                        <td class="pd-r-0-force tx-center">
                                            <router-link :to="{path : '/pdf/index', query:{type :'routingSlip', id : i.permohonan_id}}" target="_blank">
                                                <el-button type="primary" size="small" @click="buktiverifikasiOnClick()"> Cetak Bukti Verifikasi </el-button>
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <el-row justify="end" type="flex">
                                <el-col :md="10">
                                    <el-pagination style="float: right" background @size-change="handleSizeChange1" @current-change="handleCurrentChange1" :current-page.sync="cetakBerkas.page" :page-size="cetakBerkas.size" :page-count="cetakBerkas.pagecount" layout="total, prev, pager, next" :total="cetakBerkas.data.length"></el-pagination>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="GRAFIK" name="fourth">
                <ChartPermohonan></ChartPermohonan>
            </el-tab-pane>
        </el-tabs>
    </div>
</div>
</template>

<script>
import urlBase from "@/js/url";
import ChartPermohonan from "@/js/components/chart/permohonan"
export default {
    components: {
        ChartPermohonan
    },
    created() {
        this.getpermohonan()
        this.getCetakSerahTerima()
    },
    computed: {
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
        CetakBerkasFilter() {
            var result = this.cetakBerkas.data
            if (!this.cetakBerkas.search) return result;

            const filterValue = this.cetakBerkas.search.toLowerCase();
                const filter = (event) =>
                    event.perusahaan.fullname.toLowerCase().includes(filterValue) ||
                    event.permohonan_code.toLowerCase().includes(filterValue) ||
                    event.izin.nama_izin.toLowerCase().includes(filterValue);
            
            return result.filter(filter);
        },
    },
    mounted() {
        this.$parent.justcollpasedmenu();
    },
    data() {
        return {
            activeName: 'first',
            page: {
                isLoading: true,
            },
            permohonan: {
                data: [],
                size: 10,
                page: 1,
                list: 0,
                end: 10,
                search: null
            },
            cetakBerkas: {
                data: [],
                size: 10,
                page: 1,
                list: 0,
                end: 10,
                search: null
            },
        };
    },
    methods: {
        buktiverifikasiOnClick(){

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
         handleSizeChange1(val) {
            console.log(`${val} items per page`);
        },
        handleCurrentChange1(val) {
            var start = Math.max(0, val - 1);
            var end = this.cetakBerkas.size;
            var newstart = Math.max(0, start * end);
            var newend = val * end;

            this.cetakBerkas.list = newstart;
            this.cetakBerkas.end = newend;

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
        getCetakSerahTerima() {
            this.page.isLoading = true;
            this.axios
                .post(urlBase.web + "/perizinan/permohonan", {
                    type: "CetakSerahTerima",
                })
                .then(
                    (r) => {
                        this.cetakBerkas.data = r.data
                    }
                );
        }
    }
}
</script>

<style>
.headerFo {
    background: white !important;
    border-bottom: 1px solid #ecf0f3;
}

.el-tabs__item {
    font-weight: bold;
}
</style>

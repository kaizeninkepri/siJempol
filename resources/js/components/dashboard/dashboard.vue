<template>
<div>
    <div class="pd-x-20 pd-sm-x-30 pd-t-20 pd-sm-t-30">
        <h4 class="tx-gray-800 mg-b-5 tx-bold"></h4>
        <p class="mg-b-0"></p>
    </div>
    <div class="br-pagebody">
        <el-row :gutter="20">
            <el-col :md="16">
                <el-row :gutter="10" class="">
                    <el-col :md="24" class="mg-b-20">
                        <el-card style="border-radius:10px">
                            <h4 class="tx-bold tx-20">Selamat Datang !</h4>
                            <p class="mg-b-0">Halaman Beranda Back Office</p>
                            <p>Dinas penanaman Modal Dan Pelayanan Terpadu Satu Pintu Provinsi Kepulauan Riau</p>
                        </el-card>
                    </el-col>
                    <el-col :md="24" class="mg-b-20">
                        <el-tabs v-model="activeName">
                            <el-tab-pane label="VALIDASI KEABSAHAN DOKUMEN" name="first">
                                <div class="d-flex align-items-center justify-content-between mg-b-5">
                                    <h5 class="tx-gray-800 tx-15 tx-bold">VERIFIKASI BERKAS MASUK
                                    </h5>
                                    <el-col :md="8" class="d-flex align-items-center justify-content-end">
                                        <ion-icon name="document-text-outline" class="tx-20 tx-primary"></ion-icon> <span class="tx-bold">{{keabsahan.data.length}}</span>
                                        <el-input class="col-md-10" size="small" v-model="keabsahan.search" placeholder="Ketik Nama perusahaan / izin"></el-input>
                                    </el-col>
                                </div>
                                <el-card style="border-radius:10px;">
                                    <table class="table" style="min-height:620px">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Nama Perusahaan</th>
                                                <th>Izin</th>
                                                <th>Tanggal/Waktu</th>
                                                <th>Pengaturan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(i, Index) in IzinKeabsahan.slice(keabsahan.list, keabsahan.end)" :key="Index">
                                                <td>{{Index + 1}}</td>
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
                                                    <router-link :to="{name: 'bo-permohonan-detail', params: { id: i.permohonan_id }}">
                                                        <el-button style="background:#0488A1; color:white; border:none" size="small">Verifikasi</el-button>
                                                    </router-link>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <el-row justify="end" type="flex">
                                        <el-col :md="10">
                                            <el-pagination style="float: right" background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="keabsahan.page" :page-size="keabsahan.size" :page-count="keabsahan.pagecount" layout="total, prev, pager, next" :total="keabsahan.data.length"></el-pagination>
                                        </el-col>
                                    </el-row>
                                </el-card>
                            </el-tab-pane>
                            <el-tab-pane label="PERMINTAAN TELAAH TEKNIS" name="second">
                                <div class="d-flex align-items-center justify-content-between mg-b-5">
                                    <h5 class="tx-gray-800 tx-15 tx-bold">PENGIRIMAN TELAAH TEKNIS
                                    </h5>
                                    <el-col :md="8" class="d-flex align-items-center justify-content-end">
                                        <ion-icon name="document-text-outline" class="tx-20 tx-primary"></ion-icon> <span class="tx-bold">{{telaah.data.length}}</span>
                                        <el-input class="col-md-10" size="small" v-model="telaah.search" placeholder="Ketik Nama perusahaan / izin"></el-input>
                                    </el-col>
                                </div>
                                <el-card style="border-radius:10px;">
                                    <table class="table" style="min-height:620px">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Nama Perusahaan</th>
                                                <th>Izin</th>
                                                <th>Tanggal/Waktu</th>
                                                <th>Pengaturan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(i, Index) in IzinPermintaanTelaah.slice(telaah.list, telaah.end)" :key="Index">
                                                <td>{{Index + 1}}</td>
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
                                                    <router-link :to="{name: 'bo-surat-permintaan', params: { id: i.permohonan_id }}">
                                                        <el-button style="background:#c8b046; color:white; border:none" size="small">Upload Surat</el-button>
                                                    </router-link>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <el-row justify="end" type="flex">
                                        <el-col :md="10">
                                            <el-pagination style="float: right" background @size-change="handleSizeChangetelaah" @current-change="handleCurrentChangetelaah" :current-page.sync="telaah.page" :page-size="telaah.size" :page-count="telaah.pagecount" layout="total, prev, pager, next" :total="telaah.data.length"></el-pagination>
                                        </el-col>
                                    </el-row>
                                </el-card>
                            </el-tab-pane>
                            <el-tab-pane label="DRAFT SK" name="third">
                                <div class="d-flex align-items-center justify-content-between mg-b-5">
                                    <h5 class="tx-gray-800 tx-15 tx-bold">SEDANG DALAM PERBAIKAN
                                    </h5>
                                    <el-col :md="8" class="d-flex align-items-center justify-content-end">
                                        <ion-icon name="document-text-outline" class="tx-20 tx-primary"></ion-icon> <span class="tx-bold">{{telaah.data.length}}</span>
                                        <el-input class="col-md-10" size="small" v-model="telaah.search" placeholder="Ketik Nama perusahaan / izin"></el-input>
                                    </el-col>
                                </div>
                                
                            </el-tab-pane>
                            <el-tab-pane label="SK" name="four">
                                <div class="d-flex align-items-center justify-content-between mg-b-5">
                                    <h5 class="tx-gray-800 tx-15 tx-bold">SEDANG DALAM PERBAIKAN
                                    </h5>
                                    <el-col :md="8" class="d-flex align-items-center justify-content-end">
                                        <ion-icon name="document-text-outline" class="tx-20 tx-primary"></ion-icon> <span class="tx-bold">{{telaah.data.length}}</span>
                                        <el-input class="col-md-10" size="small" v-model="telaah.search" placeholder="Ketik Nama perusahaan / izin"></el-input>
                                    </el-col>
                                </div>
                                
                            </el-tab-pane>
                             <el-tab-pane label="GRAFIK" name="five">
                                     <ChartPermohonan></ChartPermohonan>                                
                            </el-tab-pane>
                        </el-tabs>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :md="8">
                <el-row :gutter="10">
                    <el-col :md="12" class="mg-b-10">
                        <el-card :body-style="{ padding: '10px', background:'#46B4C8', color:'white', minHeight: '120px' }">
                            <div class="d-flex align-items-center mg-b-15">
                                <ion-icon name="qr-code-outline" class="tx-30"></ion-icon>
                                <div class="mg-l-20">
                                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">Barcode</p>
                                </div>
                            </div>
                            <center>
                                <el-button style="background:#0488A1; color:white; border:none" @click="$refs.Barcode.onPopUp()">Cetak Barcode</el-button>
                            </center>
                        </el-card>
                    </el-col>
                    <el-col :md="12" class="mg-b-10">
                        <el-card :body-style="{ padding: '10px', background:'#455CC7', color:'white', minHeight: '120px' }">
                            <div class=" d-flex align-items-center mg-b-15">
                                <ion-icon name="barcode-outline" class="tx-30"></ion-icon>
                                <div class="mg-l-20">
                                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">Checlist</p>
                                </div>
                            </div>
                            <center>
                                <el-button style="background:#122996; color:white; border:none">Cetak Checklist</el-button>
                            </center>
                        </el-card>
                    </el-col>
                    <el-col :md="12" class="mg-b-10">
                        <el-card :body-style="{ padding: '10px', background:'#8546C8', color:'white', minHeight: '120px' }">
                            <div class=" d-flex align-items-center">
                                <ion-icon name="shield-checkmark-outline" class="tx-30"></ion-icon>
                                <div class="mg-l-20">
                                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">Security</p>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :md="12" class="mg-b-10">
                        <el-card :body-style="{ padding: '10px', background:'#8546C8', color:'white', minHeight: '120px' }">
                            <div class=" d-flex align-items-center">
                                <ion-icon name="shield-checkmark-outline" class="tx-30"></ion-icon>
                                <div class="mg-l-20">
                                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">Tracking</p>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :md="24" class="mg-b-20 mg-t-20">
                        <div class="d-flex align-items-center justify-content-between mg-b-5">
                            <h5 class="tx-gray-800 tx-15 tx-bold">Member Front Office
                            </h5>
                            <el-col :md="12" class="d-flex align-items-center justify-content-end">
                                <el-input class="col-md-10" size="small" placeholder="Ketik Nama perusahaan / izin"></el-input>
                            </el-col>
                        </div>
                        <el-card style="border-radius:10px">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(i, Index) in frontoffice" :key="Index">
                                        <td>{{Index+1}}</td>
                                        <td>{{i.email}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :md="12" class="mg-b-10">
                        <el-card :body-style="{ padding: '10px', background:'#46B4C8', color:'white', minHeight: '120px' }">
                            <div class="d-flex align-items-center mg-b-15">
                                <ion-icon name="mail-unread-outline" class="tx-30"></ion-icon>
                                <div class="mg-l-20">
                                    <p class="tx-20 tx-lato tx-bold mg-b-2 lh-1">Surat Masuk</p>
                                </div>
                            </div>
                            <center>
                                <el-button style="background:#0488a1; color:white; border:none" @click="SuratTelaahOnClick('Surat Masuk','2')">Lihat Data</el-button>
                            </center>
                        </el-card>
                    </el-col>
                    <el-col :md="12" class="mg-b-10">
                        <el-card :body-style="{ padding: '10px', background:'#C8B046', color:'white', minHeight: '120px' }">
                            <div class=" d-flex align-items-center mg-b-15">
                                <ion-icon name="mail-open-outline" class="tx-30"></ion-icon>
                                <div class="mg-l-20">
                                    <p class="tx-20 tx-lato tx-bold mg-b-2 lh-1">Surat Keluar</p>
                                </div>
                            </div>
                            <center>
                                <el-button style="background:#A99127; color:white; border:none" @click="SuratTelaahOnClick('Surat Keluar','1')">Lihat Data</el-button>
                            </center>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
    <suratTelaah ref="suratTelaah" :title="telaah.title"></suratTelaah>
    <BarcodeData ref="Barcode" :title="barcode.title"></BarcodeData>

</div>
</template>

<script>
import urlBase from "@/js/url";
import BarcodeData from "@/js/components/permohonan/popUpdata";
import suratTelaah from "@/js/components/surat/modalSurat";
import ChartPermohonan from "@/js/components/chart/permohonan"
// s
export default {
    components: {
        BarcodeData,
        suratTelaah,
        ChartPermohonan
    },
    data() {
        return {
            activeName: "first",
            barcode: {
                title: "Cetak Barcode SK"
            },
            keabsahan: {
                data: [],
                size: 5,
                page: 1,
                list: 0,
                end: 5,
                search: null,
            },
            telaah: {
                title: null,
                data: [],
                size: 5,
                page: 1,
                list: 0,
                end: 5,
                search: null,
            },
            frontoffice: [],
            options: {
                perPage: 2,
                gap: '0.5rem',
            },
        }
    },
    computed: {
        telaahTerkirim() {
            var total = 0;
            this.telaah.data.forEach((e) => {
                if (e.suratpermintaan.length >= 1) {
                    total = total + 1;
                }
            });
            return total;
        },
        telaahPending() {
            var total = 0;
            this.telaah.data.forEach((e) => {
                if (e.suratpermintaan.length <= 0) {
                    total = total + 1;
                }
            });
            return total;
        },
        IzinKeabsahan() {
            var result = this.keabsahan.data
            if (!this.keabsahan.search) return result;

            const filterValue = this.keabsahan.search.toLowerCase();

            const filter = (event) =>
                event.perusahaan.fullname.toLowerCase().includes(filterValue) ||
                event.permohonan_code.toLowerCase().includes(filterValue) ||
                event.opd.opd.toLowerCase().includes(filterValue) ||
                event.izin.nama_izin.toLowerCase().includes(filterValue) ||
                event.pemohon.nama.toLowerCase().includes(filterValue);

            return result.filter(filter);
        },
        IzinPermintaanTelaah() {
            var result = this.telaah.data
            if (!this.telaah.search) return result;

            const filterValue = this.telaah.search.toLowerCase();

            const filter = (event) =>
                event.perusahaan.fullname.toLowerCase().includes(filterValue) ||
                event.permohonan_code.toLowerCase().includes(filterValue) ||
                event.opd.opd.toLowerCase().includes(filterValue) ||
                event.izin.nama_izin.toLowerCase().includes(filterValue) ||
                event.pemohon.nama.toLowerCase().includes(filterValue);

            return result.filter(filter);
        }
    },
    created() {
        this.getValidasi();
        this.getTelaah();
        this.getFrontOffice();
    },
    mounted() {
        this.$parent.justcollpasedmenu();
    },
    methods: {
        SuratTelaahOnClick(a, kategori) {
            this.telaah.title = a
            this.$refs.suratTelaah.onPopUp(kategori)
        },
        handleSizeChange(val) {
            console.log(`${val} items per page`);
        },
        handleCurrentChange(val) {
            var start = Math.max(0, val - 1);
            var end = this.keabsahan.size;
            var newstart = Math.max(0, start * end);
            var newend = val * end;

            this.keabsahan.list = newstart;
            this.keabsahan.end = newend;

            console.log(`current page: ${val}`);
        },
        handleSizeChangetelaah(val) {
            console.log(`${val} items per page`);
        },
        handleCurrentChangetelaah(val) {
            var start = Math.max(0, val - 1);
            var end = this.telaah.size;
            var newstart = Math.max(0, start * end);
            var newend = val * end;

            this.telaah.list = newstart;
            this.telaah.end = newend;

            console.log(`current page: ${val}`);
        },
        getValidasi() {
            this.axios
                .post(urlBase.web + "/perizinan/permohonan", {
                    type: "PermohonanKeabsahan",
                })
                .then((r) => {
                    this.keabsahan.data = r.data
                });
        },
        getTelaah() {
            this.axios
                .post(urlBase.web + "/perizinan/permohonan", {
                    type: "PermohonanPermintaanTelaah",
                })
                .then((r) => {
                    this.telaah.data = r.data
                });
        },
        getFrontOffice() {
            this.axios
                .post(urlBase.web + "/master/users", {
                    type: "dataByrole",
                    role: "3"
                })
                .then((r) => {
                    this.frontoffice = r.data
                });
        },
        onClickSuratTerkirim() {
            alert();
        }
    }
}
</script>

<style>
.el-tabs__item {
    font-weight: bold;
}
</style>

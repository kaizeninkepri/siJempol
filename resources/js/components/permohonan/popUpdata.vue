<template>
<div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                        <h5 class="tx-gray-800 tx-15 tx-bold">{{title}}
                        </h5>
                        <el-col :md="18" class="d-flex align-items-center justify-content-end">
                            <el-input class="col-md-10" size="small" v-model="barcode.search" placeholder="Ketik Nama perusahaan / izin"></el-input>
                        </el-col>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
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
                            <tr v-for="(i, Index) in barcodeFilter.slice(barcode.list, barcode.end)" :key="Index">
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
                                    <a :href="url.barcode+'='+i.permohonan_id" download>download</a>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <el-row justify="end" type="flex">
                        <el-col :md="10">
                            <el-pagination style="float: right" background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="barcode.page" :page-size="barcode.size" :page-count="barcode.pagecount" layout="total, prev, pager, next" :total="barcode.data.length"></el-pagination>
                        </el-col>
                    </el-row>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import urlBase from "@/js/url";
export default {
    data() {
        return {
            url : {
                barcode : urlBase.web + '/pdf/index?type=ttdKadisBarcode&permohonanId',
            },
            barcode: {
                data: [],
                size: 5,
                page: 1,
                list: 0,
                end: 5,
                search: null,
            }
        }
    },
    computed: {
        barcodeFilter() {
            var result = this.barcode.data
            if (!this.barcode.search) return result;

            const filterValue = this.barcode.search.toLowerCase();

            const filter = (event) =>
                event.perusahaan.fullname.toLowerCase().includes(filterValue) ||
                event.permohonan_code.toLowerCase().includes(filterValue) ||
                event.opd.opd.toLowerCase().includes(filterValue) ||
                event.izin.nama_izin.toLowerCase().includes(filterValue) ||
                event.pemohon.nama.toLowerCase().includes(filterValue);

            return result.filter(filter);
        }
    },
    props: ['title'],
    methods: {
        handleSizeChange(val) {
            console.log(`${val} items per page`);
        },
        handleCurrentChange(val) {
            var start = Math.max(0, val - 1);
            var end = this.barcode.size;
            var newstart = Math.max(0, start * end);
            var newend = val * end;

            this.barcode.list = newstart;
            this.barcode.end = newend;

            console.log(`current page: ${val}`);
        },
        onPopUp(a) {
            $("#exampleModal").modal();
            this.getTelaah()
        },
        getTelaah() {
            this.axios
                .post(urlBase.web + "/perizinan/permohonan", {
                    type: "PermohonanPermintaanTelaah",
                })
                .then((r) => {
                    this.barcode.data = r.data
                });
        },
    }
}
</script>

<style scoped>
.modal {
    padding: 20px !important;
}

.modal .modal-dialog {
    width: 100%;
    max-width: none;
    height: 100%;
    margin: 0;
}

.modal .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
}

.modal .modal-body {
    overflow-y: auto;
}
</style>

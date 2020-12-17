<template>
<div>
    <div class="modal fade" id="modalSurat" tabindex="-1" role="dialog" aria-labelledby="modalSurat" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="tx-gray-800 tx-15 tx-bold">{{title}}
                    </h5>
                    <el-col :md="18" class="d-flex align-items-center justify-content-end">
                        <el-input class="col-md-10" size="small" v-model="surat.search" placeholder="Ketik Nama perusahaan / izin"></el-input>
                    </el-col>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nomor Surat</th>
                                <th>Perihal</th>
                                <th>Nama Izin</th>
                                <th>Opd</th>
                                <th>Perusahaan</th>
                                <th>Pengaturan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(i, Index) in suratFilter.slice(surat.list, surat.end)" :key="Index">
                                <td>{{Index + 1}}</td>
                                <td>{{i.nomor}}</td>
                                <td>{{i.perihal}}</td>
                                <td>{{i.permohonan.izin.nama_izin}}</td>
                                <td>{{i.opd.opd}}</td>
                                <td>{{i.permohonan.perusahaan.fullname}}</td>
                                <td>
                                    <el-button type="primary" icon="el-icon-printer">Cetak</el-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <el-row justify="end" type="flex">
                        <el-col :md="10">
                            <el-pagination style="float: right" background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="surat.page" :page-size="surat.size" :page-count="surat.pagecount" layout="total, prev, pager, next" :total="surat.data.length"></el-pagination>
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
            surat: {
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
        suratFilter() {
            var result = this.surat.data
            if (!this.surat.search) return result;

            const filterValue = this.surat.search.toLowerCase();

            const filter = (event) =>
                event.permohonan.perusahaan.fullname.toLowerCase().includes(filterValue) ||
                event.nomor.toLowerCase().includes(filterValue) ||
                event.opd.opd.toLowerCase().includes(filterValue) ||
                event.permohonan.izin.nama_izin.toLowerCase().includes(filterValue) ||
                event.perihal.toLowerCase().includes(filterValue);

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
            var end = this.surat.size;
            var newstart = Math.max(0, start * end);
            var newend = val * end;

            this.surat.list = newstart;
            this.surat.end = newend;

            console.log(`current page: ${val}`);
        },
        resetdata() {
            this.surat.page = 1
            this.surat.search = null
            this.surat.list = 0,
                this.surat.end = 5
        },
        onPopUp(kategori) {

            this.resetdata();
            $("#modalSurat").modal();
            this.getTelaah(kategori)
        },
        getTelaah(kategori) {
            this.axios
                .post(urlBase.web + "/surat", {
                    type: "getSuratByKategori",
                    kategori: kategori
                })
                .then((r) => {
                    this.surat.data = r.data
                    console.log(this.surat.data)
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

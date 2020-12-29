<template>
<div>
    <transition mode="out-in" name="fade">
        <div v-if="page.isLoading" key="info">
            <skeleton></skeleton>
        </div>
        <div v-else key="warning">
            <div class="br-msg-header d-flex justify-content-between">
                <div class="pd-x-0 pd-t-30">
                    <h4 class="tx-gray-800 mg-b-5">PENGECEKAN PAJAK KENDARAAN BERMOTOR</h4>
                    <p class="mg-b-10" v-if="user.role">{{user.role.role}}</p>
                    <span><sup class="tx-danger mg-b-5">*</sup> Untuk Badan Usaha Nama pada Kotak Pencarian Sesuai Dengan Nama yang berada Di Kartu Nomor Pokok Wajib Pajak (NPWP)</code></span>
                    <p><sup class="tx-danger">*</sup> contoh untuk Pajak Kendaran Badan Usaha. <code>PT.Example, CV.Example, yayasan Example</code></p>
                </div>
            </div>
            <div class="br-pagebody">
                <el-card class="mg-b-20">
                    <el-row :gutter="5" justify="center" type="flex" align="center">
                        <el-col :md="3">
                            <el-select v-model="pencarian.kategori" placeholder="Kategori Pencarian">
                                <el-option label="nama" value="Nama">
                                </el-option>
                                <el-option label="noreg" value="Nopol">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :md="8">
                            <el-input placeholder="Ketik Nama Wajib Pajak / No Registrasi Kendaraan Bermotor" prefix-icon="el-icon-search" v-model="pencarian.value"></el-input>
                        </el-col>
                        <el-col :md="3">
                            <el-button @click="getResult()" type="primary" :disabled="!pencarian.value">Cek</el-button>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card v-if="table.show">
                    <el-table :data="table.data.filter(data => !table.search 
                  || data.value.toLowerCase().includes(table.search.toLowerCase())
                )" style="width: 100%">
                        <el-table-column type="index" label="No" width="50"></el-table-column>
                        <el-table-column prop="nama" label="Nama Wajib Pajak"></el-table-column>
                        <el-table-column prop="alamat" label="alamat"></el-table-column>
                        <el-table-column prop="nopol" width="120" label="Jumlah Izin" align="center"></el-table-column>
                        <el-table-column prop="tgmspajak" label="Tanggal Masa Pajak" align="center"></el-table-column>
                        <el-table-column prop="ket" label="Keterangan" width="180">
                            <template slot-scope="scope">
                                <span v-if="scope.row.ket == 'Valid'">
                                    <p class="tx-success">{{scope.row.ket}}</p>
                                </span>
                                <span v-else>
                                    <p class="tx-danger">{{scope.row.ket}}</p>
                                </span>
                            </template>
                        </el-table-column>
                        <!-- <el-table-column prop="address" label="Aksi" width="180">
                            <template slot-scope="scope">
                                <a :href="scope.row.linkPDF" target="_blank">
                                    <i class="el-icon-printer"></i> Cetak Persyaratan
                                </a>
                            </template>
                        </el-table-column> -->
                    </el-table>
                </el-card>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
import urlBase from "@/js/url";
import skeleton from "@/js/components/dashboard/pemohon_skeleton";
export default {
    data() {
        return {
            page: {
                isLoading: true,
            },
            pencarian: {
                kategori: null,
                value: null,
            },
            table: {
                search: null,
                data: [],
                size: 10,
                page: 1,
                list: 0,
                end: 10,
                show : false,
            },
            
        };
    },
    mounted() {
        this.page.isLoading = false;
    },
    created() {

    },
    computed: {
        user() {
            return this.$store.state.StoreUser.user;
        },
    },
    methods: {
        getResult() {
            this.axios
                .post(urlBase.web + "/integration", {
                    data: this.pencarian
                })
                .then((r) => {
                    alert(JSON.stringify(r.data))
                });
        },
    },
    components: {
        skeleton,
    },
};
</script>

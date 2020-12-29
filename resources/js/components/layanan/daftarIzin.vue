<template>
<div>
    <transition mode="out-in" name="fade">
        <div v-if="page.isLoading" key="info">
            <skeleton></skeleton>
        </div>
        <div v-else key="warning">
            <div class="br-msg-header d-flex justify-content-between">
                <div class="pd-x-0 pd-t-30">
                    <h4 class="tx-gray-800 mg-b-5">DAFTAR LAYANAN PERIZINAN & NON PERIZINAN</h4>
                    <p class="mg-b-0" v-if="user.role">{{user.role.role}}</p>
                </div>
            </div>
            <div class="br-pagebody">
                <el-card class="mg-b-20">
                    <el-row :gutter="10">
                        <el-col :md="8">
                            <el-input placeholder="Cari Nama Izin / Sektor " prefix-icon="el-icon-search" v-model="table.search"></el-input>
                        </el-col>
                        <el-col :md="8">
                            <el-select v-model="table.search" placeholder="Select">
                                <el-option v-for="item in opd" :key="item.opd_id" :label="item.opd" :value="item.opd_id">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card>
                    <el-table :data="tabledata.filter(data => !table.search 
                  || data.value.toLowerCase().includes(table.search.toLowerCase()) 
                )" style="width: 100%">
                        <el-table-column type="index" label="No" width="50"></el-table-column>
                        <el-table-column prop="value" label="Nama Izin"></el-table-column>
                        <el-table-column prop="persyaratan_count" width="120" label="Jumlah Izin" align="center"></el-table-column>
                        <el-table-column prop="opd.opd" label="Sektor"></el-table-column>
                        <el-table-column prop="kategori" label="Kategori" width="180"></el-table-column>
                        <el-table-column prop="address" label="Aksi" width="300">
                            <template slot-scope="scope">
                                <router-link :to="{name : 'pemohon-pengajuan', params:{'id' : scope.row.Crypt}}" class="btn btn-primary btn-with-icon" v-if="user.role.role_id == '5'">
                                    <el-button type="primary" size="small">Pengajuan Online </el-button>
                                </router-link>
                                <a :href="scope.row.linkPDF" target="_blank">
                                    <i class="el-icon-printer"></i> Cetak Persyaratan
                                </a>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-row justify="end" type="flex">
                        <el-col :md="10">
                            <el-pagination style="float: right" background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="table.page" :page-size="table.size" layout="total, prev, pager, next" :total="table.data.length"></el-pagination>
                        </el-col>
                    </el-row>
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
            opd: [],
            table: {
                search: null,
                data: [],
                size: 10,
                page: 1,
                list: 0,
                end: 10,
            },
        };
    },
    mounted() {
        this.page.isLoading = false;
    },
    created() {
        this.getIzin();
        this.getopd();
    },
    computed: {
        user() {
            return this.$store.state.StoreUser.user;
        },
        tabledata() {
            return this.table.data.slice(this.table.list, this.table.end);
        },
    },
    methods: {
        handleSizeChange(val) {
            console.log(`${val} items per page`);
        },
        handleCurrentChange(val) {
            var start = Math.max(0, val - 1);
            var end = this.table.size;
            var newstart = Math.max(0, start * end);
            var newend = val * end;

            this.table.list = newstart;
            this.table.end = newend;

            console.log(`current page: ${val}`);
        },
        getIzin() {
            this.page.isLoading = true;
            this.axios
                .post(urlBase.web + "/opd/izin", {
                    type: "namaIzin",
                })
                .then((r) => {
                    this.table.data = r.data;
                });
        },

        getopd() {
            this.page.isLoading = true;
            this.axios
                .post(urlBase.web + "/master/opd", {
                    type: "dataAll",
                })
                .then((r) => {
                    this.opd = r.data;
                });
        },
    },
    components: {
        skeleton,
    },
};
</script>

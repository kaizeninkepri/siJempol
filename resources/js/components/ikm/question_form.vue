<template>
<div>
    <transition mode="out-in" name="fade">
        <div v-if="page.isLoading" key="info">
            <skeleton></skeleton>
        </div>
        <div v-else key="warning">
            <div class="br-msg-header d-flex justify-content-between">
                <div class="pd-x-0 pd-t-30">
                    <h4 class="tx-gray-800 mg-b-5 tx-bold">INDIKATOR IKM</h4>
                    <p class="mg-b-0" v-if="user.role">{{user.role.role}}</p>
                </div>
                <router-link :to="{name :'ikm-question'}">
                    <el-button type="warning">Kembali</el-button>
                </router-link>
            </div>
            <div class="br-pagebody">
                <el-card v-for="(i,Index) in indikator.data" :key="Index" class="mg-b-10">
                    <table style="width:100%">
                        <tbody>
                            <tr>
                                <td valign="top">{{Index + 1}}</td>
                                <td valign="top">
                                    <el-input v-model="i.indikator" placeholder="Uraian Indikator"></el-input>
                                    <div class="pd-l-50 pd-t-10">
                                        <el-row :gutter="10" v-for="(p,Pindex) in i.point" :key="Pindex" class="b mg-b-10">
                                            <el-col :md="18">
                                                <el-input v-model="p.text" size="small" placeholder="point Indikator"></el-input>
                                            </el-col>
                                            <el-col :md="4">
                                                <el-input v-model="p.nilai" size="small" placeholder="Nilai Indikator"></el-input>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </el-card>
                <el-card>
                    <el-button @click="indikatorAdd()">Tambah Indikator</el-button>
                </el-card>
                <pre>{{indikator}}</pre>
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
            indikator: {
                data: [{
                    indikator: null,
                    point: [{
                        text: null,
                        nilai: null,
                    }, {
                        text: null,
                        nilai: null,
                    }, {
                        text: null,
                        nilai: null,
                    }, {
                        text: null,
                        nilai: null,
                    }]
                }]
            }
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
        indikatorAdd() {
            var AddData = this.indikator.data[0]
            this.indikator.data.push(AddData)
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

<style scoped>

</style>

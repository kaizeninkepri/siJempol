<template>
<div>
    <div class="d-flex align-items-center justify-content-center ht-100v" style="background: #d0dcec">
        <div class="wd-lg-800 wd-xs-450 bg-white rounded shadow-base">
            <el-row type="flex">
                <el-col :md="14" style="background: #267dff; color:white" class="hidden-sm-down pd-25">
                    <h3 class="tx-bold">Selamat Datang</h3>
                    <p class="mg-t-30 mg-b-0">"Proses Perizinan Dengan Jarimu"</p>
                    <p class="mg-t-0">Layanan Perizinan Dan Non Perizinan</p>
                    <p class="mg-t-10 mg-b-0">Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu</p>
                    <p class="mg-b-30">Provinsi Kepulauan Riau</p>
                    <a :href="url.pendaftaran" class="daftarakun mg-t-50">Daftar Akun</a>
                </el-col>
                <el-col :md="10" class="pd-25">
                    <div class="signin-logo tx-center tx-28 tx-bold tx-inverse">
                        <span class="tx-normal">[</span> SI JEMPOL
                        <span class="tx-normal">]</span>
                    </div>
                    <div class="tx-center mg-b-60">DPMPTSP KEPRI</div>
                    <div class="form-group">
                        <el-input placeholder="Email / Username " v-model="account.email" class="is-invalid" clearable></el-input>
                    </div>
                    <!-- form-group -->
                    <div class="form-group ">
                        <el-input placeholder="password"  @keyup.enter.native="ToLogin()" v-model="account.password" show-password clearable></el-input>
                        <!-- <a href class="tx-info tx-12 d-block mg-t-10">Forgot password?</a> -->
                    </div>
                    <!-- form-group -->
                    <el-button type="primary" :loading="button.isLoading" style="width:100% !important; margin-bottom : 20px; clear:both" @click="ToLogin()">{{button.text}}</el-button>
                    <el-alert v-if="error" title="Username / Password Salah" type="error" show-icon>
                    </el-alert>
                </el-col>
            </el-row>

        </div>
        <!-- login-wrapper -->
    </div> --}}
</div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
import urlBase from "@/js/url";
export default {
    data() {
        return {
            url :{
                pendaftaran : urlBase.web + '/pendaftaran'
            },
            account: {
                email: null,
                password: null
            },
            button: {
                text: 'Login',
                isLoading: false
            },
            error: false
        }
    },
    methods: {
        ToLogin() {
            this.button.text = "Memuat Halaman",
                this.button.isLoading = true
            this.axios
                .post(urlBase.web + "/login/submit", {
                    email: this.account.email,
                    password: this.account.password,
                })
                .then(
                    (r) => {
                        console.log(r.data)
                        r.data.code == '200' ? this.OnSuccessLogin(r.data) : this.OnErrorLogin();
                    }
                );
        },
        OnErrorLogin() {
            this.account.password = null
            this.button.isLoading = false
            this.button.text = 'login'
            this.error = true
        },
        OnSuccessLogin(url) {
            window.location.href = urlBase.web + '/' + url.url
        }

    }
}
</script>

<style scoped>
.daftarakun{
    padding: 10px;
    color: white;
    font-weight: bold;
    border: 1px solid white;
    border-radius: 10px;
}
.daftarakun:hover{
    color: black;
    background: white;
}
</style>

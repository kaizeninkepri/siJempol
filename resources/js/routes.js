import Vue from 'vue';
import VueRouter from 'vue-router';

import urlBase from '@/js/url';
// import rolesmodul from '@/js/components/roles/modul'
// import rolespermission from '@/js/components/roles/permission'

const layananIzin = () => import( /* webpackChunkName: "dashboard" */ '@/js/components/layanan/daftarIzin')


const dashboard = () => import( /* webpackChunkName: "dashboard" */ '@/js/components/dashboard/fo')
const dashboardBo = () => import( /* webpackChunkName: "BODashboard" */ '@/js/components/dashboard/dashboard')
const pemohonDashboard = () => import( /* webpackChunkName: "Pemohondashboard" */ '@/js/components/dashboard/pemohon')

const permohonanDetail = () => import( /* webpackChunkName: "foPermohonan" */ '@/js/components/permohonan/detail')
const permohonanDetailBO = () => import( /* webpackChunkName: "BOValidasi" */ '@/js/components/validasi/detail')

const rolesmodul = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/modul')
const rolesmodulform = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/modul_form')
const rolespermission = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/permission')
const rolespermissionform = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/permission_form')

const trackByid = () => import( /* webpackChunkName: "trackBYid" */ '@/js/components/track/trackByid')

/* --------------------- PEROMOHONAN COMPONEN --------------------------*/

const pemohonPengajuan = () => import( /* webpackChunkName: "pemohonPermohonan" */ '@/js/components/pemohon/permohonan/pengajuan')
const pemohonPengajuan2 = () => import( /* webpackChunkName: "pemohonPermohonan" */ '@/js/components/pemohon/permohonan/pengajuan2')

/* --------------------- PEROMOHONAN COMPONEN --------------------------*/
const suratpermintaan = () => import( /* webpackChunkName: "surat" */ '@/js/components/surat/permintaan')
const suratrekomendasipermintaan = () => import( /* webpackChunkName: "surat" */ '@/js/components/rekomendasi/detail')
const suratrekomendasipermintaanData = () => import( /* webpackChunkName: "surat" */ '@/js/components/rekomendasi/data')

const passwordGanti = () => import( /* webpackChunkName: "surat" */ '@/js/components/password/gantiPassword')

const indexKepuasan = () => import( /* webpackChunkName: "Ind" */ '@/js/components/pengaduan/indexKepuasan')
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: urlBase.base,
    hash: false,
    routes: [
        /* ----------UMUM---------------*/
        {
            path: '/layanan/izin',
            name: 'layanan-izin',
            component: layananIzin,
        },
        /* ----------FROMT OFFICE UMUM---------------*/
        {
            path: '/fo/dashboard',
            name: 'fo-dashboard',
            component: dashboard,
        },
        {
            path: '/fo/permohonan/detail/:id',
            name: 'fo-permohonan-detail',
            component: permohonanDetail,
        },
        /* ----------BACK OFFICE ROUTE---------------*/
        {
            path: '/bo/dashboard',
            name: 'bo-dashboard',
            component: dashboardBo,
        },
        {
            path: '/bo/permohonan/detail/:id',
            name: 'bo-permohonan-detail',
            component: permohonanDetailBO,
        },
        {
            path: '/bo/surat/permintaan/:id',
            name: 'bo-surat-permintaan',
            component: suratpermintaan,
        },
        {
            path: '/bo/rekomendasi/permintaan/:id',
            name: 'bo-surat-rekomendasi-permintaan',
            component: suratrekomendasipermintaan,
        },
        {
            path: '/rekomendasi/teknis',
            name: 'bo-surat-rekomendasi-data',
            component: suratrekomendasipermintaanData,
        },
        {
            path: '/indexKepuasan',
            name: 'indexKepuasan',
            component: indexKepuasan,
        },
        {
            path: '/roles/modul',
            name: 'roles-modul',
            component: rolesmodul,
            children: [{
                path: 'form',
                name: 'roles-modul-form',
                component: rolesmodulform,
            }]
        },
        {
            path: '/roles/permission',
            name: 'roles-permission',
            component: rolespermission,
            children: [{
                path: 'form',
                name: 'roles-permission-form',
                component: rolespermissionform,
            }]
        },
        {
            path: '/pemohon/track/:id',
            name: 'track-byId',
            component: trackByid,
        },
        /* ----------PEMOHON ROUTE---------------*/
        {
            path: '/pemohon/dashboard',
            name: 'pemohon-dashboard',
            component: pemohonDashboard,
        },
        {
            path: '/pemohon/pengajuan/:id',
            name: 'pemohon-pengajuan',
            component: pemohonPengajuan,
        },
        {
            path: '/pemohon/pengajuan/2/:id',
            name: 'pemohon-pengajuan-step',
            component: pemohonPengajuan2,
        },
        {
            path: '/password/ganti',
            name: 'pemohon-password-ganti',
            component: passwordGanti,
        },



    ]
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';

import urlBase from '@/js/url';
// import rolesmodul from '@/js/components/roles/modul'
// import rolespermission from '@/js/components/roles/permission'

const layananIzin = () => import( /* webpackChunkName: "dashboard" */ '@/js/components/layanan/daftarIzin')
const tatacaraDokumen = () => import( /* webpackChunkName: "dashboard" */ '@/js/components/tatacara/daftar')
const bp2rd = () => import( /* webpackChunkName: "dashboard" */ '@/js/components/integration/bp2rd')
const usersIdentitas = () => import( /* webpackChunkName: "Users" */ '@/js/components/users/identitas')


const perusahaanData = () => import( /* webpackChunkName: "perusahaan" */ '@/js/components/perusahaanData/data')


const dashboard = () => import( /* webpackChunkName: "dashboard" */ '@/js/components/dashboard/fo')
const dashboardBo = () => import( /* webpackChunkName: "BODashboard" */ '@/js/components/dashboard/dashboard')
const pemohonDashboard = () => import( /* webpackChunkName: "Pemohondashboard" */ '@/js/components/dashboard/pemohon')
const pemohonpermohonanpengajuan = () => import( /* webpackChunkName: "Pemohondashboard" */ '@/js/components/dashboard/pemohon_permohonan')
const dashboardOpd = () => import( /* webpackChunkName: "Pemohondashboard" */ '@/js/components/dashboard/opdDashboard')

const permohonanData = () => import( /* webpackChunkName: "foPermohonan" */ '@/js/components/permohonan/data')
const permohonanDetail = () => import( /* webpackChunkName: "foPermohonan" */ '@/js/components/permohonan/detail')
const permohonanDetailBO = () => import( /* webpackChunkName: "BOValidasi" */ '@/js/components/validasi/detail')

const rolesmodul = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/modul')
const rolesmodulform = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/modul_form')
const rolespermission = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/permission')
const rolespermissionform = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/permission_form')

const trackByid = () => import( /* webpackChunkName: "trackBYid" */ '@/js/components/track/trackByid')
const trackByForm = () => import( /* webpackChunkName: "trackBYid" */ '@/js/components/track/trackByForm')

/* --------------------- PEROMOHONAN COMPONEN --------------------------*/

const pemohonPengajuan = () => import( /* webpackChunkName: "pemohonPermohonan" */ '@/js/components/pemohon/permohonan/pengajuan')
const pemohonPengajuan2 = () => import( /* webpackChunkName: "pemohonPermohonan" */ '@/js/components/pemohon/permohonan/pengajuan2')
const pemohonPendaftaran = () => import( /* webpackChunkName: "pemohonPermohonan" */ '@/js/components/pendaftaran/pendaftaran')

const pemohonPendaftaranIzinPenelitian = () => import( /* webpackChunkName: "pemohonPermohonan" */ '@/js/components/pendaftaran/penelitian')

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
            path: '/identitas',
            name: 'users-identitas',
            component: usersIdentitas,
        },
        {
            path: '/layanan/izin',
            name: 'layanan-izin',
            component: layananIzin,
        },
        {
            path: '/integration/bp2rd',
            name: 'integration-bp2rd',
            component: bp2rd,
        },
        {
            path: '/tatacara/dokumen',
            name: 'tatacara-dokumen',
            component: tatacaraDokumen,
        },
        /* ----------FROMT OFFICE UMUM---------------*/
        {
            path: '/fo/dashboard',
            name: 'fo-dashboard',
            component: dashboard,
        },
        {
            path: '/permohonan/data',
            name: 'permohonan-data',
            component: permohonanData,
        },
        {
            path: '/fo/permohonan/detail/:id',
            name: 'fo-permohonan-detail',
            component: permohonanDetail,
            
        },
        {
            path: '/perusahaan',
            name: 'perusahaan-data',
            component: perusahaanData,
        },

        /* ----------FROMT BACKOFFICE---------------*/
        {
            path: '/opd/dashboard',
            name: 'opd-dashboard',
            component: dashboardOpd,
        },
        /* ----------BACK OFFICE ROUTE---------------*/
        {
            path: '/bo/dashboard',
            name: 'bo-dashboard',
            component: dashboardBo,
            meta: {
                progress: {
                  func: [
                    {call: 'color', modifier: 'temp', argument: '#ffb000'},
                    {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                    {call: 'location', modifier: 'temp', argument: 'top'},
                    {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                  ]
                }
              }
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
            path: '/pemohon/pendaftaran',
            name: 'pemohon-pendaftaran',
            component: pemohonPendaftaran,
        },
        {
            path: '/pemohon/pendaftaran/penelitian',
            name: 'pemohon-pendaftaran-penelitian',
            component: pemohonPendaftaranIzinPenelitian,
        },
        {
            path: '/pemohon/dashboard',
            name: 'pemohon-dashboard',
            component: pemohonDashboard,
        },
        {
            path: '/pemohon/permohonan/pengajuan',
            name: 'pemohon-permohonan-pengajuan',
            component: pemohonpermohonanpengajuan,
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
        /* ----------TRACKING ROUTE---------------*/
        {
            path: '/pengajuan/tracking',
            name: 'track-form',
            component: trackByForm,
        },

    ]
});

export default router;

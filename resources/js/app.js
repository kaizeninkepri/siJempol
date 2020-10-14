/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue';
import Vuex from 'vuex'
import router from '@/js/routes'
import VueAxios from "vue-axios";
import axios from "axios";
import store from "@/js/store.js";

Vue.use(Vuex)
// import {
//     Loading,
//     Notification,
//     Checkbox,
//     DatePicker,
// } from 'element-ui';
import VueProgressBar from 'vue-progressbar'
import 'element-ui/lib/theme-chalk/index.css';
import wysiwyg from "vue-wysiwyg";
import "vue-wysiwyg/dist/vueWysiwyg.css";
import locale from 'element-ui/lib/locale/lang/en'
import ElementUI from 'element-ui'
Vue.use(ElementUI, {
    locale
})


const pemohonPendaftaran = () => import( /* webpackChunkName: "pemohonPermohonan" */ '@/js/components/pendaftaran/pendaftaran')
const pemohonPendaftaranSelesai = () => import( /* webpackChunkName: "pemohonPermohonan" */ '@/js/components/pendaftaran/pendaftaranSelesai')
import Vuelidate from 'vuelidate'
import VueEvents from 'vue-events'
Vue.config.ignoredElements = [/^ion-/]
import VueMask from 'v-mask'
Vue.use(VueMask);
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(wysiwyg, {});
// Vue.use(Loading);
// Vue.use(DatePicker);
// Vue.use(Checkbox);
// Vue.prototype.$notify = Notification;
Vue.use(VueEvents)
Vue.use(VueAxios, axios)
Vue.use(Vuelidate)



const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    mounted() {
        this.$store.dispatch("StoreUser/StoreUser");
        this.$store.dispatch("StoreUser/StorePermission");
    },
    methods: {
        collpasedmenu() {
            var menuText = $('.menu-item-label,.menu-item-arrow');

            if ($('body').hasClass('collapsed-menu')) {
                $('body').removeClass('collapsed-menu');
                $('body').removeClass('with-subleft');

                // show current sub menu when reverting back from collapsed menu
                $('.show-sub + .br-menu-sub').slideDown();

                $('.br-sideleft').one('transitionend', function (e) {
                    menuText.removeClass('op-lg-0-force');
                    menuText.removeClass('d-lg-none');
                });

            } else {
                $('body').addClass('collapsed-menu');
                $('body').addClass('with-subleft');

                // hide toggled sub menu
                $('.show-sub + .br-menu-sub').slideUp();

                menuText.addClass('op-lg-0-force');
                $('.br-sideleft').one('transitionend', function (e) {
                    menuText.addClass('d-lg-none');
                });
            }
            return false;
        },
        justcollpasedmenu() {
            var menuText = $('.menu-item-label,.menu-item-arrow');
            $('body').addClass('collapsed-menu');
            $('body').addClass('with-subleft');

            // hide toggled sub menu
            $('.show-sub + .br-menu-sub').slideUp();

            menuText.addClass('op-lg-0-force');
            $('.br-sideleft').one('transitionend', function (e) {
                menuText.addClass('d-lg-none');
            });
        },
        justExpand() {
            var menuText = $('.menu-item-label,.menu-item-arrow');
            $('body').removeClass('collapsed-menu');
            $('body').removeClass('with-subleft');

            // show current sub menu when reverting back from collapsed menu
            $('.show-sub + .br-menu-sub').slideDown();

            $('.br-sideleft').one('transitionend', function (e) {
                menuText.removeClass('op-lg-0-force');
                menuText.removeClass('d-lg-none');
            });
        }
    },
    components: {
        pemohonPendaftaran,
        pemohonPendaftaranSelesai,
    }

});

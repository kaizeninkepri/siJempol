import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'
import StoreTables from '@/js/datatables/storeTables'
import StoreUser from '@/js/Store/StoreUser'

import url from '@/js/url'
Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        StoreTables,
        StoreUser,

    },
    state: {
        url: url.web,
        console: null,
        breadcums: "rentalinaja.id",

    },
    mutations: {
        increment(state, data) {
            state.breadcums = data
        }
    },
    actions: {
        async increment({
            commit
        }, data) {
            commit('increment', data)
        },
        async StoreDatabase({
            commit
        }, data) {
            return axios
                .post(url.web + data.url, {
                    type: data.type
                })
                .then(r => {
                    return r.data;
                });
        }
    }
});

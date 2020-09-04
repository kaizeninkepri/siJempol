import urlBase from "@/js/url"
import VueAxios from 'vue-axios'
import axios from 'axios'

export default {
    namespaced: true,
    state: {
        menu: [],
        user: []
    },
    getters: {
        gtrsMenu: state => {
            return state.menu;
        },
        gtrsUser: state => {
            return state.user;
        },
    },
    mutations: {
        menu(state, data) {
            state.menu = data
        },
        user(state, data) {
            state.user = data
        },
    },
    actions: {
        async StoreMenu({
            commit
        }, data) {
            axios
                .post(urlBase.web + "/roles/permission", {
                    type: "permissiondataByrolesId",
                })
                .then(
                    r => (
                        commit('fields', r.data)
                    )
                );
        },
        async StoreUser({
            commit
        }, data) {
            axios
                .get(urlBase.web + "/users/getById")
                .then(
                    r => (
                        commit('user', r.data)
                    )
                );
        },

    },

};

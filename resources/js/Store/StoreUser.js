import urlBase from "@/js/url"
import VueAxios from 'vue-axios'
import axios from 'axios'

export default {
    namespaced: true,
    state: {
        permission: [],
        user: []
    },
    getters: {
        gtrspermission: state => {
            return state.permission;
        },
        gtrspermissionActive: (state) => (id) => {
            var a = state.permission.filter(p => p.role_modul_id == id)
            return a[0];
        },
        gtrsUser: state => {
            return state.user;
        },
    },
    mutations: {
        permission(state, data) {
            state.permission = data
        },
        user(state, data) {
            state.user = data
        },
    },
    actions: {
        async StorePermission({
            commit
        }, data) {
            axios
                .post(urlBase.web + "/roles/permission", {
                    type: "permissionById",
                })
                .then(
                    r => (
                        commit('permission', r.data)
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

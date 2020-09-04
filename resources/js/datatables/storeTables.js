
export default {
    namespaced: true,
    state: {
        fields: ["nama"],
        apiUrl: "andi",
    },
    getters: {
        doneFields: state => {
            return state.fields;
        },
        doneApi: state => {
            return state.apiUrl;
        }
    },
    mutations: {
        fields(state, data) {
            state.fields = data
        },
        apiUrl(state, data) {
            state.apiUrl = data
        }
    },
    actions: {
        StoreFields({ commit }, data) {
            commit('fields', data)
        },
        async StoreApi({ commit }, data) {
            commit('apiUrl', data)
        }
    },

};
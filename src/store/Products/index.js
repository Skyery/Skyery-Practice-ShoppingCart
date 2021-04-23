import { apiGetFirebaseRequest } from '@/api/index.js'

export default {
    namespaced: true,
    state: {
        products: []
    },
    getters: {
        getProducts: state => {
            return state.products
        }
    },
    actions: {
        handInit({ commit }) {
            const productsRes = apiGetFirebaseRequest.database().ref("products");
            productsRes.once('value', (snapshot) => {
                commit('setProducts', snapshot.val())
            })
        }
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        }
    },
}

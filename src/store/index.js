import { createStore } from 'vuex'
import Products from '@/store/Products'

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export default createStore({
  state: {
    cart: [],
    order: {}
  },
  getters: {
    productCount: state => product => {
      const item = state.cart.find(i => i.id === product.id)
      if (item) return item.count;
      else return 0;
    },
    cartItems: state => {
      return state.cart;
    },
    cartItemsLength: state => {
      return state.cart.length;
    },
    cartTotal: state => {
      return state.cart.reduce((a, b) => a + (b.price * b.count), 0);
    },
    orderList: state => {
      return state.order;
    },
    transactionID: state => {
      return state.order.transactionID
    }
  },
  actions: {
    clearCart({ commit }) {
      commit('clearCart');
    },
    deleteFromCart({ commit }, product) {
      commit('deleteFromCart', product)
    },
    removeFromCart({ commit }, product) {
      commit('removeFromCart', product)
    },
    addToCart({ commit }, product) {
      commit('addToCart', product)
    },
    updateCartFromLocalStorage({ commit }) {
      commit('updateCartFromLocalStorage');
    },
    addtoOrder({ commit }, order) {
      commit('addtoOrder', order);
    },
    addTransactionID({ commit }, transactionID) {
      commit('addTransactionID', transactionID)
    }
  },
  mutations: {
    addTransactionID(state, transactionID) {
      state.order.transactionID = transactionID;
    },
    addtoOrder(state, order) {
      state.order = order
    },
    clearCart(state) {
      state.cart = [];
      updateLocalStorage(state.cart)
    },
    deleteFromCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)
      if (item) {
        state.cart = state.cart.filter(i => i.id !== product.id)
      }
      updateLocalStorage(state.cart)
    },
    removeFromCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)
      if (item) {
        item.count > 1 ? item.count-- : state.cart = state.cart.filter(i => i.id !== product.id)
      }
      updateLocalStorage(state.cart);
    },
    addToCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)
      item ? item.count++ : state.cart.push({ ...product, count: 1 });
      updateLocalStorage(state.cart);
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart');
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    }
  },
  modules: {
    Products
  }
})

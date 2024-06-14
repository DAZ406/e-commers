import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    currUser: null
  },
  getters: {
    getCartLength(state) {
      return state.cart.length;
    },
    getCart(state) {
      return state.cart
    },
    getCurrUser(state) {
      return state.currUser;
    },
    getCurrUsersUserName(state) {
      return state.currUser.username;
    },
    getAmountOfProduct: (state) => (book_id) => {
      let sum = 0;
      state.cart.map((item) => {
        if (item.product.id === book_id) {
         sum += parseInt(item.purchased_amount);
        }
      });
      return sum;
    },
    getTotallPriceOfCart(state) {
      let totallPrice = 0;
      state.cart.map((book) => {
        totallPrice += parseInt(book.purchased_amount * book.product.price);
      });
      return totallPrice;
    }
  },
  mutations: {
    deleteCurrUser(state) {
      state.currUser = null;
    },
    changeCurrUser(state, payload) {
      state.currUser = {
        ...payload
      };
    },
    addToCart(state, payload) {
      const newItem = {...payload};
      state.cart.push(newItem);
    },
    deleteFromCart(state, index) {
    state.cart.splice(parseInt(index) , 1);
    },
    deleteAllFromCart(state) {
      state.cart.splice(0 , state.cart.length);
    }
  },
  actions: {
    deleteCurrUserAction(context) {
      context.commit('deleteCurrUser');
    },
    changeCurrUserAction(context, payload) {
      context.commit('changeCurrUser', payload);
    },
    addToCartAction(context, payload) {
      context.commit('addToCart', payload);
    },
    deleteFromCartAction(context, index) {
      context.commit('deleteFromCart', index);
    },
    deleteAllFromCartAction(context) {
      context.commit('deleteAllFromCart');
    }
  },
})

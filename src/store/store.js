import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    list: [1, 5, 8, 10, 30, 50]
  },
  getters: {
    filteredList: state => {
      return state.list.filter(item => item > 0);
    },
    listCount: (state, getters) => {
      return getters.filteredList.length;
    }
  },
  mutations: {
    increment (state, n = 1) {
      state.count += n;
    },
    decrease (state) {
      state.count --;
    }
  },
  actions: {
    asyncIncrement (context) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('increment');
          resolve();
        }, 1000)
      });
    },
    increment (context) {
      context.commit('increment');
    }
  }
});

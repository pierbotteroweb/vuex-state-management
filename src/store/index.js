import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // this key was being defined straight on the component before
    // here, the key will be available consistently for the whole project
    counter:0
  },
  getters: {
  },
  mutations: {
    // Here iw where we will mutate the value of "counter" in the store.
    // before that, these methods were bing used in the "method" object in the component
      increaseCounter(state) {
        state.counter++
      },
      decreaseCounter(state) {
        state.counter--
      }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})

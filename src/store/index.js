import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const randomApi = "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"

export default new Vuex.Store({
  state: {
    // this key was being defined straight on the component before
    // here, the key will be available consistently for the whole project
    counter:0,
    // value created to be used as color styling
    colorCode: 'green'
  },
  mutations: {
    // Here iw where we will mutate the value of "counter" in the store.
    // before that, these methods were bing used in the "method" object in the component
    // OBS> We can only handle SYNCHRONOUS data when using "mutations"
      increaseCounter(state, randomNumber) {
        state.counter += randomNumber
      },
      decreaseCounter(state, randomNumber) {
        state.counter -= randomNumber
      },
      setColorCode(state, newValue) {
        state.colorCode = newValue
      }
  },
  actions: {
    // If we need to mutate data from the store ASYNCHRONOUSLY,
    // we need to do it from "actions";
    // Here's an example of "actions" being used to handle a mutation
    // that depends on an asynchronous value from an API
    // OBS: always have a set of actiosn that matches
    // with the provided mutations
    increaseCounter({ commit }){
      axios(randomApi)
      .then(response=>{
        commit('increaseCounter', response.data)
      })
    },
    decreaseCounter({ commit }){
      axios(randomApi)
      .then(response=>{
        commit('decreaseCounter', response.data)
      })
    },
    // Action created to handle setCode state data
    setColorCode({ commit }, newValue) {
      commit('setColorCode', newValue)
    }
  },
  getters: {
    // Here is a getter being used to return a value based on the state data
    counterSquared(state) {
      console.log("xxx")
      return state.counter * state.counter
    }
  },
  modules: {
  }
})

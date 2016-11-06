import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameState: null
  },
  getters: {
    gameState: state => {
      return state.gameState
    }
  }
})

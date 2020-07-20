import Vue from 'vue'
import Vuex from 'vuex'
import github from './modules/github'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        github
    },
    strict: debug
  })
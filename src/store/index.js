import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createPersistedState()]
})

if (module.hot) {
  module.hot.accept(['./modules'], () => {
    const modules = require('./modules').default
    store.hotUpdate({
      modules
    })
  })
}

export default store

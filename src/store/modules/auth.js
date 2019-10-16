import { ApiRequest } from '../../library/api'
import { SessionStorage } from 'quasar'

const state = {
  user: null,
  authenticated: false,
  token: SessionStorage.getItem('token')
}

const getters = {
  user: state => state.user,
  authenticated: state => !!state.token,
  token: state => state.token
}

const mutations = {
  fetchUser (state, user) {
    state.user = user || null
  },

  saveToken (state, payload) {
    console.log('saveToken', payload.token)
    state.authenticated = true
    state.token = payload.token
    SessionStorage.set('token', payload.token)
  },

  logout (state) {
    state.user = null
    state.authenticated = false
    state.token = null
    SessionStorage.remove('token')
  },

  updateUser (state, { user }) {
    state.user = user
  }
}

const actions = {
  async fetchUser (context) {
    return new Promise(async (resolve, reject) => {
      try {
        let userRequest = await ApiRequest('getUser')
        context.commit('fetchUser', userRequest)
        resolve(userRequest)
      } catch (e) {
        reject()
      }
    })
  },

  checkAuth (context) {
    return new Promise(async (resolve, reject) => {
      let authRequest = await ApiRequest('getUser')
      resolve(authRequest)
    })
  },

  login (context, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        let authRequest = await ApiRequest('login', 'post', payload)
        console.log('authRequest', authRequest)
        context.commit('saveToken', authRequest)
        resolve(authRequest)
      } catch (e) {
        reject(e)
      }
    })
  },

  updateUser (context, payload) {
    context.commit('updateUser', payload)
  },

  logout (context) {
    return new Promise((resolve, reject) => {
      context.commit('logout')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

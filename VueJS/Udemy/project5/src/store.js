import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
  },
  mutations: {
    authUser(state, userData) {
      console.log(userData)
      state.idToken = userData.idToken
      state.userId = userData.userId
    },
    storeUser(state, user) {
      state.user = user
    },
    clearAuthData(state) {
      state.idToken = null
      state.userId = null
    },
  },
  actions: {
    setLogoutTimer({ dispatch }, expirationTime) {
      setTimeout(() => {
        dispatch('logout')
      }, expirationTime * 1000)
    },
    tryAutoLogin({ commit }) {
      const idToken = localStorage.getItem('token')
      if (!idToken) return

      const expirationDate = localStorage.getItem('expiresIn')
      const now = new Date()
      if (now >= expirationDate) return
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        userId,
        idToken,
      })
    },
    signup({ commit, dispatch }, authData) {
      axios
        .post('/signupNewUser?key=AIzaSyDSXW8MnhysPE6kVeK-petDPiDk2IyiNik', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then(res => {
          console.log(res)
          commit('authUser', {
            idToken: res.data.idToken,
            userId: res.data.localId,
          })
          const now = new Date()
          const expirationDate = new Date(
            now.getTime() + res.data.expiresIn * 1000
          )
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expiresIn', expirationDate)
          dispatch('storeUser', authData)
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(err => console.log(err))
    },
    login({ commit, dispatch }, authData) {
      axios
        .post('/verifyPassword?key=AIzaSyDSXW8MnhysPE6kVeK-petDPiDk2IyiNik', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then(res => {
          console.log(res)
          commit('authUser', {
            idToken: res.data.idToken,
            userId: res.data.localId,
          })
          const now = new Date()
          const expirationDate = new Date(
            now.getTime() + res.data.expiresIn * 1000
          )
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expiresIn', expirationDate)
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(err => console.log(err))
    },
    logout({ commit }) {
      commit('clearAuthData')
      localStorage.removeItem('token')
      localStorage.removeItem('expiresIn')
      localStorage.removeItem('userId')
      router.replace('/signin')
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) return

      globalAxios
        .post(`/users.json?auth=${state.idToken}`, userData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) return

      globalAxios.get(`/users.json?auth=${state.idToken}`).then(res => {
        console.log(res)
        const data = res.data
        const users = []
        for (const key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log(users)
        commit('storeUser', users[0])
      })
    },
  },
  getters: {
    user(state) {
      return state.user
    },
    isAuthenticated(state) {
      return state.idToken !== null
    },
  },
})

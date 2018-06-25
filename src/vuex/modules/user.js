import { services } from '../api'

const FETCH_USER = 'FETCH_USER'

const state = {
  userInfo: {}
}

const actions = {
  fetchUser: ({ commit }) => {
    return services.user.getUser()
      .then((response) => {
        commit(FETCH_USER, response.data)
        return response
      })
      .catch((error) => {
        console.error(error)
        return error
      })
  }

}
const getters = {
  userInfo: state => state.userInfo
}

const mutations = {
  [FETCH_USER] (state, data) {
    state.userInfo = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}

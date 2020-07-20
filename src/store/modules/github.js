import github from './../../api/github'

const state = () => ({
    user: null,
    repos: null,
    starred: null
})

const getters = {
    
    
}

const actions = {
    async getUser({ commit })  {
        const user = await github.getUser()
        commit('setUser', user)
    },
    async getRepos({ commit }) {
        const repos = await github.getUserRepos()
        commit('setRepos', repos ? repos.filter((el) => el.description !== null && el.description.length > 0) : [])
    },
    async getStarred({ commit }) {
        const starred = await github.getStarred()
        commit('setStarred', starred)
    }
}

const mutations = {
    setUser(state, user){
        state.user = user
    },
    setRepos(state, repos){
        state.repos = repos
    },
    setStarred(state, starred){
        state.starred = starred
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
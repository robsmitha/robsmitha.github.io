import { get } from './api'

const endpoint = 'https://api.github.com'
const login = 'robsmitha'
export default {
    getUser,
    getUserRepos,
    getStarred,
    getRepo,
    getCommits,
    getLanguages,
    getCommit
}
async function getUser() {
    return get(`${endpoint}/users/${login}`)
}

async function getUserRepos() {
    return get(`${endpoint}/users/${login}/repos?sort=pushed&direction=desc`) //TODO: pass sort, direction as params
}

async function getStarred(){
    return get(`${endpoint}/users/${login}/starred`)
}

async function getRepo(repo){
    return get(`${endpoint}/repos/${login}/${repo}`)
}

async function getCommits(repo){
    return get(`${endpoint}/repos/${login}/${repo}/commits`)
}

async function getCommit(repo, sha){
    return get(`${endpoint}/repos/${login}/${repo}/commits/${sha}`)
}

async function getLanguages(repo){
    return get(`${endpoint}/repos/${login}/${repo}/languages`)
}
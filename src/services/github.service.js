import { get } from './api.service'


const endpoint = 'https://api.github.com'
const login = 'robsmitha'
export const gitHubService = {
    getUser,
    getUserRepos,
    getStarred,
    getRepo,
    getCommits,
    getLanguages,
    getCommit
};

function getUser() {
    return get(`${endpoint}/users/${login}`)
}

function getUserRepos() {
    return get(`${endpoint}/users/${login}/repos?sort=pushed&direction=desc`)
}

function getStarred(){
    return get(`${endpoint}/users/${login}/starred`)
}

function getRepo(repo){
    return get(`${endpoint}/repos/${login}/${repo}`)
}

function getCommits(repo){
    return get(`${endpoint}/repos/${login}/${repo}/commits`)
}

function getCommit(repo, sha){
    return get(`${endpoint}/repos/${login}/${repo}/commits/${sha}`)
}

function getLanguages(repo){
    return get(`${endpoint}/repos/${login}/${repo}/languages`)
}
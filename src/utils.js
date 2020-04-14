
var _rk = 'rk'
var responses = new Map()
if(localStorage.getItem(_rk) !== null) {
    responses = new Map(JSON.parse(localStorage.getItem(_rk)))
}
export async function json(url, requestinfo) {
    let data = null
    if(responses.has(url)){
        data = responses.get(url)
    }
    else{
        const response = await fetch(url)
        if(response !== undefined && response.ok){
            data = await response.json();
            responses.set(url, data)
            localStorage.setItem(_rk, JSON.stringify(Array.from(responses.entries())))
        }
    }
    return data;
}

export async function text(url){
    const response = await fetch(url);
    return await response.text();
}

window.languageIcon = function (node, language) {
    var icon = '';
    var lang = language !== undefined && language !== null 
    ? language.toLowerCase() 
    : '';
    switch(lang){
        case "c#": 
            icon = `<i class="devicon-csharp-line-wordmark colored"></i>`
            break;
        case "javascript":
            icon = `<i class="devicon-javascript-plain colored"></i>`
            break;
        case "css":
            icon = `<i class="devicon-css3-plain-wordmark colored"></i>`
            break;
        case "html":
            icon = `<i class="devicon-html5-plain colored"></i>`
            break;
        case "typescript":
            icon = `<i class="devicon-typescript-plain colored"></i>`
            break
        default:
            icon = `<span class="badge badge-dark">${language}</span>`
            break;
    }
    node.innerHTML = icon;
}

window.date = function (node, date) {
    node.innerHTML = new Date(date).toLocaleString()
}

window.hidden = function(node, data){
    node.hidden = data === undefined || data === null || data.length === 0;
}

window.link = function (node, arg) {
    if(!node instanceof HTMLAnchorElement)
        throw 'Please provide a valid HTMLAnchorElement to create a link.'

    node.href = document.location.origin + document.location.pathname === node.href
    ? arg 
    : node.href + arg
}
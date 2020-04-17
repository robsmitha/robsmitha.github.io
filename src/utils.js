


export async function json(url, requestinfo) {
    let cache = sessionStorage.getItem('cache') !== null 
    ? new Map(JSON.parse(sessionStorage.getItem('cache')))
    : new Map()
    
    //check cache
    if(cache.has(url)){
        let item = cache.get(url)
        return item.json 
    }

    //do request
    const response = await fetch(url)
    if(response !== undefined && response.ok){
        let json = await response.json()
        cache.set(url, {
            json: json,
            cached_at: new Date().getTime()
        })
        sessionStorage.setItem('cache', JSON.stringify(Array.from(cache.entries())))
        return json;
    }

    return null;
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
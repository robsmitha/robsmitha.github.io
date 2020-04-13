
var responses = new Map()
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
    switch(language.toLowerCase()){
        case "c#": 
            icon = `<i class="devicon-csharp-line-wordmark colored"></i>`
            break;
        case "javascript":
            icon = `<i class="devicon-javascript-plain colored"></i>`
            break;
        default:
            icon = `<span class="badge badge-dark">${language}</span>`
            break;
    }
    node.innerHTML = icon;
};

window.date = function (node, date) {
    node.innerHTML = new Date(date).toLocaleString()
};

window.link = function (node, arg) {
    if(!node instanceof HTMLAnchorElement)
        throw 'Please provide a valid HTMLAnchorElement to create a link.'

    node.href = document.location.origin + document.location.pathname === node.href
    ? arg 
    : node.href + arg
};
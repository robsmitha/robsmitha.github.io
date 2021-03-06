
const cache = sessionStorage.getItem('cache') !== null 
? new Map(JSON.parse(sessionStorage.getItem('cache')))
: new Map()

export async function get(url) {
    
    //check cache
    if(cache.has(url)){
        let item = cache.get(url)
        return item.json 
    }

    //do request
    try {
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
    } catch (error) {
        console.log(error)
    }

    return null;
}
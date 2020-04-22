import { json, text } from './utils'

const me_key = 'me'
export function who(){
    return JSON.parse(localStorage.getItem(me_key) || null);
}
export async function store(){
    let me = who();
    if(me == null){
        me = {
            ip: null,
            meta: {},
            visits: []
        }
        json('https://api.ipify.org?format=json')
        .then(data =>  {
            text(`https://api.hackertarget.com/geoip/?q=${data.ip}`)
            .then(text => {
                var lines = text.split('\n')
                for(let i = 0; i < lines.length; i++){
                    var kv = lines[i].split(':');
                    var k = kv[0].trim()
                    var v = kv[1].trim()
                    if(i == 0)
                    me.ip = v
                    else
                    me.meta[k] = v;
                }
                me.visits.push({
                    date: new Date()
                });
                localStorage.setItem(me_key, JSON.stringify(me))
            })
        })
    }
    else{
        me.visits.push({
            date: new Date()
        });
        localStorage.setItem(me_key, JSON.stringify(me))
    }
}


export function sendEvent(action, category, label, value) {
    gtag('event', action, 
    { 
        'event_category': category, 
        'event_label': label, 
        'value': value 
    });
}
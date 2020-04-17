
import App from './App.js'
import Home from './Home.js'
import Repo from './Repo.js'
import Router from './Router.js';

const main = document.querySelector('main')

const router = new Router({
  mode: 'hash',
  root: '/'
});

router.add(/repo\/(.*)/, (id) => {
  new Repo({ root: main, id: id })
})
.add('', () => {
    new Home({ root: main })
  })

var app = new App({ root: main });
app.renderApp();

/*
if (window.Worker) {
  var pollingWorker = new Worker('./src/polling-worker.js');
  pollingWorker.onmessage = (e) => {
    if(e.data.updated_at !== undefined){
      localStorage.removeItem('cache')
      app.renderApp();
      new Home({ root: main})
      console.log('app refreshed at ' + new Date(e.data.updated_at).toLocaleTimeString())
    }
  }
  let cache = localStorage.getItem('cache') !== null 
  ? new Map(JSON.parse(localStorage.getItem('cache')))
  : new Map();
  let oldest = cache.size > 0 
  ?  Number.MAX_VALUE 
  : Number.MIN_VALUE;
  cache.forEach((value, key, map) => oldest = Math.min(oldest, value.cached_at))
  pollingWorker.postMessage({ 
    cached_at: oldest !== Number.MIN_VALUE 
    ? oldest 
    : new Date().getTime()
  });
} else {
	console.log('Your browser doesn\'t support web workers.')
}
*/
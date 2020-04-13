
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
app.startApp();
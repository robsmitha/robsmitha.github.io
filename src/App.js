import Component from './Component.js'
import Header from './Header.js'
import Footer from './Footer.js'

export default class App extends Component {
    constructor(props) {
      super(props)
      this.header = null;
      this.footer = null;
      this.main = null;
    }
  
    renderApp() {
      this.header = new Header({ 
        root: document.querySelector('header')
      });
      this.footer = new Footer({ 
        root: document.querySelector('footer')
      });
    }
  }
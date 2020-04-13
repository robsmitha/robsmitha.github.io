import Component from './Component.js'
import Repos from './Repos.js'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.repos = null
    this.render('./components/home.html')
    .then(this.loadReposComponent)
  }
  loadReposComponent = () =>{
    this.repos = new Repos({ root: this.root.querySelector('repos') });
  }
}

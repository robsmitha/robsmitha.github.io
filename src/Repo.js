import Component from './Component.js'
import Commits from './Commits.js'
import { json } from './utils.js'


export default class Repo extends Component {
  constructor(props) {
    super(props)
    this.id = props.id;
    this.commits = null
    this.render('./components/repo.html')
    .then(this.loadRepo)
  }
  
  loadRepo = () => {
    json(`https://api.github.com/repos/robsmitha/${this.id}`)
    .then(data => {
        this.update(data, { name: 'Could not load repo. Please try again later.' })
        this.root.querySelector('.loading-spinner').hidden = true;
        this.loadCommitsComponent()
    })
  }

  loadCommitsComponent = () => {
    this.commits = new Commits({ id: this.id, root: this.root.querySelector('commits') });
  }
}

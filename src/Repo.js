import Component from './Component.js'
import Commits from './Commits.js'
import Languages from './Languages.js'
import { json } from './utils.js'
import { sendEvent, who } from './me.js'


export default class Repo extends Component {
  constructor(props) {
    super(props)
    this.id = props.id;
    this.commits = null
    this.languages = null
    this.render('./components/repo.html')
    .then(this.loadRepo)

    sendEvent('view_repo', 'repos', this.id, who())
  }
  
  loadRepo = () => {
    json(`https://api.github.com/repos/robsmitha/${this.id}`)
    .then(data => {
        this.update(data, { name: 'Could not load repo. Please try again later.' })
        this.root.querySelector('.loading-spinner').hidden = true;
        this.loadCommitsComponent()
        this.loadLanguagesComponent()
    })
  }

  loadCommitsComponent = () => {
    this.commits = new Commits({ id: this.id, root: this.root.querySelector('commits') });
  }
  loadLanguagesComponent = () => {
    this.languages = new Languages({ id: this.id, root: this.root.querySelector('languages') })
  }
}

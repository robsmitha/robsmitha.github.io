
import Component from './Component.js'
import { json } from './utils.js'

export default class Repos extends Component {
  constructor(props) {
    super(props)
    this.render('./components/repos.html')
    .then(this.loadRepos)
  }
  
  loadRepos = () => {
    json(`https://api.github.com/users/robsmitha/repos?sort=updated&direction=desc`)
    .then(data => {
      var repos = data.filter((el) => el.description !== null && el.description.length > 0);
      this.update(repos, [])
      this.root.querySelector('.loading-spinner').hidden = true
    })
  }
}

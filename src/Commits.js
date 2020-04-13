import Component from './Component.js'
import { json } from './utils.js'

export default class Commits extends Component {
    constructor(props) {
      super(props)
      this.id = props.id;
      this.render('./components/commits.html')
      .then(this.loadCommits)
    }

    loadCommits = () => {
      json(`https://api.github.com/repos/robsmitha/${this.id}/commits`)
      .then(data => {
          this.update(data, [])
          this.root.querySelector('.loading-spinner').hidden = true;
      })
    }
}
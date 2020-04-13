
import Component from './Component.js'
import { json } from './utils.js'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.render('./components/header.html')
    .then(this.loadBio)
  }
  
  loadBio = () => {
    json(`https://api.github.com/users/robsmitha`)
    .then(data => this.update(data, { bio: "Full Stack Web Development with .NET and JavaScript." }))
  }
}


import Component from './Component.js'
import { json } from './utils.js'
import { sendEvent, who } from './me.js'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.render('./components/header.html')
    .then(this.loadBio)
  }
  
  loadBio = () => {
    let _who = who()
    this.root.querySelector('#resume_link')
      .addEventListener('click', () => {
        sendEvent('View_Resume', 'Resume', _who, _who)
      })

      this.root.querySelector('#linkedIn_link')
        .addEventListener('click', () => {
          sendEvent('View_LinkedIn', 'LinkedIn', _who, _who)
        })

    json(`https://api.github.com/users/robsmitha`)
    .then(data =>  {
      this.update(data, { bio: "Full Stack Web Development with .NET and JavaScript." })
    })
    
  }
}

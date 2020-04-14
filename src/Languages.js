import Component from './Component.js'
import { json } from './utils.js'

export default class Languages extends Component {
    constructor(props) {
      super(props)
      this.id = props.id;
      this.render('./components/languages.html')
      .then(this.loadLanguages)
    }

    loadLanguages = () => {
      json(`https://api.github.com/repos/robsmitha/${this.id}/languages`)
      .then(data => {
            let template = this.root.querySelector('template')
            for(var k in data) {
                var clone = template.content.cloneNode(true)
                languageIcon(clone.querySelector('language'), k)
                clone.querySelector('linecount').innerHTML = `${k} - ${data[k]}`
                this.root.appendChild(clone);
            }
            this.root.querySelector('.loading-spinner').hidden = true;
      })
    }
}
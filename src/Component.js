

import { text } from './utils.js'

export default class Component {
    constructor(props) {
        if(props === undefined) return;
        this.root = props.root 
    }

    render = async(html_url) => {
        if(this.root == null) 
            throw 'Please provide a valid root to mount the component.';

        if(html_url == null || html_url.length == 0)
            throw 'Please provide a valid url to load the component.';

        try {
            this.root.innerHTML = await text(html_url);
        }
        catch (e) {
            this.root.innerHTML = '<p>An error occurred</p>'; //todo: add error page
            console.log(e)
            throw e;
        }
    }

    update = (data, fallback) => {
        if(this.root == null) 
            throw 'Please provide a valid root to mount the component.';

        if(data == null) 
            throw 'Please provide a valid url to load the data.';

        if(Array.isArray(data)) 
        {
            if(data.length === 0 && fallback !== null) 
                data = fallback
                
            var template = this.root.querySelector('template')
            for(let i = 0; i < data.length; i++){
                var clone = template.content.cloneNode(true)
                this.binder(clone, data[i]);
                this.root.appendChild(clone);
            }
            template.hidden = true;
        }
        else 
            this.binder(this.root, data);
    }

    binder = (root, data) => {
        if(data == undefined) throw `No data to bind.`;
        var nodes = root.querySelectorAll('[data-key]');
        if(nodes == null) throw 'No nodes to bind.';
        nodes.forEach(node => {
            if(hasFn(node)){
                let args = node.dataset.key.includes('.')
                ? this.fetchFromObject(data, node.dataset.key)
                : data[node.dataset.key];
                node.dataset.fn.split(',').forEach(fn => {
                    window[fn](node, args)
                });
            }
            else{
                node.innerHTML = node.dataset.key.includes('.')
                ? this.fetchFromObject(data, node.dataset.key)
                : data[node.dataset.key]
            }
        })
        function hasFn(node){
            return node.dataset.fn !== undefined && node.dataset.fn !== null && node.dataset.fn.length > 0
        }
    }

    fetchFromObject = (obj, prop) => {

        if(typeof obj === 'undefined') {
            return false;
        }

        var _index = prop.indexOf('.')
        if(_index > -1) {
            return this.fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
        }

        return obj[prop];
    }
}
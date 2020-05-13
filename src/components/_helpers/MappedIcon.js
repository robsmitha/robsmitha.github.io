import React from 'react';
import Devicon from './Devicon';


const MappedIcon = props => {
    let icon = null
    if(props.map !== undefined && props.ikey !== undefined && props.map !== null && props.ikey !== null ) {
        const map = props.map
        const key = props.ikey.toLowerCase()
        if(map.has(key)) 
            icon = map.get(key)
    }

    return <Devicon icon={icon} {...props} />
}

export default MappedIcon
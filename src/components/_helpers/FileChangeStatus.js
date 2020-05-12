import React from 'react';
import { Badge } from 'reactstrap';

const FileChangeStatus = props => {
    let color = 'light'
    switch(props.status.toLowerCase()){
        case 'modified':
            color = 'primary'
            break;
        case 'renamed':
            color = 'light'
            break;
        case 'added':
            color = 'success'
            break;
        case 'removed':
        color = 'danger'
        break;
        default: break;
    }
    return <Badge color={color} {...props}>{props.status}</Badge>
}

export default FileChangeStatus
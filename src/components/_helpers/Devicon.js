﻿import React from 'react';

const Devicon = props => {
    let icon = '/devicon/devicon-original-wordmark.svg'
    const baseUrl = 'https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/vendor/devicons'
    if(props.language !== undefined && props.language !== null){
        switch(props.language.toLowerCase()){
            case 'c#':
                icon = '/csharp/csharp-original.svg'
                break;
            case 'javascript':
                icon = '/javascript/javascript-plain.svg'
                break;
            case 'css':
                icon = '/css3/css3-original-wordmark.svg'
                break;
            case 'html':
                icon = '/html5/html5-original-wordmark.svg'
                break;
            case 'typescript':
                icon = '/typescript/typescript-original.svg'
                break;
        }
    }
    return <img src={baseUrl + icon} alt={props.language} {...props} />
}

export default Devicon
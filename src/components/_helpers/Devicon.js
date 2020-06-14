﻿import React from 'react';

export const DeviconAmazonWebServicesOriginal = 'amazonwebservices-original'
export const DeviconCSharpOriginal = 'csharp-original'
export const DeviconJavaScriptPlain = 'javascript-plain'
export const DeviconCSS3WordMark = 'css3-original-wordmark'
export const DeviconHTML5WordMark = 'html5-original-wordmark'
export const DeviconTypeScriptOriginal = 'typescript-original'
export const DeviconDeviconOriginalWordmark = 'devicon-original-wordmark'
export const DeviconLinuxOriginal = 'linux-original'
export const DeviconBootstrapPlainWordMark = 'bootstrap-plain-wordmark'
export const DeviconDotNetOriginalWordmark = 'dot-net-original-wordmark'
export const DeviconDotNetPlain = 'dot-net-plain'
export const DeviconAngularJSPlain = 'angularjs-plain'
export const DeviconReactOriginal = 'react-original'
export const DeviconAndroidOriginal = 'android-original'
export const DeviconYarnOriginal = 'yarn-original'
export const DeviconVueJSOriginal = 'vuejs-original'
export const DeviconGoogleOriginal = 'google-original'

const Devicon = props => {
    let icon = ''
    switch(props.icon){
        case undefined:
        case null: 
        case '': 
            icon = DeviconDeviconOriginalWordmark
            break;
        default:
            icon = props.icon
            break;
    }
    const baseUrl = 'https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/vendor/devicons/'
    return <img src={baseUrl + icon + '.svg'} alt={props.icon} {...props} />
}

export default Devicon
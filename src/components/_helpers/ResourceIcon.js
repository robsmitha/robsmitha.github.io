import React from 'react';
import { 
    DeviconAmazonWebServicesOriginal,
    DeviconLinuxOriginal,
    DeviconBootstrapPlainWordMark,
    DeviconDotNetPlain,
    DeviconAngularJSPlain,
    DeviconReactOriginal,
    DeviconAndroidOriginal
} from './Devicon';
import MappedIcon from './MappedIcon';
import LanguageIcon from './LanguageIcon';


const ResourceIcon = props => {
    const { resource, language } = props
    const map = new Map([
        ['aws-sdk-net', DeviconAmazonWebServicesOriginal],
        ['linux', DeviconLinuxOriginal],
        ['bootstrap', DeviconBootstrapPlainWordMark],
        ['aspnetcore', DeviconDotNetPlain],
        ['angular', DeviconAngularJSPlain],
        ['react', DeviconReactOriginal],
        ['react', DeviconReactOriginal],
        ['clover-android-sdk', DeviconAndroidOriginal]
    ])
    if(resource !== undefined && resource !== null && map.has(resource)) {
        return <MappedIcon
                ikey={resource}
                map={map}  
                {...props}
            />
    }
    
    return <LanguageIcon language={language} {...props} />
}

export default ResourceIcon
import React from 'react';
import { 
    DeviconHTML5WordMark, 
    DeviconCSharpOriginal, 
    DeviconJavaScriptPlain, 
    DeviconCSS3WordMark, 
    DeviconTypeScriptOriginal
} from './Devicon';
import MappedIcon from './MappedIcon';


const LanguageIcon = props => {
    const language = props.language !== undefined  && props.language !== null ? props.language.toLowerCase() : null
    const map = new Map([
        ['c#', DeviconCSharpOriginal],
        ['javascript', DeviconJavaScriptPlain],
        ['css', DeviconCSS3WordMark],
        ['html', DeviconHTML5WordMark],
        ['typescript', DeviconTypeScriptOriginal],
    ])
    return <MappedIcon
        ikey={language}
            map={map}  
            {...props}
        />
}

export default LanguageIcon
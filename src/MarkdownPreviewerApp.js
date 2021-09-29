import React, { useState } from 'react'
import Markdown from 'markdown-to-jsx';

export const MarkdownPreviewerApp = () => {

    const [markdownText, setMarkdownText] = useState('')


    return (

        <div>
            <div className="app" style={{ display: 'flex' }}>
            
                <textarea id='editor' value={markdownText} onChange={(event) => setMarkdownText(event.target.value)}/>
            
                <div className="markdown" id='preview'>
                
                    <Markdown>{markdownText}</Markdown>
                    
            
                </div>
    
            </div>

        </div>
    )
}

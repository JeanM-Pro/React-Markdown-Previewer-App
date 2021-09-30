import React, { useState } from 'react'
import Markdown from 'markdown-to-jsx';
import { initialState } from './data';


export const MarkdownPreviewerApp = () => {


    const [markdownText, setMarkdownText] = useState(initialState)


    return (

        <div className='content'>
            
            <div className='title'>Convert your Markdown</div>

            <div className="app" style={{ display: 'flex' }}>
                
                <div className='content-box'>
                    <h3>Enter your Markdown:</h3>
                    <textarea id='editor' value={markdownText} onChange={(event) => setMarkdownText(event.target.value)}/>
                </div>

                <div className='content-box'>

                    <h3>See the result:</h3>
                    <div className='preview-styles' id='preview'>

                        <span>  <Markdown>{markdownText}</Markdown> </span>
                
                    </div>

                </div>
                   
            </div>

            

        </div>
    )
}

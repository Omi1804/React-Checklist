import React from 'react'

export const Editor = (props) => {
    return (
        <div className="editor">
            <div className="editorTitle">
                <input
                    type="text"
                    placeholder='Title...'
                    name='title'
                    onChange={props.updateChange}
                    value={props.currentNote().title} />
            </div>
            <div className="editorMsg">
                <textarea
                    type="text"
                    placeholder='Enter you Message...'
                    name='message'
                    onChange={props.updateChange}
                    value={props.currentNote().message} />
            </div>
        </div>
    )
}

import React from 'react'

export const Sidebar = (props) => {

    const noteElements = props.notes.map((note, index) => {
        return (<div
            className="noteCard"
            onClick={() => props.setCurrentNoteId(note.id)}
            key={index}
        >
            {note.title || `Note ${index}`}
            <button onClick={props.deleteNote}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>)
    })


    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <h1 className='sideHeading'>Notes</h1>
                <button className='sideButton' onClick={props.createNewNote}>+</button>
            </div>
            <div className="notesArray">
                {noteElements}
            </div>
        </div>
    )
}

import React from "react";

import Note from "../Thread/Threads";

import "./ThreadContainer.css";

function ThreadContainer(props) {
    const reverArray = (arr) => {
        const array = [];

        for (let i = arr.length - 1; i >= 0; --i) {
        array.push(arr[i]);
        }

        return array;
    };

    const notes = reverArray(props.notes);

    return (
        <div className="note-container">
        <h2>Threads & Notes</h2>
        <div className="note-container_notes custom-scroll">
            {notes?.length > 0 ? (
            notes.map((item) => (
                <Note
                key={item.id}
                note={item}
                deleteNote={props.deleteNote}
                updateText={props.updateText}
                />
            ))
            ) : (
            <h3>No Notes present</h3>
            )}
        </div>
        </div>
    );
}

export default ThreadContainer;
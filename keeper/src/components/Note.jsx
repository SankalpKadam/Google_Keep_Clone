import React from "react";

function Note(props){
    function delNote(event) {
        console.log("delete");
        props.onClick(props.id)
        event.preventDefault();
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={delNote}>-</button>
        </div>
    );
}

export default Note;
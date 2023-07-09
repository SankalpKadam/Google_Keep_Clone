import React from "react";

function TakeNote(props){
    const [entireNote, setNote] = React.useState({
        title:"",
        content:""
    });
    function handleChange(event) {
        const {name, value}=event.target;
        setNote(prevValue => {
            return ({
                ...prevValue,
                [name]:value
            });
        })
    }

    function submit(event) {
        props.onClick(entireNote);
                setNote({title:"",content:""})
                event.preventDefault()
    }
    return (
        <div className="TakeNote">
        <form>
            <input placeholder= "Title" value={entireNote.title} id="Title" name="title" onChange={handleChange}/>
            <input placeholder= "Take a note..." value={entireNote.content} id = "Content" name="content" onChange={handleChange}/>
            <button onClick={submit} type="submit">+</button>
        </form>
        </div>
    );

}

export default TakeNote;
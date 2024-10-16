import React, { useState } from 'react';

export default function Textfield(props) {
    const [text, setText] = useState("");

    const uppClick = () => {
        setText(text.toUpperCase());
        props.showAlert(" Text converted into uppercase", "Success")
    }

    const lowwClick = () => {
        setText(text.toLowerCase());
        props.showAlert(" Text converted into lowercase", "Success")
    }

    const clearrClick = () => {
        setText("");
        props.showAlert(" Text is cleared", "Success")
    }

    const copyyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert(" Text is copied", "Success")
    }

    const spaceeClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Extra spaces has been removed", "Success")
    }

    const onnvalchange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" id="MyBox" value={text} onChange={onnvalchange} rows="10" style={{ backgroundColor: props.mode === 'dark' ? '#C7C8CC' : 'white' }}></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={uppClick} >Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={lowwClick} >Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={clearrClick} >Clear</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={copyyClick} >Copy text</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={spaceeClick} >Remove extra spaces</button>
            </div>
            <div className="container my-3">
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your text summary here</h1>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} charachters.</p>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read text.</p>
                <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview</h2>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.length > 0 ? text : "Nothing to preview."}</p>
            </div>
        </>
    );
}
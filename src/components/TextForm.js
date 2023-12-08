import React,{useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm({heading,showAlert}) {
    const[text,setText] = useState("");
    const handleUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText)
        showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick =()=>{
        let newText=text.toLowerCase();
        setText(newText)
        showAlert("Converted to Lowercase!","success");
    }
    const handleClearClick =()=>{
        let newText='';
        setText(newText)
        showAlert("Text Cleared!","success");
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        showAlert("Extra Spaces Are Removed!","success");
    }
    const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        showAlert("Text Copied!!!! ","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    return (
        <>
        <div className="container">
            <h1>{heading} </h1>
            {/* <label for="myBox" class="form-label"></label> */}
            <textarea className="form-control my-3" id="myBox" rows="8" value={text} onChange={handleOnChange} ></textarea>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3">
            <h1>Summary of Your Text</h1>
             <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} Words</p>
            <p>{text.trim().length } characters</p>
            <p>{0.008 * text.trim().length} Minutes to Read </p>
        </div>
        </>
    )
}
TextForm.propTypes={
    heading:PropTypes.string.isRequired,
}
TextForm.defaultProps={
    heading:"Enter text to Analyze",
}
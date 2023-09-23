import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        //console.log("done", text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text Coverted to UpperCase", "success")
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Text Coverted to LowerCase", "success")
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied", "success")
    }
    const handleExtraSpaces = () => {
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "));
       props.showAlert("Remove Extra Spaces", "success")
    }
    const handleClearText = () => {
       setText("")
       props.showAlert("Text clear", "success")
     }


    
    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <div className='container'>
                <h1 style={{color:props.mode==="light"?"#042743":"white"}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control"
                        value={text}
                        id="myBox"
                        rows="8"
                        onChange={handleOnChange}
                        style={{background : props.mode==="light"?"white":"grey", color: props.mode==="light"?"#042743":"white"}}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove  Extra space</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>

            </div>
            <div className='container my-3' style={{color:props.mode==="light"?"#042743":"white"}}>
                <h2>Your text summery</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}Words and {text.length}Characters </p>
                <p>{0.008 * text.split(" ").length}Minutes Read </p>
                <h1>preview</h1>
                <p>{text.length>0 ?text:"enter your text to preview it here"}</p>
            </div>
        </>

    )
}

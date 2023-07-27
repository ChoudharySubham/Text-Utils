import React,{useState} from "react";


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Upper case was clicked "  + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","Success")
    }
    const handleLoClick=()=>{
        // console.log("Upper case was clicked "  + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case","Success")
    }
    const clearText=()=>{
        // console.log("Upper case was clicked "  + text);
        let newText =("");
        setText(newText)
        props.showAlert("Text Cleared","Success")
    }
    const copyText=()=>{
        // console.log("Copy text");
        var text =document.getElementById("myBox")
        text.select();
        text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard!","Success")

    }
    const removeExtraSpace=()=>{
        
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaced removed successfully","Success")
    }
    const handleOnChange=(event)=>{
        console.log("Handle on Change");
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    
    // text = "new text"; // wrong way to change the state
    // setText ("new text") ; // Correct way to change the state
      return (

       <>

        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#545050':'white',color:props.mode==='dark'?'white':'black'}} id="myBox"rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={removeExtraSpace}>Remove Space</button>
                </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
                <p>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>

        </>
  );
}
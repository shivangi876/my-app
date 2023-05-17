import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = () =>{
      //  console.log("UpperCase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleUpToclick = () =>{
      //  console.log("UpperCase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleUpToReverseclick = () =>{
        let newText=text.split('').reverse().join('');
        setText(newText)
    }

    const handleCopy = () =>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = () =>{
      let newText = text.split(/ [ ]+/);
      setText(newText.join(" "));
    }
    
    const handleUpToClearclick = () =>{
        let newText='';
        setText(newText)
    }

    const handleOnChange = (event) =>{
       // console.log("On Change");
        setText(event.target.value);
    }

    const[text, setText] = useState('Enter text here..')
    //text="new text";    // wrong way to change state
   // setText("New Text") // correct way to change state
return (
   //Only one thing return using <> return multiples
   <> 
   <div className="container">
       <h1>{props.heading}</h1>
       <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
       </div>
          <button className="btn btn-primary mx-2" onClick={handleUpclick}>Covert To Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleUpToclick}>Covert To Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleUpToReverseclick}>Reverse String</button>
          <button className="btn btn-primary mx-2" onClick={handleUpToClearclick}>Clear text</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces text</button>
    </div>
    <div className="container my-3"> 
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
)
}

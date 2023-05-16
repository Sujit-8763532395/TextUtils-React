import React, {useState} from 'react'

export default function TextForm(props) {
  const handlerUpClick = () => {
    console.log("Uppercase was clicked: "+text);  
    //setText("You have clicked on handlerUpClick") 
    let newText = text.toUpperCase(); 
    setText(newText) 
    props.showAlert("Converted to uppercase.", "success") 
  }
  const handlerLowClick = () => {
    console.log("Lowercase was clicked: "+text);  
    //setText("You have clicked on handlerLowClick") 
    let newText = text.toLowerCase(); 
    setText(newText) 
    props.showAlert("Converted to lowercase.", "success") 
  }
  const handlerClearClick = () => {
    console.log("Text clear was clicked: "+text);  
    //setText("You have clicked on handlerClearClick") 
    let newText = ''; 
    setText(newText) 
    props.showAlert("Entered text cleared.", "success") 
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox"); 
    text.select();
    navigator.clipboard.writeText(text.value); 
    props.showAlert("Entered text copied.", "success") 
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); 
    setText(newText.join(" ")) 
    props.showAlert("Removed extra spaces.", "success") 
  }
  const handlerOnChange = (event) => {
    console.log("On Change"); 
    setText(event.target.value); 
  }
  //const[text, setText] = useState('Enter text here'); 
  const[text, setText] = useState('');
  //text = "New Text"; -> Wrong way to change the text. 
  //setText("New Text") -> Correct way to change the text. 
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>  
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handlerOnChange} rows="8"
                  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea> 
        </div> 
        <button className="btn btn-primary mx-1" onClick={handlerUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handlerLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handlerClearClick}>Clear Text</button> 
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button> 
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p>  */}
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p> 
        <h2>Preview</h2>
        {/* <p>{text}</p> */}
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p> 
      </div>
    </>
  )
}

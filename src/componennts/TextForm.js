import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase","success");
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard","success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  };
  const [text, setText] = useState("");
  return ( 
    <>
      <div className="container"style={{color: props.mode==="dark"?"white":"#042743"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode ==="dark"?"grey":"white",
              color: props.mode === "dark"?"white":"#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleloClick}>
          convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3"style={{color: props.mode==="dark"?"white":"#042743"}}>
      <h1>Your text summary</h1>
      <p>
        {text.split(" ").length} words and {text.length} characters
      </p>
      </div>
    </>
  );
}

import React, { useState } from "react";

export default function Textform(props) {
  const updatetoupper = (event) => {
    const capcase = text.toUpperCase();
    console.log(capcase);
    setText(capcase);
  };

  const updatelowercase = () => {
    const lowerrcase = text.toLowerCase();
    setText(lowerrcase);
  };

  const updatestate = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const handleclearClick = (event) => {
    let newtext=""
    setText(newtext);
    console.log(event.target.value);
  };

  const handlecopy = (event) => {
    var newtext=document.getElementById("myBox")
    newtext.select()
    navigator.clipboard.writeText(newtext.value)
  };

  const removespace=()=>{
    let newtext=text.split(/[ ]+/)
    setText(newtext.join(" "))
  }


  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <div className="mb-3 my-3 container">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={updatestate}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-outline-secondary" onClick={updatetoupper}>
        Convert to uppercase
      </button>
      <button className="btn btn-outline-secondary mx-3" onClick={updatelowercase}>
        Convert to lowercase
      </button>
      <button className="btn btn-outline-secondary" onClick={handleclearClick}>
        Clear text
      </button>
      <button className="btn btn-outline-secondary mx-3" onClick={handlecopy}>
        Copy text
      </button>
      <button className="btn btn-outline-secondary mx-2" onClick={removespace}>
        Remove Extra Space
      </button>

    </div>
    <div className="container my-3">
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split("").length}minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  );
}

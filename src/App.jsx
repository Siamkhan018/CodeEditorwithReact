import React, { useRef, useState } from "react";
import './App.css';

function App() {

  //catch textarea value
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  
  const Ifref = useRef();

  // output execute button handle
  const handleOutput = (e) => {
    Ifref.current.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";

    Ifref.current.contentWindow.eval(jsCode);
  }

  return (
        <div className="playGround">
          <div className="left">

            {/* HTML */}
            <h1>React Code Editor</h1>
             <label>HTML</label>
             <textarea name="html" onChange={(e) => setHtmlCode(e.target.value)}></textarea>

             {/* CSS */}
             <label>CSS </label>
             <textarea name="css" onChange={(e) => setCssCode(e.target.value)}></textarea>

             {/* JS */}
             <label>JavaScript</label>
             <textarea name="javascript" onChange={(e) => setJsCode(e.target.value)}></textarea>             
          </div>
        
        {/* Output */}
          <div className="right">
            <button onClick={handleOutput}>RUN</button>
            <iframe ref={Ifref} />
          </div>
          
        </div>
  )
}

export default App;

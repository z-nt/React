import React from "react";
import "./texteditor.css";



function Document({elements}){
    const elem = elements();
    const keyHandler = (e)=>{
        if(e.key === "Enter"){
            elem.line++;
        }if(e.key){
            elem.wordCounter++
        }if(elem.wordCounter){
            elem.col++
        }
}

    return(
        <>
            <div  className="document" id="text">
            <textarea 
            
            onKeyDown={keyHandler}
            className="doc"
            aria-multiline
            id="textArea"
            />
            <textarea/>
            </div>
        </>
    )
}


export default Document;
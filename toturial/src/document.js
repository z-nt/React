import React from "react";
import "./texteditor.css";



function Document(){
    const keyHandler = (e)=>{
        console.log(e.key);
        if(e.key == "Enter"){
            console.log("hello");
        }
    }
    return(
        <>
            <div  className="document" id="text">
            <textarea 
            onKeyDown={keyHandler}
            className="doc"
            aria-multiline
            />

            <textarea/>
            </div>
        </>
    )
}


export default Document;
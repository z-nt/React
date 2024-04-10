import React from "react";

import { useState } from "react";

import "./texteditor.css";



function Document(){
    // const [text,setText] = useState("");
    
    const keyHandler = (e)=>{
        console.log(e.key);
        //  console.log(e.target.value);
        if(e.key == "Enter"){
           
        }

    }
    
    // const moushandler = (e)=>{
    //     e.preventDefault();
    // }

    // document.body.addEventListener("keydown",keyHandler);
    // document.body.addEventListener("mousedown",moushandler);

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
import React from "react";
import "./App.css";

function ArrBox (props){
        return(
            <>
               <div className="arr-box">
                 {props.numbers} 
               </div>      
            </>
        )
}


export default ArrBox;
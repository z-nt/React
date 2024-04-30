import React from "react";
import "./App.css";

function Buttons (props){
        return(
            <>
                <button  onClick={props.handelClick} className="buton">{props.name}</button>       
            </>
        )
}


export default Buttons;
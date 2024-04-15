import React, { useState } from "react";
import Header from "./headerTextEditor";
import Navbar from "./navbar";
import Document from "./document";
import Footer from "./footer";
import "./texteditor.css";



function TextEditor(){
  
  const  state = {
        elements:{
            col:1,
            wordCounter:1,
            line:1
        }
    }

const addElement = ()=>{
    return state.elements
}

const addState= ()=>{
   return state.elements
}


    return(
        <>
            <div className="textEditor">
                <Header/>
                <Navbar/>
                <Document elements={addElement}/>
                <Footer   state={addState}/>
            </div>
        </>
    )
}


export default TextEditor;
import React from "react";
import Header from "./headerTextEditor";
import Navbar from "./navbar";
import Document from "./document";
import Footer from "./footer";
import "./texteditor.css";



function TextEditor(){
    return(
        <>
            <div className="textEditor">
                <Header/>
                <Navbar/>
                <Document/>
                <Footer/>
            </div>
        </>
    )
}


export default TextEditor;
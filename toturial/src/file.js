import React from "react";
import Header from "./headerTextEditor";
import "./texteditor.css";




function File(){
   const handelClick = ()=>{
        var fileMenu = document.getElementById("file-menu");
        if(fileMenu.style.display=="none"){
            fileMenu.style.display = "flex"
        }else{
            fileMenu.style.display = "none"
        }
    }

    const newTap    = ()=>{
        console.log("newTap");        
    }
    const newWin    = ()=>{
        console.log("newWin");
    }
    const open      = ()=>{
        console.log("open  ");
    }
    const save      = ()=>{
        console.log("save  ");
    }
    const saveAs    = ()=>{
        console.log("saveAs");
    }
    const saveAll   = ()=>{
        console.log("saveAl");
    }
    const exit      = ()=>{
        console.log("exit  ");
    }









    return(
        <>
          <li id="file" onClick={handelClick} className="nav-item">file
          <ul className='file-menu' id="file-menu">
          <li onClick={newTap } id="newTap" className='file-btn'>New Tap</li>
          <li onClick={newWin } id="newWin" className='file-btn'>New Window</li>
          <li onClick={open   } id="open" className='file-btn'>Open</li>
          <li onClick={save   } id="save" className='file-btn'>Save</li>
          <li onClick={saveAs } id="saveAs" className='file-btn'>Save As</li>
          <li onClick={saveAll} id="saveAll" className='file-btn'>Save All</li>
          <li onClick={exit   } id="exit" className='file-btn'>Exit</li>
        </ul>
          
          
          </li>
        </>
    )
}

export default File;
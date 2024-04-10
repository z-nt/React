import React from "react";
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


    return(
        <>
          <li id="file" onClick={handelClick} className="nav-item">file
          <ul className='file-menu' id="file-menu">
          <li id="newTap" className='file-btn'>New Tap</li>
          <li id="newWin" className='file-btn'>New Window</li>
          <li id="open" className='file-btn'>Open</li>
          <li id="save" className='file-btn'>Save</li>
          <li id="saveAs" className='file-btn'>Save As</li>
          <li id="saveAll" className='file-btn'>Save All</li>
          <li id="exit" className='file-btn'>Exit</li>
        </ul>
          
          
          </li>
        </>
    )
}

export default File;
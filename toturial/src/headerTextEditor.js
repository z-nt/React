import React from "react-dom";
import NewFIle from "./newFIle";
import { useState } from "react";
import "./texteditor.css";

let nextId =1;
function Header(){
    const [newItems,setNewItems] = useState([]);

    const createObject = ()=>{
        let newObject ={
            name:"newfile",
            id:nextId ++,
        }
        return newObject;
    }


    const createItems = ()=>{
       const object= createObject();
        setNewItems([
            ...newItems,{name:object.name,id:object.id}
        ])    
    }
    
    const arrowLeft=()=>{
        console.log("sadsa");
       var left = 0;
        const fileName= document.getElementById("fileName");
        fileName.scrollTo({
            left: 100 + "px",
            behavior:"smooth"
        })

    }

    const arrowRight=()=>{
        var right = 0;

        const fileName= document.getElementById("fileName");
        fileName.scrollTo({
            right: 100 + "px",
            behavior:"smooth"
        })
        
    }







return(
        <>
            <div className="headers">
                <ul className="headerMenu">
                        <div className="Logo">
                            logo
                        </div>
                            <button onClick={arrowLeft} id="arrowLeft" className="arrowLeft">al</button> 
                             <li id="fileName" className="fileName">
                                    <ul id="fileBox" className="newfile">
                                       {newItems.map(item=>(
                                        <li key={item.id}>{item.name}</li>
                                       ))}
                                    </ul>
                             </li>
                        <button onClick={arrowRight} id="arrowRight" className="arrowRight">ar</button> 
                        <button onClick={createItems}  className="plus">+</button>
                </ul>
                <div className="btns">
                            <li>m</li>
                            <li>u</li>
                            <li>c</li>
                        </div>
            </div>
        </>
    )
}

export default Header;
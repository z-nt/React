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
return(
        <>
            <div className="headers">
                <ul className="headerMenu">
                        <div className="Logo">
                            logo
                        </div>
                            <button id="arrowLeft" className="arrowLeft">al</button> 
                             <li id="fileName" className="fileName">
                                    <ul id="fileBox" className="newfile">
                                       {newItems.map(item=>(
                                        <li id={item.id} className="Items" key={item.id}>{item.name}</li>
                                       ))}
                                    </ul>
                             </li>
                        <button  id="arrowRight" className="arrowRight">ar</button> 
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
import React from "react";
import Document from "./document";
import { useState } from "react";
import "./texteditor.css";

function Header(){

const [state , setState] = useState("newfile");
    
const newFIle = [
        {name:"newfile",id:1},
        {name:"newfile",id:2},
        {name:"newfile",id:3},
];

const newObject ={
    name:null,
    id:null
};



const handelClick = ()=>{
    createDoc(newFIle)
    setState(newObject.name)
    createList();
};

function createList(){
    let fileBox = document.getElementById("fileBox");
    let newElemetn = document.createElement("li");
    newElemetn.setAttribute("id",newObject.id);
    newElemetn.className="newItems";
    newElemetn.innerHTML=state;
    fileBox.appendChild(newElemetn);     
};

   function  createDoc (arr){
    let plusId = 0;
    let temp =arr[0];
    for(var i = 0 ; i <arr.length ; i++){
            if(arr[i].id > temp.id) {
                temp = arr[i];
                plusId = temp.id + 1;
            }                
    }
    newObject.name = arr[0].name;
    newObject.id = plusId;
    arr.push(newObject);
   
} ; 

const arrowLeft= ()=>{
    let fileBox = document.getElementById("fileBox");
    let newItems = document.querySelectorAll(".newItems");

    for (var i = 0 ; i < newItems.length ; i++){
        if(newItems[0].id < newItems[i].id) {
            newItems[i] = newItems[0];
        }

        console.log(newItems[0]);
    }


}









    return(

        <>
            <div className="headers">


                <ul className="headerMenu">

                        <div className="Logo">
                            logo
                        </div>

                            <button  onClick={arrowLeft} id="arrowLeft" className="arrowLeft">al</button> 
                             <li id="fileName" className="fileName">
                                    <div id="fileBox" className="newfile"></div>
                             </li>
                            <button id="arrowRight" className="arrowRight">ar</button> 

                             <button onClick={handelClick} className="plus">+</button>

                       
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
import React from "react-dom";
import "./texteditor.css";


console.log("asdsad");

function Header(){

const newFIle = [
        {name:"newfile",id:1},
];


const newObject ={
    name:null,
    id:null
};

const createObject = ()=>{
    let x = 1;
    for (var i = 0 ;  i < newFIle.length ; i++){
        newObject.name = newFIle[i].name;
        if(newObject.id <= newFIle[i].id ){
            x++;
            newObject.id = x ;
        }

    }

    newFIle.push(newObject);
    let newElement = document.createElement("li");
    newElement.innerHTML = `${newObject.name}`;
    newElement.setAttribute("id",newObject.id);
    let newfile = document.getElementById("fileBox");
    newfile.append(newElement);
}

const arrowLeft = ()=>{
    console.log(newFIle);
}









return(
        <>
            <div className="headers">
                <ul className="headerMenu">
                        <div className="Logo">
                            logo
                        </div>
                            <button onClick={arrowLeft}  id="arrowLeft" className="arrowLeft">al</button> 
                             <li id="fileName" className="fileName">
                                    <div id="fileBox" className="newfile"></div>
                             </li>
                        <button id="arrowRight" className="arrowRight">ar</button> 
                        <button onClick={createObject} className="plus">+</button>
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
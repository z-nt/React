import React from "react";
import "./App.css";
import Buttons from "./buttons";
function ButtonsBox(){

const bubbleSort =(e)=>{
    console.log(e.target.value);
}

const selectionSort =(e)=>{
    console.log(e.target.value);
}

const insertionSort =(e)=>{
    console.log(e.target.value);
}

const quickeSort =(e)=>{
    console.log(e.target.value);
}

const countingSort =(e)=>{
    console.log(e.target.value);
}

    return(
        <>
            <div className="algorithmList col-lg-6 col-md-9 col-sm-12 col-12">
                <Buttons handelClick={bubbleSort   }    name="bubbleSort"      id="bubbleSort"    className="buton"/>
                <Buttons handelClick={selectionSort}    name="selectionSort"   id="selectionSort" className="buton"/>
                <Buttons handelClick={insertionSort}    name="insertionSort"   id="insertionSort" className="buton"/>
                <Buttons handelClick={quickeSort   }    name="quickeSort"      id="quickeSort"    className="buton"/>
                <Buttons handelClick={countingSort }    name="countingSort"    id="countingSort"  className="buton"/>
            </div>
        </>
    )
}

export default ButtonsBox;
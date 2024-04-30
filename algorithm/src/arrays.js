import React from "react";
import ArrBox from "./arrayBox";
import "./App.css";

function Arrays(){
    const numbers = [2,3,4,5,5,6,7,7,8];
    return(
        <>
            <div className="arrays-box col-lg-6 col-md-9 col-sm-12 col-12 ">
                <ArrBox id="bubbleSortArr"     numbers={numbers} />
                <ArrBox id="selectionSortArr"  numbers={numbers} />
                <ArrBox id="insertionSortArr"  numbers={numbers} />
                <ArrBox id="quickeSortArr"     numbers={numbers} />
                <ArrBox id="countingSortArr"   numbers={numbers} />
            </div>
        </>
    )
}


export default Arrays;

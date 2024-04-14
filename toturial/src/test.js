import React from "react";
import { Component } from "react";
import { useState } from "react";
import "./App.css";


class Test extends Component{
    
    state={
        slider:[
            {name:"item1",id:1, key:1},
            {name:"item2",id:2, key:2},
            {name:"item3",id:3, key:3},
            {name:"item4",id:4, key:4},
        ]   
    }
    
    
    
    
    render(){
        return(
            <>
                <div className="slider">
                    <h4>header</h4>
                        <div className="sliderBox">
                             <div className="sliderItems">
                                <h1>{[...this.state.slider]}</h1>
                             </div>
                        </div>

                        <div className="btnsBox">
                            <button id="left">left</button>
                            <button id="right">right</button>
                        </div>
                </div>
            </>
        )
    }
}


export default Test;
import React from "react";
import { Component } from "react";
import { useState } from "react";
import "./App.css";


 function Test ({name}){ 
    const users = name();




    return(
            <>
                <div className="slider">
                    {/* {users.map(use=>(
                        <h1>{use.name}</h1>,

                    ))} */}
                    
                </div>
            </>
        )
    
}


export default Test;
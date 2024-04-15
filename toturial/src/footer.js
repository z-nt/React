import React, { useState } from "react";
import "./texteditor.css";


function Footer({state}){
    const number=state()
    return(
        <>
            <div className="footer">
                    <ul className="ftr-nav">
                            <li className="ftr-item"  >
                                <span>{number.line},<span>{number.col}</span></span>
                            </li>
                            <li className="ftr-item" >
                                <span>{number.wordCounter}</span>  characters
                            </li>
                            <li className="ftr-item" >100%</li>
                            <li className="ftr-item" >
                                Windows(crlf)
                            </li>
                            <li className="ftr-item" >utf-8</li>
                    </ul>
            </div>
        </>
    )
}


export default Footer;
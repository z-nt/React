import React from "react";
import "./texteditor.css";


function Footer(){
    return(
        <>
            <div className="footer">
                    <ul className="ftr-nav">
                            <li className="ftr-item" >
                                <span>LN:1,<span>col:1</span></span>
                            </li>
                            <li className="ftr-item" >
                                <span>1</span>characters
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
import React from "react";
import "./texteditor.css";
import File from "./file";

function Navbar(){




    return(
        <>
            <div className="navbar-menu">
                    <ul className="nav">
                        <File/>
                        <li className="nav-item">edit</li>
                        <li className="nav-item">view</li>
                    <div className="btn-setting">
                        <li className="nav-setting">
                            setting
                        </li>
                    </div>
                    </ul>
            </div>
        </>
    )
}


export default Navbar;
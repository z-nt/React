import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import Document from "./document";
import Footer from "./footer";
import Header from "./headerTextEditor";

import { BrowserRouter,Route,Routes } from "react-router-dom";

 export default function Main(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/" element={<Document/>} />
                <Route path="/" element={<Footer/>} />
                <Route path="/" element={<Header/>} />
            </Routes>
        </BrowserRouter>
    )


}




const root = ReactDOM.createRoot(
    document.getElementById("root")
);






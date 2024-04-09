import React from "react";
import "./loginRegister.css";

const  Users = ({persons}) => {

    return(
            
                <div className="person" key={persons.id}>
                    <h3>name:  {persons.name}</h3>
                    <h3>serial:{persons.serial}</h3>
                    <h3>pass:  {persons.pass}</h3>
                </div>
    );


}

export default Users;
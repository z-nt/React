import React from "react";
import "./loginRegister.css";

function Users({addPersons}){
  
  const personList = addPersons.map((user)=>{
        return(
            <>
                <div className="person" >
                    <h3>name:  {user.name}</h3>
                    <h3>serial:{user.serial}</h3>
                    <h3>pass:  {user.pass}</h3>
                </div>
            </>
        )

    })

    return(
        <>
         {personList}
        </>
    )
}


export default Users;
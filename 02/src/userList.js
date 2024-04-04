import React from "react";

function UserList({ractors}){
    const ractor = ractors;
      return(
        <>
            <ul className="listMenu">
                <li className="list-item">
                    <h2>{ractor.name}</h2>
                    <h2>{ractor.work}</h2>
                </li>
            </ul>
        
        </>
    )

      
}
export default UserList;



import React from "react";
import './index.css';



class UserList extends React.Component{
    state={
        name:"kian",
        age:26
    }    
    

    chanegeName=()=>{
        this.setState({name:"mobin"})
    }
    render(){
        return(
            <>
            <div className="box">
                <h1>userList</h1>
                <div className="list">
                    <ul className="users">
                            <li>{this.state.name}</li>
                    </ul>
                    <button onClick={this.chanegeName}>
                        change name
                    </button>
                </div>
            </div>
            </>
        )
    }

}



export default UserList;
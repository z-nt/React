import React from "react";
import { Component } from "react";
import Login from './login';
import UserList from './userList';
class App extends Component{
  state={
        users:{
          name:"kian",work:"programmer"
        }
  }
  addUser = atusers =>{
   
      this.setState({users:atusers})
  }


    render(){
      return(
        <>
            <Login addUser={this.addUser}  />,
            <UserList ractors = {this.state.users} />
        </>
      )
    }

}


export default App;
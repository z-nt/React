import "./app.css"
import { Component } from "react";

class Login extends  Component{
    state={
        name:null,
        work:null
    }
    
    handelChange =(e)=>{
            this.setState({
                [e.target.id]:e.target.value
            })

    }
    handelClick = (e) => {
        e.preventDefault()
       // console.log(usinput);
        this.props.addUser(this.state)
    }
render(){
    return(
        <>
            <form className="login-box">
               UserName: <input type="text" 
               className="input" id="name" 
                onChange={this.handelChange}
                />
               wrok: <input type="text"
                 className="input" 
                 id="work" 
                 onChange={this.handelChange}
                 />
                <button onClick={this.handelClick} >addUser</button>
            </form>
        </>
    )
}  
   
}
export default Login;
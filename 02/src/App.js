import { Component } from "react";
import "./loginRegister.css"
import SingUp from "./singup";

class  Main extends Component{

state={
    user:{
        name:"null",
        serial:"null",
        pass:"null"
    }
 }

    render(){
        
   const handelChange=()=>{
        this.setState(
            this.props.person=(person)=>{
                person.name = this.state.user.name;
                person.serialNumber = this.state.user.serial;
                person.pass = this.state.user.pass;
            }
        )

}
        return(
            <>
                    <div className="person">
                        <h3>person name:  {this.state.name}   </h3>
                        <h3>person serialNumber:</h3>
                        <h3>person password:    </h3>
                    </div>
                <SingUp  changeState={handelChange}/>
            </>
        )
    }
}


export default Main;
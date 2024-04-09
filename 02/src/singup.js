import { Component } from "react";
import "./loginRegister.css"


class SingUp extends Component{
    
    state = {
        name : null,
        serial: null,
        pass:null 
    }

    handelChange = (e)=>{
        e.preventDefault();
        this.setState({ [e.target.id] : e.target.value})
    }


    handelSubmit = (e) =>{
        e.preventDefault();
        this.props.addUsers(this.state)
     }    

    render(){
        return(
            <>
                <form className="singUp"  action="#">
                    <fieldset>
                        <label htmlFor="username" >userName</label>
                        <input  onChange={this.handelChange} type="text" placeholder="userName" id="name" />
                    </fieldset>
                   
                    <fieldset>
                        <label htmlFor="serialNumber" >serialNumber</label>
                        <input   onChange={this.handelChange} type="text" placeholder="serialNumber" id="serial" />
                    </fieldset>
                   
                    <fieldset>
                        <label htmlFor="password" >password</label>
                        <input  onChange={this.handelChange} type="text" placeholder="password" id="pass" />
                    </fieldset>


                    <input onClick={this.handelSubmit}  type="submit" placeholder="submit"/>
                </form>
            </>
        )
    }
}


export default SingUp;
import { Component } from "react";
import "./loginRegister.css"


class SingUp extends Component{

    render(){
        return(
            <>
                <form className="singUp">
                    <fieldset>
                        <label htmlFor="username" >userName</label>
                        <input type="text" placeholder="userName" id="username" />
                    </fieldset>
                   
                    <fieldset>
                        <label htmlFor="serialNumber" >serialNumber</label>
                        <input type="text" placeholder="serialNumber" id="serialNumber" />
                    </fieldset>
                   
                    <fieldset>
                        <label htmlFor="password" >password</label>
                        <input type="text" placeholder="password" id="password" />
                    </fieldset>


                    <input type="submit" placeholder="submit"/>
                </form>
            </>
        )
    }
}


export default SingUp;
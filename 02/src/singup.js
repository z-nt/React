import { Component } from "react";
import "./loginRegister.css"


class SingUp extends Component{

    state ={
        persons:[{name:null,serialNumber:null,pass:null}]
    }

    render(){

      const   addPerson = (props) =>{
                console.log("hello");
    }
    const setName = (e) =>{
       this.setState(this.state.persons.forEach(person =>{
        person.name = e.target.value;
       }))
        
    }
    const setSerialNumber = (e) =>{
       this.setState(this.state.persons.forEach(person =>{
        person.serialNumber = e.target.value;
       }))
        
    }
    const setPass = (e) =>{
       this.setState(this.state.persons.forEach(person =>{
        person.pass = e.target.value;
       }))
        
    }



        return(
            <>
                <form className="singUp"  action="#">
                    <fieldset>
                        <label htmlFor="username" >userName</label>
                        <input  onChange={setName} type="text" placeholder="userName" id="username" />
                    </fieldset>
                   
                    <fieldset>
                        <label htmlFor="serialNumber" >serialNumber</label>
                        <input   onChange={setSerialNumber} type="text" placeholder="serialNumber" id="serialNumber" />
                    </fieldset>
                   
                    <fieldset>
                        <label htmlFor="password" >password</label>
                        <input  onChange={setPass} type="text" placeholder="password" id="password" />
                    </fieldset>


                    <input onClick={addPerson}   type="submit" placeholder="submit"/>
                </form>
            </>
        )
    }
}


export default SingUp;
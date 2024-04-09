import { Component } from "react";
import SingUp from "./singup";
import Users from "./list";

class Main extends Component{

    state={
        persons:[
            {name:"kian" , serial:214546 , pass:123456},
            
        ]
    }

    addUsers=(users)=>{
        console.log(users);
        this.setState( this.state.persons = users)







        // let shakhs =[...this.state.persons,users]
        // this.setState(
        //     {users:shakhs}
        // )
        // console.log(users);
        // const states = this.state.persons;
        // for(var i = 0 ; i < states; i++ ){
        //     if(states[i] == users){
        //         console.log("hastesh");
        //     }else{
        //         console.log("nistesg");
        //         states.push(users);
        //     }
        // }
    }

    render(){
        return(
            <>
                <Users addPersons={this.state.persons} />    
                <SingUp addUsers={this.addUsers}/>
            </>
        )
    }

}


export default Main;
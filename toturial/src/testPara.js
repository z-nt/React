import React from "react";
class Car extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <h1>i am {this.props.color}</h1>
        )
    }
}

export default Car;
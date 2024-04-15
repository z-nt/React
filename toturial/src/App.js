import './App.css';
import Test from './test';
import TextEditor from './textEditor';


function App() {
  // const state={
  //   names:[
  //     {name:"ali",age:26},
  //     {name:"mobin",age:27},
  //     {name:"erfan",age:28},
  //   ]
  // }
  // const addNames = ()=>{
  //   const user = [];
  //   for(var i = 0 ; i <state.names.length ; i++){
  //       user.push( state.names[i]);
  //   }
  //   return user;
  // }



  return (
    <div className="App">
       {/* <Test name={addNames}/> */}
       <TextEditor/>  
    </div>
  );
}

export default App;

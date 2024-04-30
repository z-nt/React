import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import ButtonsBox from './algorithm';
function App() {
  return (
    <div className="app col-xl-12 col-lg-12  col-md-12 col-sm-12 col-12">
        <div className='box col-12'>
                  <div className=' box-item box-algorithm-buttons col-6'>
                      <h1>Choose Youre Algorithm</h1>
                      <ButtonsBox/>
                  </div>
                  <div className=' box-item box-algorithm-inputs col-6'>
                     <h1>See How Algorithm Works </h1>
                  </div>
        </div>
    </div>
  );
}

 export default App;


 // In the parent component, create a callback function. ...
// Pass the callback function to the child as a prop from the parent component.
// The child component calls the parent callback function using props and passes the data to the parent component.

import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils"/> 
    <Alert alert="Great"/>
    <div className="container my-3">
    {/* <Switch> */}
         {/* users -- component 1 
          users/home -- component 2 
          React do partial matching you have to write exact for complete matching*/}
          {/* <Route exact path="/about"> 
            <About />
          </Route> */}
{/*           
          <Route exact path="/"> */}
            <TextForm heading="Enter the text to analyze below"/> 
          {/* </Route> */}
        {/* </Switch> */}

    </div>
    {/* </Router> */}
   </>
    
  );
}

export default App;

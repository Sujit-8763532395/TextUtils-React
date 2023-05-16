//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//import { useRef } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');  
  const[toggleText, setToggleText] = useState('Enable Dark Mode'); 
  const[toggleTextColour, setToggleTextColour] = useState('dark'); 
  const[alert, setAlert] = useState(null); 
  const[colorCode, setColorCode]= useState('white');

  const handleColor=(event)=>{           
    setColorCode(event.target.value);
    document.body.style.backgroundColor = `${colorCode}`;
    if(mode === 'dark') {
      setToggleTextColour('dark'); 
    }
    else {
      setToggleTextColour('light'); 
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null); 
    }, 1500)
  }

  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light');
      setToggleText('Enable Dark Mode'); 
      setToggleTextColour('dark'); 
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success"); 
      document.title='TextUtils-Light Mode';
      setInterval(() => {
        document.title='TextUtils is a amazing mode.';
      }, 2000);
      setInterval(() => {
        document.title='Install TextUtils application now.';
      }, 1500);
    }
    else {
      setMode('dark');
      setToggleText('Enable Light Mode'); 
      setToggleTextColour('light'); 
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled.", "success"); 
      document.title='TextUtils-Dark Mode';
      setInterval(() => {
        document.title='TextUtils is a amazing mode.';
      }, 2000);
      setInterval(() => {
        document.title='Install TextUtils application now.';
      }, 1500);
    }
  } 
  return (
    <>
      {/* <Router> */}
        {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
        {/*<Navbar/>*/} 
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} 
                toggleText={toggleText} toggleTextColour={toggleTextColour} handleColor={handleColor}/>    
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* <Routes>    */}
            {/* <Route exact path="/about" element={<About/>} />  */}
            {/* <Route exact path="/home" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} /> */}
            <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> 
          {/* </Routes>  */}
        </div> 
      {/* </Router> */}
    </>
  );
}

export default App;

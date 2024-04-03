// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React , {useState , useEffect}from 'react'
import './App.css';
import Home from './Home';
import Navbrand from './Navbrand';
import About from './About';
import Contact from './Contact';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import BeatLoader  from 'react-spinners/BeatLoader';
import 'bootstrap/dist/css/bootstrap.min.css';


import Form from './Form';
import Footbar from './Footbar';





const App = () => {
  const [Loading ,setLoading]  = useState(false);
 
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {setLoading(false);},3000)
      
  
}, [] );
  

  return (
    
   
      <BrowserRouter>
      {Loading ? 
      <div className='preloader'>
        

<BeatLoader color="#36a9d6"  loading={Loading} speedMultiplier={0.5} />
      
      
      </div>
      
      :
      <>
      <Navbrand />
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/About' element ={<About/>} />
        <Route path='/Contact' element ={<Contact/>} />
      </Routes>
     <Footbar />

      </>
     
      
      }
     
      </BrowserRouter>
    
  )
}

export default App
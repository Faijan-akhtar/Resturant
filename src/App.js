import logo from './logo.svg';
// import './App.css';
import'./Style/HeaderStyle.css'
import'./Style/HomeStyle.css'

import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import Notfound from './Pages/Notfound';
import Home from './Pages/Home';
function App() {
  return (
   <>
   
   <BrowserRouter>
     <Routes>
      <Route path='/Home' element={<Home/>}  />
      <Route path='/About' element={<About/>}  />
      <Route path='/Contact' element={<Contact/>}  />
      <Route path='/Menu' element={<Menu/>}  />
     
      <Route path='/Contact' element={<Contact/>}  />
      <Route path='*' element={< Notfound/>}  />

      
     </Routes>
   </BrowserRouter>
   
   
   </>
  );
}

export default App;

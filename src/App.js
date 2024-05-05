import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import { Effect } from './Components/Effect';
// import { Useffect } from './Components/Useffect';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Cart } from './Components/Cart';
import { useState } from 'react';
import { Scroll } from './Components/Scroll';
import { Navbar } from './Components/Navbar';
import { Otp } from './Components/Otp';
import { UseForm } from './UseForm';
import { Inputs } from './Inputs';
import { Dropdown } from './Dropdown';

function App() {
  return (
    // <div className="App">
    //   <h1>hell no</h1>
    //   {/* <Useffect/> */}
    //   {/* <Effect/> */}
    // </div>
   <div>
    <Navbar/>
    <UseForm/>
    <Inputs/>
    <Dropdown/>
    {/* <Otp/> */}
     {/* <Scroll/> */}
    {/* <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter> */}
   </div>
  );
}

export default App;

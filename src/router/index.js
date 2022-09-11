import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";

function Router(props) {
  return (
    <Routes>
      <Route path='/' element={ <Home/> } exact />
      <Route path='/about' element={ <About/> } />
      <Route path='/contact' element={ <Contact/> } />
    </Routes>
  );
}

export default Router;
//import "./app.scss";
//import Produse from './components/produse/Produse';
//import Signaletica from './components/produse/Signaletica';
import TemplateProduse from './components/produse/TemplateProduse';

//import Trofee from './components/produse/Trofee';
//import Industriale from './components/produse/Industriale';
//import Promotionale from './components/produse/Promotionale';


import PrimaPagina from './pages/PrimaPagina';
import Topbar from './components/topbar/Topbar';
import Menu from './components/menu/Menu';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from './App';
//import './app1.css'

import { useState } from "react";

export default function App1() {
  const [menuOpen,setMenuOpen] = useState(false)
 
  return (
    
    <div className="app1">

<Router>
     


    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

<ScrollToTop />
<Routes>

<Route path="/" element={<PrimaPagina />} />
<Route path="/produse" exact element={<TemplateProduse />} />


</Routes>
</Router>

 </div>
  );
}

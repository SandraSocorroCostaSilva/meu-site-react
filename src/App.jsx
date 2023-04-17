import React from "react";
import "./App.css";
import Header from "../src/components/Header";
import Curriculo from "./Components/Curriculo/Curriculo";
import Portifolio from "./components/Portifolio/Portifolio";
import Contato from "./components/Contato/Contato";
import {BrowserRouter,Routes,Route, Link} from "React-router-dom";

function app() {
    return(
        <BrowserRouter>
        <div className="menu">
            <ul>
                <li><Link to="/">Curriculo</Link></li>
                <li><Link to="/blogs">Portifolio</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
            </ul>
        </div>
      <Routes>
        
          <Route index element={<Curriculo />} />
          <Route path="Portifolio" element={<Portifolio />} />
          <Route path="Contato" element={<Portifolio />} />
        
      </Routes>
    </BrowserRouter>
    )
}

function App() {
  return (
    <>
    
    
        <Header></Header>
        

        
        
   
        <Curriculo></Curriculo>
       
       
        <footer>DESENVOLVIDO POR SANDRA COSTA</footer>
        </>
)
      
    }

export default App;

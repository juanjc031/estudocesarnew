import React from "react";
import Home from "./Home"
import Sobre from "./Sobre";
import Artigos from "./Artigos";
import Equipe from "./Equipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/sobre" element={<Sobre/>}></Route>
                 <Route path="/artigos" element={<Artigos/>}></Route> 
                 <Route path="/equipe" element={<Equipe/>}></Route> 
            </Routes>
        </Router>
    )
}

export default AppRoutes;
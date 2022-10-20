import React from "react";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import TeamBuilder from './Components/TeamBuilder';
import NavBar from "./Components/Nav";

export default function RouteSwitch() {
    
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/teambuilder' element={<TeamBuilder />} />
            </Routes>
        </BrowserRouter>
    )
}
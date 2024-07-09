import React from 'react'
import {Routes, Router, Route} from 'react-router-dom';

import Help from './HelpContainer'
import Home from './HomeContainer'
import Profile from './ProfileContainer'
import Header from './HeaderContainer'
import Login from './LoginContainer'
import AlertMessage from './AlertMessageContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/app.css'
import { Outlet } from "react-router-dom";

const App = () => (
    <div className="App">
        <Header/>
        <AlertMessage/>
        <Outlet />      
               
    </div>
)

export default App

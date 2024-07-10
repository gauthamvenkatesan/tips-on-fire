import React from 'react'
import Header from './HeaderContainer'
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

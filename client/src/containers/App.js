import React from 'react'
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history'

import Help from './HelpContainer'
import Home from './HomeContainer'
import Profile from './ProfileContainer'
import Header from './HeaderContainer'
import Login from './LoginContainer'
import AlertMessage from './AlertMessageContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/app.css'

const App = () => (
    <Router history={createBrowserHistory()}> 
        <Header/>
        <AlertMessage/>
        <Switch>
            <Route path="/help"> <Help/></Route>
            <Route path="/profile"> <Profile/></Route>
            <Route path="/login"> <Login/> </Route>
            <Route path="/home"> <Home/></Route>
            <Route path="/"> <Home/></Route>
        </Switch>
    </Router>
)

export default App

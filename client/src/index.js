import React from 'react'
import { Provider } from 'react-redux'
import App from './containers/App'
import Login from './containers/LoginContainer'
import Profile from './containers/ProfileContainer'
import Help from './containers/HelpContainer'
import Home from './containers/HomeContainer'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import {store} from './store';
import ErrorPage from './components/errorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,  
    children:[
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/profile",
          element: <Profile/>,
        },
        { 
          path: "/help",
          element: <Help/>,
        },
        {
          path: "/home",
          element: <Home/>,
        }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

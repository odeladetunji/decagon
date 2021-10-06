import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import LandingPage from './LandingPage';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import {
  BrowserRouter,
  Router,
  Switch,
  Route
} from "react-router-dom";

const history = createBrowserHistory();




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Router history={history}>
       <Switch>
          {/* <Route path="/" component={Login} />
          <Route path="/search" component={App} /> */}
          <Route path="/" component={LandingPage} />
       </Switch>
    </Router>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

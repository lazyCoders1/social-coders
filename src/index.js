import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import "bootstrap/dist/css/bootstrap.min.css";
//! MDB https://www.npmjs.com/package/mdbreact as REF
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
import 'mdbreact/dist/css/mdb.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Reduxs/store'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  
  document.getElementById("root")
);

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './component/Header';
// import Login from './component/Login';
import Footer from './component/Footer';
import Main from './component/Main';

import './index.css';

ReactDOM.render(
  <div>
    <Header/>
    {/* <Login/> */}
    <Main/>
    <Footer/>
  </div>,
  document.getElementById("root")
);

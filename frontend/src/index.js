import React from 'react';
import ReactDOM from 'react-dom';

import Header from './component/Header';
// import Login from './component/Login';
import Footer from './component/Footer';
// import Main from './component/Main';

import './index.css';
import { Logincheck } from './component/LoginCheck';

ReactDOM.render(
  <div>
    <Header/>
    <Logincheck/>
    {/* <Login/> */}
    {/* <Main/> */}
    <Footer/>
  </div>,
  document.getElementById("root")
);

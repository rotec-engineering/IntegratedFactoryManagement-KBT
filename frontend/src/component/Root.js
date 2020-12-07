import React from 'react'
import Footer from './Footer';
import Header from './Header';
import '../index.css';
import { Logincheck } from './LoginCheck';

function Root() {
  return (
    <div>
    <Header/>
    <Logincheck/>
    <Footer/>
  </div>
  )
}

export default Root;
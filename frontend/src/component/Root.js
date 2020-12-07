import React, { useState } from 'react'
import Footer from './Footer';
import Header from './Header';
import '../index.css';
import { Logincheck } from './LoginCheck';

function Root() {
  const [ isLogin, setisLogin ] = useState(false);
  const [ name, setName ] = useState('');

  const checkingInRoot = (bool, customer) => {
    setisLogin(bool);
    setName(customer);
  }

  return (
    <div>
      <Header isLogin={isLogin} name={name}/>
      <Logincheck checkingInRoot={checkingInRoot}/>
      <Footer/>
    </div>
  )
}

export default Root;
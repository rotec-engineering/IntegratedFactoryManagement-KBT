import React, { useState } from 'react'
import Footer from './Footer';
import Header from './Header';
import '../index.css';
import { Logincheck } from './LoginCheck';

function Root() {
  // Header와 LoginCheck에서 사용할 state
  const [ isLogin, setisLogin ] = useState(false);
  const [ name, setName ] = useState('');

  // Header와 LoginCheck와 Login 컴포넌트에서 사용할 함수
  const checkingInRoot = (bool, customer) => {
    setisLogin(bool);
    setName(customer);
  }

  return (
    <div className="root">
      <Header isLogin={isLogin} name={name} checkingInRoot={checkingInRoot}/>
      <Logincheck isLogin={isLogin} checkingInRoot={checkingInRoot}/>
      <Footer/>
    </div>
  )
}

export default Root;
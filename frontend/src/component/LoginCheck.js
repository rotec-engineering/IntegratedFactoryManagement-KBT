import React from 'react'

import Login from './Login';
import Main from './Main';


export function Logincheck({ checkingInRoot, isLogin }) {  
  return (
    <div className="content">
      {isLogin ? <Main/> : <Login checkingInRoot={checkingInRoot}/>}
    </div>
  )
}

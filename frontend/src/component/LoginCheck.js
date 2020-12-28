import React from 'react'
import Login from './Login';
import Main from './Main';

export function Logincheck({ checkingInRoot, isLogin }) {  
  // chekcingInRoot는 Root 컴포넌트의 함수를 Login 컴포넌트에서 사용하기 위한 함수
  // Context API를 이용하여 최적화 시도중
  return (
    <div className="content">
      {isLogin ? <Main/> : <Login checkingInRoot={checkingInRoot}/>}
    </div>
  )
}

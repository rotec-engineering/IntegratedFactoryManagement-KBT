import React, { useState } from 'react'

import Login from './Login';
import Main from './Main';


export function Logincheck({ checkingInRoot }) {
  const [isLogined, setIsLogined] = useState(false);
  const [ name, setName ] = useState('');

  const checking = (bool, customer) => {
    setIsLogined(bool);
    setName(customer);
  }

  checkingInRoot(isLogined, name);

  return (
    <div>
      {isLogined ? <Main/> : <Login checking={checking}/>}
      <button onClick={()=> setIsLogined(!isLogined)}>Click me</button>
    </div>
  )
}

import React, { useState } from 'react'

import Login from './Login';
import Main from './Main';


export function Logincheck() {
  const [isLogined, setIsLogined] = useState(false);

  const checking = (bool) => {
    setIsLogined(bool);
  }

  return (
    <div>
      {isLogined ? <Main/> : <Login checking={checking}/>}
      <button onClick={()=> setIsLogined(!isLogined)}>Click me</button>
    </div>
  )
}

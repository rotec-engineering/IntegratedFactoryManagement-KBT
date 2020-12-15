import React, { useState } from 'react'

export default function Sbdone() {
  const [ deviceInfo, setdeviceInfo ] = useState({
    deviceId: 'UEAM100_1',
    deviceType: '가스',
    status1: '',
    status2: '',
    status3: '',
    status4: '',
    status5: '',
  });
  
  return (
    <div>
      <table border="1" className="oneTable" onClick={()=> alert("클릭됨!")}>
        <thead>
          <tr>
            <th>{deviceInfo.deviceId+"("+deviceInfo.deviceType+")"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <img src='./images/normal.png' alt="ROTEC" height="40px" width="40px" className="detailStatusImage"/>
            <img src="./images/normal.png" alt="ROTEC" height="40px" width="40px" className="detailStatusImage"/>
            <img src="./images/normal.png" alt="ROTEC" height="40px" width="40px" className="detailStatusImage"/>
            <img src="./images/normal.png" alt="ROTEC" height="40px" width="40px" className="detailStatusImage"/>
            <img src="./images/normal.png" alt="ROTEC" height="40px" width="40px" className="detailStatusImage"/>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

import React from 'react'

export default function Sbdone({ onClickOne, deviceId }) {  
  return (
    <div>
      <table border="1" className="oneTable" onClick={() => onClickOne(deviceId)}>
        <thead>
          <tr>
            <th>{deviceId+"(가스)"}</th>
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

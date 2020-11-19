import React, { Component } from 'react'

export default class SBDtemp extends Component {
  render() {
    return (
      <div>
        <table border="1" className="oneTable">
          <thead>
            <tr>
              <th>UEAM_01(가스)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <img src='./images/normal.png' alt="ROTEC" height="40px" width="40px" className="detailStatusImage"/>
              <img src="./images/warn.png" alt="ROTEC" height="40px" width="40px" className="detailStatusImage"/>
              <img src="./images/normal.png" alt="ROTEC" height="40px" width="40px" className="detailStatusImage"/>
              <img src="./images/normal.png" alt="ROTEC" height="40px" width="40px" className="detailStatusImage"/>
              <img src="./images/danger.png" alt="ROTEC" height="40px" width="40px" className="detailStatusImage"/>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

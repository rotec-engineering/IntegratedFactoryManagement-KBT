import React, { Component } from 'react'

export default class SBDtemp2 extends Component {
  render() {
    return (
      <div>
        <table border="1" className="oneTable">
          <thead>
            <tr>
              <th>UEAM_02(누액)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <img src='./images/normal.png' alt="ROTEC" height="40px" width="40px" className="detailStatusImage"/>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

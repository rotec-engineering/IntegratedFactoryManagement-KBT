import React, { Component } from 'react'

export default class SBDtemp3 extends Component {
  render() {
    return (
      <div>
        <table border="1" className="oneTable">
          <thead>
            <tr>
              <th>UEAM_03(pH)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <img src="./images/warn.png" alt="ROTEC" height="40px" width="40px" className="detailStatusImage"/>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

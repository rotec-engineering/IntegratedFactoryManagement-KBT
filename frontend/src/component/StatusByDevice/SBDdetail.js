import React, { Component } from 'react'
import '../../CSS/SBDdetail.css'

export default class Sbddetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{
        deviceId: 'UEAM_01',
        deviceType: '가스',
        result: [40.3],
        time: '15:12',
      },
      {
        deviceId: 'UEAM_01',
        deviceType: '가스',
        result: [45.6],
        time: '15:20',
      },],
    }
  }

  render() {
    const data = this.state.data;
    const list = data.map((value) => 
      <tr>
        <td>{value.deviceId}</td>
        <td>{value.deviceType}</td>
        <td>{value.result}</td>
        <td>{value.time}</td>
      </tr>
    );

    return (
      <div className="detailDiv">
        <img src="./images/graph.png" alt="ROTEC" width="480px" height="200px" className="detailImage"/>
        <hr/>
        <table border="1" className="detailTable">
          <thead>
            <tr>
              <th>장치명</th>
              <th>측정요소</th>
              <th>측정결과</th>
              <th>시간</th>
            </tr>
          </thead>
          <tbody>
              {list}
          </tbody>
        </table>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Sbdone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceId: '',
      deviceType: '',
      status1: '',
      status2: '',
      status3: '',
      status4: '',
      status5: '',
    };
  }
  render() {
    return (
      <div>
        <table border="1" className="oneTable">
          <thead>
            <tr>
              <th>{this.props.deviceId+"("+this.props.deviceType+")"}</th>
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
}

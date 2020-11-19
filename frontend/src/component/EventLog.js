import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap';
import '../CSS/EventLog.css'

export default class Eventlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        deviceType: '가스',
        deviceId: 'UEAM_01',
        location: '주차장',
        status: '위험',
        occurTime: '15:00',
        resolveTime: '-',
      },
      {
        deviceType: '누액',
        deviceId: 'UEAM_02',
        location: '연구실',
        status: '경고',
        occurTime: '16:15',
        resolveTime: '16:20',
      }],
    };
  }

  render() {
    const data = this.state.data;
    const list = data.map((value) => 
      <tr>
        <td>{value.deviceType}</td>
        <td>{value.deviceId}</td>
        <td>{value.location}</td>
        <td>{value.status}</td>
        <td>{value.occurTime}</td>
        <td>{value.resolveTime}</td>
      </tr>
    );

    return (
      <div className="componentDiv">
        <Container>
          <Row>
            <Col className="eventTitle"><h2>이벤트 발생 이력</h2></Col>
            <Col className="eventCheck align-self-end">
              사후 조치 완료 데이터 미표시&nbsp;
              <input name="check" type='checkbox'/>
              </Col>
          </Row>
        </Container>
        <hr/>
        <table border="1" className="eventTable">
          <thead>
            <tr>
              <th>측정요소</th>
              <th>장치명</th>
              <th>장소</th>
              <th>위험상태</th>
              <th>발생시간</th>
              <th>해결시간</th>
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

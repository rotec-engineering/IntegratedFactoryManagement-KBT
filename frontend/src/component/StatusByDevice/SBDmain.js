import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap';

import SBDdetail from './SBDdetail'
// import SBDone from './SBDone';
import SBDtemp from './SBDtemp';
import SBDtemp2 from './SBDtemp2';
import SBDtemp3 from './SBDtemp3';
import SBDtemp4 from './SBDtemp4';

export default class Sbdmain extends Component {
  render() {
    return (
      <div className="componentDiv"> 
        <h2>탐지기별 현황</h2>
        <hr/>
        <Container className="SBDDiv">
          <Row md="2">
            <Col><SBDtemp/></Col>
            <Col><SBDtemp2/></Col>
          </Row>
          <br/>
          <Row md="2">
            <Col><SBDtemp3/></Col>
            <Col><SBDtemp4/></Col>
            {/* <Col><SBDone deviceId="UEAM_04" deviceType="HF"/></Col> */}
          </Row>
          <hr/>
          <Row>
            <SBDdetail/>
          </Row>
        </Container>
      </div>
    )
  }
}

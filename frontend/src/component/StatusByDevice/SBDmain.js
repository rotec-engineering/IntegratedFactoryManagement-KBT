import React from 'react'
import { Container, Col, Row } from 'reactstrap';

import SBDdetail from './SBDdetail'
import SBDone from './SBDone';

export default function Sbdmain() {
  return (
    <div className="componentDiv"> 
      <h2>탐지기별 현황</h2>
      <hr/>
      <Container className="SBDDiv">
        <Row md="2">
          <Col><SBDone deviceId="UEAM_04" deviceType="HF"/></Col>
          <Col><SBDone deviceId="UEAM_04" deviceType="HF"/></Col>
        </Row>
        <br/>
        <Row md="2">
          <Col><SBDone deviceId="UEAM_04" deviceType="HF"/></Col>
          <Col><SBDone deviceId="UEAM_04" deviceType="HF"/></Col>
        </Row>
        <hr/>
        <Row>
          <SBDdetail/>
        </Row>
      </Container>
    </div>
  )
}

import React, { useState } from 'react'
import { Container, Col, Row } from 'reactstrap';

import SBDdetail from './SBDdetail'
import SBDone from './SBDone';

export default function Sbdmain() {
  // 탐지기 테이블이 클릭되었는지 확인하는 state
  const [ isClicked, setIsClicked ] = useState(false);

  const clickCloseBtn = () => {
    setIsClicked(!isClicked);
  }

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
        {!isClicked && <img src={`./images/open.png`} width="510px" height="16" alt="ROTEC" onClick={() => setIsClicked(!isClicked)}/>}
        <Row>
          {isClicked && <SBDdetail clickCloseBtn={clickCloseBtn}/>}
        </Row>
      </Container>
    </div>
  )
}

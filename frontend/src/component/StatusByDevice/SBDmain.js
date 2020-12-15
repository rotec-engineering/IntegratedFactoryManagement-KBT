import React, { useState } from 'react'
import { Container, Col, Row } from 'reactstrap';

import SBDdetail from './SBDdetail'
import SBDone from './SBDone';

export default function Sbdmain() {
  // 탐지기 테이블이 클릭되었는지 확인하는 state
  const [ show, setshow ] = useState(true);
  const [ onceClicked, setOnceClicked ] = useState(false);

  // 백엔드에서 들어올 정보 state
  const [ deviceIdArr, setDeviceIdArr ] = useState([
    'UEAM100_1', 'UEAM100_2', 'UEAM200_1', 'UEAM200_2'
  ]);

  // deviceId 정보를 one에서 detail로 넘기기 위한 state
  const [ clickedDeviceId, setClickedDeviceId ] = useState('');
  
  const clickCloseBtn = () => {
    setshow(!show);
  }

  // SBDone 클릭하면 상세정보가 뜨고 해당 이름이 detail로 전달하는 함수
  const onClickOne = (deviceId) => {
    setOnceClicked(true);
    setshow(true);
    setClickedDeviceId(deviceId);
  }

  return (
    <div className="componentDiv"> 
      <h2>탐지기별 현황</h2>
      <hr/>
      <Container className="SBDDiv">
        <Row md="2">
          <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[0]}/></Col>
          <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[1]}/></Col>
        </Row>
        <br/>
        <Row md="2">
          <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[2]}/></Col>
          <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[3]}/></Col>
        </Row>
        <hr/>
        {onceClicked ? 
          !show && <img src={`./images/open.png`} width="510px" height="16" alt="ROTEC" onClick={() => setshow(!show)}/> :
          "상세 정보를 확인하려면 탐지기를 선택해주세요"          
        }
        <Row>
          {onceClicked && show && <SBDdetail clickCloseBtn={clickCloseBtn} clickedDeviceId={clickedDeviceId}/>}
        </Row>
      </Container>
    </div>
  )
}

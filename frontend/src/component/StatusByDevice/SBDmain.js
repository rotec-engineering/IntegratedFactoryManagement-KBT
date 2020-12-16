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
    'UEAM100_1', 'UEAM100_2', 'UEAM200_1', 'UEAM200_2', 'UEAM300_1', 'UEAM300_2'
  ]);

  // deviceId 정보를 one에서 detail로 넘기기 위한 state
  const [ clickedDeviceId, setClickedDeviceId ] = useState('');
  
  const [ SBDlistStyle, setSBDlistStyle ] = useState({
    overflowY: "scroll",
    height: "435px",
    position: "relative"
  })

  // detail의 close 버튼을 클릭했을 시 발동하는 함수
  const clickCloseBtn = () => {
    setshow(!show);
    setSBDlistStyle({...SBDlistStyle, height: '435px'});
  }

  // detail의 open 버튼을 클릭했을 시 발동하는 함수
  const clickOpenBtn = () => {
    setshow(!show);
    setSBDlistStyle({...SBDlistStyle, height: '140px'});
  }

  // SBDone 클릭하면 상세정보가 뜨고 해당 이름이 detail로 전달하는 함수
  const onClickOne = (deviceId) => {
    setOnceClicked(true);
    setshow(true);
    setClickedDeviceId(deviceId);
    setSBDlistStyle({...SBDlistStyle, height: '140px'});
  }

  return (
    <div className="componentDiv"> 
      <h2>탐지기별 현황</h2>
      <hr/>
      <Container className="SBDDiv">
        <div className="SBDlist" style={SBDlistStyle}>
          <Row md="2">
            <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[0]}/></Col>
            <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[1]}/></Col>
          </Row>
          <br/>
          <Row md="2">
            <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[2]}/></Col>
            <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[3]}/></Col>
          </Row>
          <br/>
          <Row md="2">
            <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[4]}/></Col>
            <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[5]}/></Col>
          </Row>
          <br/>
          <Row md="2">
            <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[0]}/></Col>
            <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[1]}/></Col>
          </Row>
          <br/>
          <Row md="2">
            <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[2]}/></Col>
            <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[3]}/></Col>
          </Row>
          <br/>
          <Row md="2">
            <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[4]}/></Col>
            <Col><SBDone onClickOne={onClickOne} deviceId={deviceIdArr[5]}/></Col>
          </Row>
          <br/>
        </div>
        <hr/>
        {onceClicked ? 
          !show && <img src={`./images/open.png`} width="510px" height="16px" alt="ROTEC" onClick={clickOpenBtn}/> :
          "상세 정보를 확인하려면 탐지기를 선택해주세요"          
        }
        <Row>
          {onceClicked && show && <SBDdetail clickCloseBtn={clickCloseBtn} clickedDeviceId={clickedDeviceId}/>}
        </Row>
      </Container>
    </div>
  )
}

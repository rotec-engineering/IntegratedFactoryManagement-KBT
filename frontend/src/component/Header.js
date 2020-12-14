import React from 'react';
import { Container, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Header.css'

function Header({ isLogin, name, checkingInRoot }) {
  const logoutButton = (<Button className="logoutBtn" onClick={() => {checkingInRoot(false, '')}}>로그아웃</Button>);
  const logoImg = (<img src={`./images/${name}.png`} alt="ROTEC"/>)

  return (
    <Container className="header" fluid>
      <Col className="customerLogo">
        {isLogin && logoImg}
      </Col>
      <Col className="title">통합 공정 모니터링 시스템</Col>
      <Col className="logoutBtnDiv">
        {isLogin && logoutButton}
      </Col>
    </Container>
  )
}

export default Header;
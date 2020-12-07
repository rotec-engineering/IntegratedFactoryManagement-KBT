import React from 'react';
import { Container, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Header.css'

function Header({ isLogin, name }) {
  let loginState = isLogin;
  const logoutButton = (<Button className="logoutBtn" onClick={() => loginState = false}>로그아웃</Button>);
  const logoImg = (<img src={`./images/${name}.png`} alt="ROTEC"/>)

  return (
    <Container className="header" fluid>
      <Col className="customerLogo">
        {loginState && logoImg}
      </Col>
      <Col className="title">통합 공정 모니터링 시스템</Col>
      <Col className="logoutBtnDiv">
        {loginState && logoutButton}
      </Col>
    </Container>
  )
}

export default Header;
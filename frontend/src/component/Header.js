import React from 'react';
import { Container, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '언택트 통합 공정 모니터링 시스템',
    };
  }
  
  render() {
    const logoutButton = (<Button className="logoutBtn">로그아웃</Button>);
    return (
      <Container className="header" fluid>
        <Col className="customerLogo"><img src="./images/skmaterials.png" alt="ROTEC"/></Col>
        <Col className="title">{this.state.name}</Col>
        <Col className="logoutBtnDiv">
          {logoutButton}
        </Col>
      </Container>
    )
  }
}

export default Header;
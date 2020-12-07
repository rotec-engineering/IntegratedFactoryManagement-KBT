import React from 'react';
import { Container, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Footer.css';

function Footer() {
  return (
    <Container className="footer" fluid>
      <Col className="image"><img src="./images/rotec_logo.png" alt="ROTEC"/></Col>
      <Col className="info">
        <p>Copyright ROTEC R&#38;D ⓒ 2020. All rights reserved.</p>
        <p><img src="./images/company.png" alt="ROTEC" width="20px" height="20px"/>울산광역시 남구 옥동 테크노산업로 55번길 133-9</p>
        <p><img src="./images/call.png" alt="ROTEC" width="20px" height="20px"/>052-257-7509</p>
      </Col>
    </Container>
  )
}

export default Footer;
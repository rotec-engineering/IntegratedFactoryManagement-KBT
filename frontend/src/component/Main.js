import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Main.css';
import { Container, Col, Row } from 'reactstrap';

import Enterance from './Enterance';
import OverallStatus from './OverallStatus';
import LocationDetail from './LocationDetail';
import SBDmain from './StatusByDevice/SBDmain';
import Eventlog from './EventLog';

class Main extends React.Component {
  render() {
    
    return (
      <Container className="mainContainer">
        <br/>
        <Row md="4">
          <Col><Enterance/></Col>
          <Col><OverallStatus/><br/><LocationDetail/></Col>
          <Col md={{size:6}}><SBDmain/></Col>
        </Row>
        <br/>
        <Row>
          <Col><Eventlog/></Col>
        </Row>
        <br/>
      </Container>
    )
  }
}

export default Main;
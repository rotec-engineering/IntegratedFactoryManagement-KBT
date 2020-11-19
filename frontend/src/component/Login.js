import React from 'react';
import { Container, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 데이터베이스에서 들어온 데이터 user
      user: [{
        id: 'rotec',
        password: '1234',
        name: 'ROTEC',
      },
      {
        id: 'skmaterials',
        password: '2345',
        name: 'SK머티리얼즈',
      },],
      // input에서 입력받은 사용자 입력 정보
      id: '',
      password: '',
    };
  }

  // 로그인 버튼 클릭했을 때 발동할 함수
  onClickLoginButton = () => {
    // 로그인 성공 여부를 위한 flag
    let flag = false;
    const user = this.state.user;
    const inputId = this.state.id;
    const inputPassword = this.state.password;

    // 배열로 넘어온 데이터에 대하여 하나씩 비교
    user.forEach(function(element) {
      if(inputId === element.id && inputPassword === element.password) {
        flag = true;
      }
    });

    // flag 값에 따른 동작
    if(flag) {
      alert("로그인 성공!");
    } else {
      alert("로그인 실패!");
    }
  }

  // input 값이 변경되면 발동하는 함수
  handleChange = (e) => {
    this.setState({
      // state에 있는 id와 password를 변경
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Container className="login">
          <Col>
            아이디 : &nbsp;
              <input name="id" type="text" onChange={this.handleChange}></input>
          </Col>
          <br/>
          <Col>
            비밀번호 : &nbsp;
              <input name="password" type="password" onChange={this.handleChange}></input>
          </Col>
          <br/>
          <Col><Button className="btn btn-lg login" color="secondary" onClick={this.onClickLoginButton}>로그인</Button></Col>
      </Container>
    )
  }
}

export default Login;
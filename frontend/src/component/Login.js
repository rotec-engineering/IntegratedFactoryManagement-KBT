import React, { useState } from 'react';
import { Container, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Login.css'

function Login({ checking }) {
  const [ user, setUser ] = useState([
    {
    id: 'rotec',
    password: '1234',
    name: 'ROTEC',
    },
    {
    id: 'skmaterials',
    password: '2345',
    name: 'SK머티리얼즈',
    }
  ]);

  const [ input, setInput ] = useState({
    id: '',
    password: ''
  });

  // 로그인 버튼 클릭했을 때 발동할 함수
  const onClickLoginButton = () => {
    // 로그인 성공 여부를 위한 flag
    let flag = false;
    let customer;

    // 배열로 넘어온 데이터에 대하여 하나씩 비교
    user.forEach(function(element) {
      if(input.id === element.id && input.password === element.password) {
        flag = true;
        customer = element.name;
      }
    });

    // flag 값에 따른 동작
    if(flag) {
      alert("로그인 성공!");
      checking(true, customer);
    } else {
      alert("로그인 실패!");
      checking(false, '');
    }
  };

  // input 값이 변경되면 발동하는 함수
  const handleChange = (e) => {
    const {value, name} = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <Container className="login">
        <Col>
          아이디 : &nbsp;
            <input name="id" type="text" onChange={handleChange}></input>
        </Col>
        <br/>
        <Col>
          비밀번호 : &nbsp;
            <input name="password" type="password" onChange={handleChange}></input>
        </Col>
        <br/>
        <Col><Button className="btn btn-lg login" color="secondary" onClick={onClickLoginButton}>로그인</Button></Col>
    </Container>
  )
}

export default Login;
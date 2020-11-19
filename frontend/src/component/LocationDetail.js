import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Enterance.css';

class LocationDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        location: '주차장',
        status: '위험',
        time: '14:25',
        manager: '김병탁',
      },
      {
        location: '본관',
        status: '경고',
        time: '14:29',
        manager: '유동근',
      }],
    };
  }

  render() {
    const data = this.state.data;
    const list = data.map((value) => 
      <tr>
        <td>{value.location}</td>
        <td>{value.status}</td>
        <td>{value.time}</td>
        <td>{value.manager}</td>
      </tr>
    );

    return(
      <div className="locationDiv">
        <h2>장소별 상세 정보</h2>
        <hr/>
        <table border="1" className="locationTable">
          <thead>
            <tr>
              <th>장소</th>
              <th>상태</th>
              <th>시간</th>
              <th>담당자</th>
            </tr>
          </thead>
          <tbody>
              {list}
          </tbody>
        </table>
      </div>
    )
  }
}

export default LocationDetail;
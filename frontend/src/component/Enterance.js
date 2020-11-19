import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Enterance.css';

class Enterance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        location: '1호',
        enter_time: '10:00',
        exit_time: '12:00',
        total: '3',
      },
      {
        location: '2호',
        enter_time: '11:00',
        exit_time: '-',
        total: '5',
      }],
    };
  }

  render() {
    const data = this.state.data;
    const list = data.map((value) => 
      <tr>
        <td>{value.location}</td>
        <td>{value.enter_time}</td>
        <td>{value.exit_time}</td>
        <td>{value.total}</td>
      </tr>
    );

    return (
      <div className="tableDiv">
        <h2>출입자 현황</
        h2>
        <hr/>
        <table border="1" className="enterTable">
          <thead>
            <tr>
              <th>장소</th>
              <th>입실</th>
              <th>퇴실</th>
              <th>인원</th>
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

export default Enterance;
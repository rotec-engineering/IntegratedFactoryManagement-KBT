import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function OverallStatus()  {
  return(
    <div className="overallDiv">
      <h2>종합 현황</h2>
      <hr/>
      <img src="./images/danger_gas.png" alt="ROTEC" width="90px" height="90px" className="overallImage"/>
      <img src="./images/normal_leakage.png" alt="ROTEC" width="90px" height="90px" className="overallImage"/>
      <img src="./images/warn_pH.png" alt="ROTEC" width="90px" height="90px" className="overallImage"/>
      <img src="./images/none_HF.png" alt="ROTEC" width="90px" height="90px" className="overallImage"/>
    </div>
  )
  }

export default OverallStatus;
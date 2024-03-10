import React, { useState } from 'react';

function getDate() {
//   const today = new Date();
//   const month = today.getMonth() + 1;
//   const year = today.getFullYear();
//   const date = today.getDate();
//   const time = today.getTime();
//   return `${month}/${date}/${year}  /${time/1000}`;


const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
return `${currDate}  ${currTime}`
}

function TimeStamp() {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div>
      {/* <h1>Today's Date</h1> */}
      <p style={{color:"white",marginTop:"10px"}}>{currentDate}</p>
    </div>
  );
}

export default TimeStamp;
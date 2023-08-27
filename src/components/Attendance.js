import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Attendance = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions to submit attendance data (e.g., send to server)
    console.log('Date:', date);
    console.log('Time:', time);
   
    // Reset form fields
    setDate('');
    setTime('');
    
    navigate('/status');
  };

  return (
    <attendance>
         {/* <div>
      <h2>Attendance Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Attendance
        </button>
      </form>
    </div> */}
    {/* <!-- Section: Design Block --> */}
<section class="text-center">
  {/* <!-- Background image --> */}
  <div class="p-5 bg-image" style={{backgroundImage: "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
        height: "300px"}}></div>
  {/* <!-- Background image --> */}

  <div class="card mx-4 mx-md-5 shadow-5-strong" style={{
    marginTop: "-100px",
    background: "hsla(0, 0%, 100%, 0.8)",
    backdropFilter: "blur(30px)"
  }}>

<div>
      <h1 style={{margin:"30px"}}>Attendance Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{width:"800px",marginLeft:"250px",marginTop:"50px"}}>
          <label style={{float:'left'}}><h5>Date:</h5></label>
          <input
            type="date"
            className="form-control form-control-sm" // Apply form-control-sm class for smaller input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group" style={{width:"800px",marginLeft:"250px",marginTop:"50px"}}>
          <label style={{float:'left'}}><h5>Time:</h5></label>
          <input
            type="time"
            className="form-control form-control-sm " // Apply form-control-sm class for smaller input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{margin:"50px"}}>
          Submit Attendance
        </button>
      </form>
    </div>
    
  </div>
</section>
{/* <!-- Section: Design Block --> */}
    </attendance>
  )
}

export default Attendance
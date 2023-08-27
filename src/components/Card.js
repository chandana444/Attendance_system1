import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; //Import Bootstrap Javascript
import { useNavigate } from 'react-router-dom';

const Card = ({ courseName, attendancePercentage }) => {
    const navigate = useNavigate();
    function getProgressBarColor() {
      if (attendancePercentage > 75) {
        return 'bg-success'; // Green color for attendance > 75%
      } else if (attendancePercentage < 75) {
        return 'bg-danger'; // Red color for attendance < 75%
      } else {
        return 'bg-warning'; // Yellow color for attendance = 75%
      }
    }
  
    const progressBarColor = getProgressBarColor();
  
    function handleClick(){
      navigate("/attendance")
    }

   
  return (
    <card>
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{courseName}</h5>
        <div>
          <div className={`progress ${progressBarColor} progress-bar progress-bar-striped progress-bar-animated`} role="progressbar" style={{ width: `${attendancePercentage}%` }} aria-valuenow={attendancePercentage} aria-valuemin="0" aria-valuemax="100">{attendancePercentage}%</div>
        </div>
        <form onSubmit={handleClick}>
          <button type="submit" className="btn btn-primary mt-3">Mark Attendance</button>
        </form>
      </div>
    </div>
    </card>
  )
}

  

export default Card
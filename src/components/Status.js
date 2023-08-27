import React from 'react'
import Lottie from "lottie-react"
import animationData from "./animation_lltcb699.json"
import { useNavigate } from 'react-router-dom';
const Status = () => {
    const navigate = useNavigate();
    function handleClick(){
      navigate("/home")
    }
  return (
    <status style={{ backgroundColor: '#50c154', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div class="card" style={{width: "500px",height:"600px",marginTop:"30px"}}>
    <h5 class="card-title" style={{textAlign:"center",paddingTop:"50px"}}><strong>Attendance has been marked Successfully!!</strong></h5>
     <Lottie animationData={animationData} class="card-img-top" style={{height:"400px"}}/>
     <form onSubmit={handleClick} >
          <button style={{marginLeft:"200px"}} type="submit" className="btn btn-primary mt-3">Go to Home</button>
        </form>
     </div>
     </status>
  )
}

export default Status
import React from 'react'
import Card from './Card'
import {FaBook} from "react-icons/fa"
const Courselist = () => {
  return (
    <courselist className="courselist" >
    <div className='ctitle'><h1>Courses-Artificial Intelligence<FaBook style={{marginLeft:"10px",color:"#0d6efd"}}/></h1></div>
    <Card courseName="Web Programming" attendancePercentage="86"/>
    <Card courseName="Data Mining" attendancePercentage="75"/>
    <Card courseName="Business Intelligence" attendancePercentage="50"/>
    <Card courseName="Disaster Mangement and Mitigation" attendancePercentage="38"/>
    <Card courseName="Marketing" attendancePercentage="77"/>
    
    </courselist>
  )
}

export default Courselist
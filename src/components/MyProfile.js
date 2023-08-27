import React from 'react'
import Navb from './Navb'
const MyProfile = () => {
  return (
    <myprofile>
    <Navb />
    <h1><strong>My Profile</strong></h1>
    <table className="table table-striped custom-table">
        <tbody>
          <tr>
            <td><strong>Registration Number:</strong></td>
            <td>RA2011047010080</td>
          </tr>
          <tr>
            <td><strong>Name:</strong></td>
            <td>vasa chandana</td>
          </tr>
          <tr>
            <td><strong>Program:</strong></td>
            <td>B.Tech</td>
          </tr>
          <tr>
            <td><strong>Department:</strong></td>
            <td>Artificial Intelligence</td>
          </tr>
          <tr>
            <td><strong>Specialization:</strong></td>
            <td>AI Engg</td>
          </tr>
          <tr>
            <td><strong>Semester:</strong></td>
            <td>7</td>
          </tr>
          <tr>
            <td><strong>Batch:</strong></td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </myprofile>
  )
}

export default MyProfile
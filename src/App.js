import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import MyProfile from './components/MyProfile';
import "./index.css"
import Attendance from './components/Attendance';
import Status from "./components/Status"
function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Login />} />
    <Route path="myprofile" element={<MyProfile/>} />
    <Route path="attendance" element={<Attendance/>} />
    <Route path="status" element={<Status/>} />
    </Routes>
  </BrowserRouter>    
  );
}

export default App;

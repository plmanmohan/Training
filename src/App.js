import './App.css';
import Home from './websitePages/Home'; 
import About from './websitePages/About'; 
import Contact from './websitePages/Contact'; 
import Project from './websitePages/Project'; 
import DashBoard from './websitePages/Dashboard'; 
import NavBar from './websitePages/NavBar'; 
import Login from './websitePages/Login'; 
import WithAuth from './websitePages/WithAuth'; 
import { Container } from '@mui/material';
import {Routes, Route} from 'react-router-dom';

const ProtectedDashBoard = WithAuth(DashBoard);
function App() {
  
  return (
    <div className="parent">
      <Container>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/conactme' element={<Contact />}/>
          <Route path='/project' element={<Project />}/>
          <Route path='/dashboard' element={<ProtectedDashBoard />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;

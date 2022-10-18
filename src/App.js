import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import EditPOC from './components/EditPOC';
import CreatePOC from './components/CreatePOC';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Manage from './components/Manage';
import Signup from './components/SignUp';
import SelectTools1 from './components/SelectTools1';
import SelectTools2 from './components/SelectTools2';
import SelectTools3 from './components/SelectTools3';
import ManageUsers from './components/ManageUsers';
import Fetchdata from './components/fetchdata';
import ManagePOC from './components/ManagePOC';
import ConfigENV from './components/ConfigENV';
import EditConfigENV from './components/EditConfigENV';
import ViewExistingPOC from './components/ViewExistingPOC';
import POSTAPI from './components/POSTAPI';
import Main from './components/Main';

function App() {
  return (
  
  <Routes>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="/Homepage" element={<Homepage />}></Route>
      <Route path="/Manage" element={<Manage />}></Route>
      <Route path="/Createpoc" element={<CreatePOC />}></Route>
      <Route path="/Editpoc" element={<EditPOC />}></Route>
      <Route path="/selecttools1" element={<SelectTools1 />}></Route>
      <Route path="/selecttools2" element={<SelectTools2 />}></Route>
      <Route path="/selecttools3" element={<SelectTools3 />}></Route>
      <Route path="/Manageusers" element={<ManageUsers />}></Route>
      <Route path="/Managepoc" element={<ManagePOC />}></Route>
      <Route path="/Configenv" element={<ConfigENV />}></Route>
      <Route path="/EditConfigenv" element={<EditConfigENV />}></Route>
      <Route path="/Viewexistingpoc" element={<ViewExistingPOC/>}></Route>
      <Route path="/123" element={<Fetchdata />}></Route>
      <Route path="/456" element={<POSTAPI />}></Route>
      <Route path="/" element={<Main />}></Route>

      

    </Routes>
  
  );
}

export default App;

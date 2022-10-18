import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Icon.css';

const Icon = () => {
   const naviga =useNavigate();
   const logout = useNavigate();
    const [show, setShow] = useState(false);
     
  
    return (
      <div className='jack'>
      <i className='fas fa-user-circle' onClick={()=>setShow(!show)} ></i>
     {show?
       <div className='listofb'>
        <button className='but1' onClick={() => naviga("/Manage")}>Manage</button>
        <Link to={'/Login'}><button className='but2' onClick={() => logout("/Login")}>Logout</button></Link>
       </div>
      :null}
      </div>
    );
    
  
  };
  
  export default Icon;
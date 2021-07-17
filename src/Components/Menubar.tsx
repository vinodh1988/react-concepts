
import React from 'react';
import {Link} from 'react-router-dom';


const MenuBar = () =>{
   return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  
    <a className="navbar-brand" href="#">My Project</a>
    
 
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/api">APIs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contacts">Contacts</Link>
      </li>
    </ul>
  </nav>
   )


}

export default MenuBar;
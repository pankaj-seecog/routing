import React from 'react';
import {Link} from 'react-router-dom';
const Menu = ()=>{
return (
  <div>
<Link to="/home">Home</Link> | 
<Link to="/about">About</Link> | 
<Link to="/contact">Contact</Link> | 
<Link to="/users">Useers</Link> | 

  </div>
)
}

export default Menu;
import React from 'react';
import {Link} from 'react-router-dom'
class Homex extends React.Component{

logout = ()=>{
  localStorage.setItem("loginstt",'0')
  this.props.history.push('/')
}

render(){
  return (
    <div>
<h1>Insise Home</h1>
<hr/>
<Link to="/about">About</Link> | 
<Link to="/contact">Contact Us</Link> |
<button onClick={this.logout}>Logout</button>
    </div>
  )
}

}

export default Homex;
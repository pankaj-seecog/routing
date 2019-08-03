import React from 'react';
import {Link,BrowserRouter,Route} from 'react-router-dom'
import About from './About';
import Contact from './Contact'
class Homex extends React.Component{

logout = ()=>{
  localStorage.setItem("loginstt",'0')
  this.props.history.push('/')
}

render(){
  return (
    <BrowserRouter>
<h1>Insise Home</h1>
<hr/>
<Link to="/about">About</Link> | 
<Link to="/contact">Contact Us</Link> |
<button onClick={this.logout}>Logout</button>
<hr/>

//Child routing start
<Route path="/about" component={About}/>
<Route path="/contact" component={Contact}/>
//Child Routing end

    </BrowserRouter>
  )
}

}

export default Homex;
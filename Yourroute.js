import React from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import Loginx from './Loginx';
import About from './About'
import Homex from './Homex'
import Contact from './Contact'
class Yourroute extends React.Component{

render(){
  return (
<BrowserRouter>

{
  (localStorage.getItem('loginstt')=='1')?<Redirect to="/home"/>:<Redirect to="/"/>
}

<Route exact path="/" component={Loginx}/>
<Route path="/home" component={Homex}/>
<Route path="/about" component={About}/>
<Route path="/contact" component={Contact}/>

</BrowserRouter>
  )
}

componentDidMount(){
  console.log("*****",localStorage.getItem('loginstt'));
}

}

export default Yourroute;
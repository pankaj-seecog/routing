import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Userinfo from './Userinfo';
const Myroute = ()=>{
  return (
    <BrowserRouter>
    <Menu/>
    <Switch>
<Route path="/" exact component={Home}/>
<Route path="/about" component={About}/>
<Route path="/contact" component={Contact}/>
<Route path="/users" component={Users}/>
<Route path="/userinfo/:id" component={Userinfo}/>
<Route component={Error}/>
</Switch>
    </BrowserRouter>
  )
}

const Error = ()=>{
  return (
    <div>
<h1>Page Not found</h1>
    </div>
  )
}

const Contact = ()=>{
return (
  <div>
<h1>Inside The Contact page</h1>
  </div>
)
}
const Home = ()=>{
return (
  <div>
<h1>Inside The Home page</h1>
  </div>
)
}
const About = ()=>{
return (
  <div>
<h1>Inside The About page</h1>
  </div>
)
}
export default Myroute;
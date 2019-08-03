import React from 'react'

class Loginx extends React.Component{

constructor(){
  super();
  this.state = {
    email : "",
    password : ""
  }
}

componentDidMount(){
  
}

  checkLogin = ()=>{
   if(this.state.email=="mohan@gmail.com" && this.state.password==="123"){
this.props.history.push('/home');
//set in local storage strat
localStorage.setItem('loginstt',"1");
//set in local storage end
   }
   else{

   }
  }

render(){
  return (
    <div>
<p>
Email : <input onChange={(evt)=>this.setState({
email : evt.target.value
})}/>
</p>
<p>
Password : <input type="password" onChange={(evt)=>this.setState({
password : evt.target.value
})}/>
</p>
<p>
<button onClick={this.checkLogin}>Login Please</button>
</p>
    </div>
  )
}

}

export default Loginx;
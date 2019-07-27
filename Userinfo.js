import React from 'react';
import axios from 'axios';
class Userinfo extends React.Component{

constructor(props){
super(props);
console.log("THe prop details ",this.props.match.params.id);
this.state = {
  name : "",
  username : "",
  email : ""
}
}

componentWillMount(){
  axios.get("https://jsonplaceholder.typicode.com/users/"+this.props.match.params.id)
  .then((res)=>{
console.log('The final res is.. ()()()99 ',res.data.name);
this.setState({
  name : res.data.name,
  username : res.data.username,
  email : res.data.email
})
  })
  .catch((err)=>{
    console.log("The error is ==> ",err);
  })
}


render(){
return (
  <div>
The user details<br/>
{this.state.name}<br/>
Email : {this.state.email}
  </div>
)
}
}

export default Userinfo;
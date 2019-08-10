import React from 'react';

class Life extends React.Component{

constructor(){
console.log('Inside constructor')
this.state = {
  name : "Satyam"
}
}


componentWillMount(){
  console.log('Component will mount')
}

componentDidMount(){
  console.log('Component did mount')
}



render(){
  console.log('Please render')
  return (
    <div>
The name is {this.state.name} <br/>
<input value={this.state.name} onChange={(evt)=>this.setState({
name : evt.target.value
})}/>
    </div>
  )
}

shouldComponentUpdate(){
  console.log('shouldComponentUpdate')
  return false;
}

componentDidUpdate(){
console.log('component DID update ')
}


componentWillUnmount(){
console.log('Please clean the component resources')
}

}

export default Life;
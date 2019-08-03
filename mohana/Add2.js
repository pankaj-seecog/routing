import React from 'react';

class Add1 extends React.Component{
constructor(){
  super();
  this.state = {
    a : 10,
    b : 60,
    c : 0
  }
}
getSum = ()=>{
 let ans = parseInt(this.state.a)+parseInt(this.state.b);
this.setState({
  c : ans
})
}

render(){
  return (
    <div>
<p>
First Number : <input value={this.state.a} onChange={(evt)=>this.setState({
  a : evt.target.value
})}/>
</p>
<p>
Second Number : <input  value={this.state.b} onChange={(evt)=>this.setState({
  b : evt.target.value
})}/>
</p>
<p>
The sum is {this.state.c}
</p>
<p>
<button onClick={this.getSum}>Sum It</button>
</p>
    </div>
  )
}


}

export default Add1;
import React from 'react';

class AvgForm extends React.Component{

constructor(){
  super();
  this.phy = React.createRef();
  this.state = {
    p : '',
    c : '',
    m : '',
    h : '',
    e : '',
    avg : ''
  }
}

clearFields = ()=>{
  this.setState({
    pErr : ''
  })
  this.setState({
    cErr : ''
  })
  this.setState({
    mErr : ''
  })
  this.setState({
    hErr : ''
  })
  this.setState({
    eErr : ''
  })
}

checkError =()=>{
  this.clearFields();
if(this.state.p==""){
  
  this.setState({
pErr : "Please enter physics marks !"
  })
  return false;
}
if(this.state.c==""){
  this.setState({
cErr : "Please enter chemistry marks !"
  })
  return false;
}
if(this.state.m==""){
  this.setState({
mErr : "Please enter math marks !"
  })
  return false;
}
if(this.state.h==""){
  this.setState({
hErr : "Please enter hindi marks !"
  })
  return false;
}
if(this.state.e==""){
  this.setState({
eErr : "Please enter english marks !"
  })
  return false;
}
return true;
}

getAvg = ()=>{
let stti = this.checkError()
if(stti){

  let avg = (parseInt(this.state.p)+parseInt(this.state.c)+parseInt(this.state.m)+parseInt(this.state.h)+parseInt(this.state.e))/5.0;
  this.setState({
    avg : avg
  })
}

}
componentDidMount(){
  // this.phy.current.focus();
}
render(){
return (
    <div style={{"margin-left" : "10px"}}>
<p>
Physics : <input ref={this.phy} onChange={(evt)=>this.setState({
  p : evt.target.value
})} />
<br/>
<span style={{"color" : "red"}}>{this.state.pErr}</span>
</p>
<p>
Chemistry : <input  onChange={(evt)=>this.setState({
  c : evt.target.value
})} />
<br/>
<span style={{"color" : "red"}}>{this.state.cErr}</span>
</p>
<p>
Math : <input onChange={(evt)=>this.setState({
  m : evt.target.value
})} />
<br/>
<span style={{"color" : "red"}}>{this.state.mErr}</span>
</p>
<p>
Hindi : <input onChange={(evt)=>this.setState({
  h : evt.target.value
})} />
<br/>
<span style={{"color" : "red"}}>{this.state.hErr}</span>
</p>
<p>
English : <input  onChange={(evt)=>this.setState({
  e : evt.target.value
})} />
<br/>
<span style={{"color" : "red"}}>{this.state.eErr}</span>
</p>
<p>
The average is {this.state.avg}
</p>
<p>
<button onClick={this.getAvg}>Average</button>
</p>
    </div>
  )
}


}

export default AvgForm;
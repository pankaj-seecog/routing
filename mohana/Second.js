import React from 'react';
import Secchild from './Secchild';
class Second extends React.Component{

show = ()=>{
alert("Hello world");
}

render(){
  return (
    <div>
    
<Secchild sh={this.show}/>
    </div>
  )
}

}

export default Second;
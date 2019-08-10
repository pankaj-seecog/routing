import React from 'react';
import MyContext from './MyContext';
class Child45 extends React.Component{

render(){
  return (
    <MyContext.Consumer>
{
  context=>(
    <div>
The perfect is {context.color}
    </div>
  )
}

    </MyContext.Consumer>
  )
}

}

export default Child45;
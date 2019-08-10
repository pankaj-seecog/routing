import React from 'react';
import MyContext from './MyContext';
import Myprovider from './MyProvider';
import Child45 from './Child45'
class Exp1 extends React.Component{

render(){
  return (
    <MyContext.Provider  value={{color : "red"}}>
    <Child45/>
    <h2>Two </h2>
    </MyContext.Provider>
  )
}

}

export default Exp1;
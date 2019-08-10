import MyContext from './MyContext'
import React from 'react';
class Myprovider extends React.Component{

render(){
  return (
    <MyContext.Provider value={{color : "green"}}>

    </MyContext.Provider>
  )
}

}

export default Myprovider;
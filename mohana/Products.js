import React from 'react';
import Product from './Product';
class Products extends React.Component{
constructor(){
  super();
  this.state = {
    products : [
      {
        name : 'Apple',
        cost : 120,
        pic : ''
      },
      {
        name : 'Banana',
        cost : 98,
        pic : ''
      },
      {
        name : 'Pinaapple',
        cost : 200,
        pic : ''
      }
    ]
  }
}
render(){
  return (
    <div>
{
  this.state.products.map((product)=>{
    return (
      <Product nm={product.name} ct={product.cost} pic={product.pic}/>
    )
  })
}
    </div>
  )
}


}

export default Products;
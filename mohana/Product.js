import React from 'react';
import './Product.css';

const Product = (props)=>{
  return (
    <div className="myproduct">
<h4>{props.nm}</h4>
<p>
Cost : {props.ct}
</p>


    </div>
  )
}

export default Product;
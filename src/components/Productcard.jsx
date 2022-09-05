import React from 'react'
import { useCart } from 'react-use-cart'


export const Productcard = (props) => {
    let {image ,price,title} = props.data;
    const {addItem} = useCart();
    
    const addToCart =()=>{
        addItem(props.data)
    }
  return (
        <div className="card" style={{width: '18rem' ,height:'400px',}}>
  <img src={image} className="card-img-top" alt="img" style={{width:'150px' }}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h5 className="card-title">$ {price}</h5>
    <button onClick={()=>addToCart()}>add to cart</button>
  </div>
</div>
  )
}

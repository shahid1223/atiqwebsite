import React from 'react'
import { useCart } from 'react-use-cart'


export const Shop = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart, 
  } = useCart()
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <h1>{isEmpty ? 'your cart is Empty': 'is Cart'}</h1>
          <div className="row">
            <div className="col-md-8 mx-auto">
            <table className="table">
  <tbody>
    {items.map((item,index)=>{
      return(
        <tr key={index}>
        <td><img src={item.image} style={{width:'4rem'}} alt={item.title} /></td>
       <td><h6>{item.title}</h6></td>
       <td>$ {item.price}</td>
       <td>Quantity ({item.quantity})</td>
       <td>
        <button onClick={()=> updateItemQuantity(item.id,item.quantity -1)}>-</button>
        <button onClick={()=> updateItemQuantity(item.id,item.quantity +1)}>+</button>
        <button onClick={()=> removeItem(item.id)}>remove</button>
       </td>
      </tr>
      )
    })}
   
  </tbody>
</table>
{!isEmpty && <> <h4>total $ {cartTotal}</h4>  <button onClick={()=>emptyCart()}>Remove all</button> </>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

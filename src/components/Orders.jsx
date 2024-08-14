import React from 'react'
import { Link } from 'react-router-dom';

const Orders = () => {
    const orders =[];
  return (
    <div>
    <h2 className="cart_title">Your Orders</h2>

    {orders.length === 0 ? (
      <p className="cart_title">
        Create Your first order
        <Link to={'/menu'}></Link>
      </p>
    ) : (
      <div className="cart">
        <div className="cart_list">
          {cart.map((product, index) => (
            <div className="cart_item" key={index}>
              <img src={product.image} />
              <div className="item_des">
                <h3>{product.name}</h3>
                <div>
                  <button onClick={()=>(dispatch(incrementQuantity(product.id)))}>+</button>
                  <p>{product.quantity}</p>
                  <button disabled={product.quantity<2? true : false} onClick={()=>(dispatch(decrementQuantity(product.id)))}>-</button>
                </div>
                <p>Price: ${product.price.toFixed(2)}</p>
                <button onClick={()=>dispatch(removeItem(product))}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="price_Details">
          <h1>Price Details:</h1>
          <h3>
            SubTotal: <span> </span>${subtotal.toFixed(2)}
          </h3>
          <p>{`(${cart.length} items)`}</p>
          { {} && <h3>
            Delivery Fees:{"$20"}
          </h3>}
          <h3>
            Total:<span> </span> ${(subtotal+20).toFixed(2)}
          </h3>
          <button className="checkout" onClick={()=>toast("Checked out")}>
            Checkout
          </button> 
        </div>
      </div>
    )}
  </div>
  )
}

export default Orders
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { decrementQuantity, incrementQuantity, removeItem } from "../redux/cartSlice";

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
const subtotal = useMemo(()=>{
  var sum =0;
  cart.forEach(product => {
    sum += product.price * product.quantity;
  });
  return sum;
},[cart]);

  return (
    <div>
      <h2 className="cart_title">Cart</h2>
      {cart.length === 0 ? (
        <p className="cart_title">No items in cart</p>
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

export default Cart
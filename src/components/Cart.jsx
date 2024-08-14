/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { decrementQuantity, incrementQuantity, removeItem } from "../redux/cartSlice";

const Cart = ({selectedOption , setSelectedOption}) => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    const subtotal = useMemo(()=>{
        var sum =0;
      cart.forEach(product => {
        sum += product.price * product.quantity;
      });
      return sum;
    },[cart]);

    const handleOptionChange = (event)=>{
      setSelectedOption(event.target.value);
    }

  return (
    <div>
      <h2 className="cart_title">Cart</h2>
      {cart.length === 0 ? (
        <div>
        <p className="cart_title">Add items to cart</p>
        <Link to={'/menu'}> 
          <button> Go to Menu </button>
        </Link>
        </div>
      ) : (
      <div>
     
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
              SubTotal:${subtotal.toFixed(2)}
            </h3>
            <p>{`(${cart.length} items)`}</p>
            { selectedOption == 'delivery' && 
            <h3>
              Delivery Fees:{"$20"}
            </h3>}
            <h3>
              Total: ${ (selectedOption == 'delivery'? 20+subtotal : subtotal ).toFixed(2) }
            </h3>
            <div className="deliveryOption">
              <input
                id="pickup"
                type="radio"
                value="pickup"
                checked={selectedOption === 'pickup'}
                onChange={handleOptionChange}
              />
            <label htmlFor="pickup" >
              Pickup
            </label>
              <input
                id="delivery"
                type="radio"
                value="delivery"
                checked={selectedOption === 'delivery'}
                onChange={handleOptionChange}
              />
            <label htmlFor="delivery" >
              Delivery
            </label>
            </div>
            <button className="checkout" onClick={()=>toast("Checked out")}>
              Checkout
            </button> 
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default Cart
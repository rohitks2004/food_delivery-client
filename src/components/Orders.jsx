/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { decrementQuantity, incrementQuantity, removeItem } from '../redux/cartSlice';

const Orders = () => {

  // const dispatch = useDispatch();
  const order = useSelector(state => state.orderSlice.order);

  const subtotal = useMemo(()=>{
      var sum =0;
        order?.items?.forEach(product => {
          sum += product.price * product.quantity;
        });
    return sum;
  },[order]);

  // console.log(order)
  // console.log(subtotal)
  return (
    <div>
    <h2 className="cart_title">Your Orders</h2>

    {!order ? ( 
    <div>
      <p className="cart_title">
        Create Your first order
      </p>
      <Link to={'/menu'}>
        <button className="">Start ordering</button>
      </Link>
    </div>
     ) 
     :
    ( 
      <div className="cart">
        {/* <div className="cart_list">
          {orders.map((product, index) => (
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
          <p>{`(${orders.length} items)`}</p>
          { {} && <h3>
            Delivery Fees:{"$20"}
          </h3>}
          <h3>
            Total:<span> </span> ${(subtotal+20).toFixed(2)}
          </h3>
          <button className="checkout" onClick={()=>toast("Checked out")}>
            Checkout
          </button> 
        </div> */}
      </div>
    )}
  </div>
  )
}

export default Orders


/*
{
    "name": "rohit",
    "items": [
        {
            "id": "0a2bf228-96cb-4ea6-8468-3359c4534127",
            "description": "Classic fried chicken with secret blend of 11 herbs and spices.",
            "price": 8.99,
            "image": "src/images/original_recipe_chicken.png",
            "quantity": 2
        },
        {
            "id": "8e480333-bd26-41dc-bd19-40df881d6579",
            "description": "Extra crunchy fried chicken with a flavorful crispy coating.",
            "price": 9.49,
            "image": "src/images/extra_crispy_chicken.png",
            "quantity": 1
        }
    ],
    "email": "rohit@mail.com",
    "phone": "1234567890",
    "orderType": "pickup",
    "orderTime": "2024-08-12T08:46:51.280Z",
    "availableTime": "2024-08-12T09:11:51.274Z"
}


*/
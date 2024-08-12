/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
const ItemCard = ({ item }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const inSideCart = cart.find((element) => element.id == item.id);
  return (
    <div className="item_card">
      <img src={item.image} width={"320px"} height={"220px"} alt={item.name} />
      <div className="item_desc">
        <p className="item_name">{item.name}</p>
        <p className="item_price">{"$" + item.price}</p>
        <p className="item_description">{item.description}</p>
      </div>
      {inSideCart ? (
        <Link to={"/cart"}>
          <button className="go_to_cart">Go to Cart</button>
        </Link>
      ) : (
        <button
          className="add_to_cart"
          onClick={() => {
            dispatch(addItem(item));
            toast("Added to Cart");
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ItemCard;

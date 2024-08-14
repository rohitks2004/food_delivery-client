import { Link, useLocation } from "react-router-dom";
import { MENU_CATEGORY } from "../constants";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";

const Menu = () => {
    const curr_category = useLocation().hash;
    const menuItems = useSelector(state => state.itemSlice.items)
  return (
    <div className="menu">
      {/* // sidebar */}
      <div className="sidebar">
        <p className="sidebar_heading">Our Menu</p>
        <div className="sidebar_list">
          {MENU_CATEGORY.map((item, key) => {
            return (
              <Link
                className={curr_category == "#" + item ? "active" : ""}
                key={key}
                to={"#" + item}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="items">
        {
          MENU_CATEGORY.map((category) => {
            return (
              <div className="category"  id={category} key={category}>
                <h2 className="category_title">{category}</h2>
                    <div className="category_items">
                       { menuItems.map((item, key) => {
                            return ( item.category == category ? <ItemCard key={key} item={item} /> : <></> )
                        })}
                    </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Menu;

{
  /* {
                "id": 1,
                "name": "Original Recipe Chicken",
                "description": "Classic fried chicken with KFC's secret blend of 11 herbs and spices.",
                "price": 8.99,
                "image": "../src\images\original_recipe_chicken.png"
                src\images\original_recipe_chicken.png
                w = 337
                h = 264
            } */
}
{
  /* <div className='item_card'>
                <img src="src\images\original_recipe_chicken.png"
                     width={'320px'} height={'220px'} alt={categoryobj.items[0].name} />
                <div className="item_desc">
                    <p className='item_name'>{categoryobj.items[0].name}</p>
                    <p className='item_price'>{"$"+categoryobj.items[0].price}</p>
                    <p className='item_description'>{categoryobj.items[0].description}</p>
                </div>
                <button className='add_to_cart' >Add to Orders</button>                    
            </div> */
}

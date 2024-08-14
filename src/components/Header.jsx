/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom"

const Header = ({setShowLoginSignup}) => {
  const currentPage = useLocation().pathname;
  return (
    <>
    <div className="header">
        <p>Foodie</p>
        <nav>
            <Link  className={currentPage ==='/'?'active':''} to={'/'}><p>Home</p></Link>
            <Link className={currentPage ==='/menu'?'active':''} to={'/menu'}><p>Menu</p></Link>
            <Link className={currentPage ==='/cart'?'active':''} to={'/cart'}><p>Cart</p></Link>
            <Link className={currentPage ==='/orders'?'active':''} to={'/orders'}><p>Orders</p></Link>
        </nav>
            <button onClick={()=>{setShowLoginSignup(true)}}>Login</button>
    </div>
    </>
  )
}

export default Header
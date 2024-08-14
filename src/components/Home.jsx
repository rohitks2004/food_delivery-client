/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Home = ({setSelectedOption}) => {
  return (
    <div className="home">
        <div className="banner">
            <div className="banner_left">
                <h1>Start your <br/>food journey.</h1>
                <Link to={'/menu'} ><button onClick={()=>setSelectedOption('pickup')} >Order Pickup<img height={'40px'} width={"40px"}  src="../../public/pickup.png" /></button></Link> 
                <Link to={'/menu'} ><button onClick={()=>setSelectedOption('delivery')} >Order Deivery<img height={'40px'} width={"40px"}  src="../../public/delivery.png" /></button></Link> 
            </div>
            <div className="banner_right">
                <img src="src/assets/home.png"
                 alt="banner"  height={'540px'} width={"960px"}/>
            </div>
        </div>
    </div>
  )
}

export default Home
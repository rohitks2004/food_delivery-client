
const Home = () => {
  return (
    <div className="home">
        <div className="banner">
            <div className="banner_left">
                <h1>Start your <br/>food journey.</h1>
                <button>Order Pickup</button>
                <button>Order Deivery</button>
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
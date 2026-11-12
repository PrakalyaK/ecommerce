import logo from '../assets/images/logo-white.png'
import mobilelogo from '../assets/images/mobile-logo.png'
import search from '../assets/images/icons/search.png'
import cart from '../assets/images/icons/cart.png'
import '../index.css'
function Header(){
    return(
      <header className="header">
        <div className="left-section">
           <a href="index.html" className="header-link">
          <img className="logo"
            src={logo}/>
          <img className="mobile-logo"
            src={mobilelogo}/>
        </a>
        </div>
        <div className="middle-section">
          <input type="text" className="search-bar" placeholder='Search'/>
          <button className='search-button'><img className="search-icon" src={search} alt="seacrhicon" /></button>
        </div>
        <div className="right-section">
             <a className="orders-link header-link" href="orders.html">

          <span className="orders-text">Orders</span>
        </a>

        <a className="cart-link header-link" href="checkout.html">
          <img className="cart-icon" src={cart} />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </a>
      </div>
      </header>
    );
}
export default Header;
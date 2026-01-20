import styles from "./Header.module.css"
import FlipkartLogo from "./HeaderImages/Flipkart.svg"
import MenuLogo from "./HeaderImages/Menu.svg"
import CartLogo from "./HeaderImages/Cart.svg"
import GetApp from "./HeaderImages/Get App.svg"
import login from "./HeaderImages/login-svg.svg"
import Location from "./HeaderImages/location-svg.svg"
import BlueArrow from "./HeaderImages/blue-Arrow.svg"
import Search from "./HeaderImages/SearchSvg.svg"
import SearchArrow from "./HeaderImages/search-black.svg"
import DownArrow from "./HeaderImages/downArrow (1).svg"
import Seller from "./HeaderImages/Become a Seller.svg"
import MoreDrop from "./HeaderImages/Dropdown with more help links.svg"
function Header() {
    return (
        <>
        <div className={styles.header}>
            <div className={styles.headerLogo}>
                <span>
                  <img src={MenuLogo} alt="" />
                </span>
                <span>
                  <img src={FlipkartLogo} alt="" />
                </span>  
            </div>
            <div className={styles.SearchBarHeaderProduct}>
                <img src={SearchArrow} alt="" />
                <input type="search" placeholder="Search for Products,Brands and More"/>
            </div>
            <div className={styles.headerSymbols}>
                <span>
                    <img src={GetApp} alt="" />
                </span>
                <span>
                    <img src={login} alt="" />
                </span>
                <div>
                    <h4>Login</h4>
                </div>
                <span>
                    <img src={DownArrow} alt="" />
                </span>
                <span>
                    <img src={CartLogo} alt="" />
                </span>
                <span>
                    <h4>Cart</h4>
                </span>
                <span>
                    <img src={Seller} alt="" />
                </span>
                <span>
                    <h4>Become a Seller</h4>
                </span>
                <span>
                    <img src={MoreDrop} alt="" />
                </span>

            </div>

        </div>
        <div className={styles.HeaderSearchLocation}>
            <div className={styles.Location}>
                <span><img src={Location} alt="" /></span>
                <h4>Location not set <span>Select delivery location</span></h4>
                <img src={BlueArrow} alt="" />
            </div>
            <div className={styles.SearchBar}>
                <img src={Search} alt="" />
                <input type="search" placeholder="Search for Products" />
            </div>
        </div>
       
        </>
    );
}

export default Header;

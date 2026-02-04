import { React } from 'react';
import style from "./DesktopFilterHeader.module.css"
import flipKartLogo from "./DesktopFilterHeaderImage/FlipKart.png"
import plusFilpImage from "./DesktopFilterHeaderImage/plusFlip.png"
import searchBtn from "./DesktopFilterHeaderImage/blueArrow.svg"
import ArroDown from "./DesktopFilterHeaderImage/ArrowDown (1).svg"
import store from "./DesktopFilterHeaderImage/store.svg"
import greyArrow from "./DesktopFilterHeaderImage/greyArrow.svg"
function DesktopFilterHeadermain() {
    return (
        <>
        <div className={style.DesktopMainFilterHeader}>
            <div className={style.flipHeaderLogo}>
            <img className={style.logo} src={flipKartLogo} alt="flipKartlogo" />
            <div className={style.plusWrite}>
            <p>Explore</p>
            <h6>Plus</h6>
            <img className={style.plusLogo} src={plusFilpImage} alt="plusFilpimage" />
            </div>
            </div>
            <div className={style.inputTypeSearch}>
                <input type="text" placeholder='Search for product,brands and more' />
                <img src={searchBtn} alt="" />
            </div>
            <div className={style.login}>
                <p>Login</p>
            </div>
            <div className={style.seller}>
                <p>Become a Seller</p>
            </div>
            <div className={style.more}>
                <p>More</p>
                <img src={ArroDown} alt="" />    
            </div>
            <div className={style.storeCart}>
                <img src={store} alt="" />
                <p>Cart</p>
            </div>
        </div> 
        <div className={style.mainApplicate}>
        <div className={style.applicate}>
            <div className={style.electronics}>
              <span>Electronics</span>
              <div>
              <img src={greyArrow} alt="" />
              </div>
            </div>
            <div className={style.electronics}>
            <span>TVs & Appliances</span>
            <img src={greyArrow} alt="" />
            </div>
            <div className={style.electronics}>
               <span>Men</span> 
                <img src={greyArrow} alt="" />
            </div>
            <div className={style.electronics}>
                <span>Women</span>
                <img src={greyArrow} alt="" />
            </div>
            <div className={style.electronics}>
                <span>Baby & Kids</span>
                <img src={greyArrow} alt="" />
            </div>
            <div className={style.electronics}>
                <span>Home & Furniture</span>
                <img src={greyArrow} alt="" />
            </div>
            <div className={style.electronics}>
                <span>Sports,Books & More</span>
                <img src={greyArrow} alt="" />
            </div>
            <div className={style.electronics}>
                <span>Flights</span>
            </div>
            <div className={style.electronics}>
                <span>Offer Zone</span>
            </div>
        </div>
        </div>
        </>
    );
}

export default DesktopFilterHeadermain;
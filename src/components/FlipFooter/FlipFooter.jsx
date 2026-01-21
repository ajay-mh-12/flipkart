import React from "react";
import style from "./FlipFooter.module.css"
import BecomeSeller from "./FlipFooterImage/Become a Seller-1.svg"
import FaceBook from "./FlipFooterImage/Facebook.svg"
import GiftCard from "./FlipFooterImage/Gift Cards-1.svg"
import HelpCenter from "./FlipFooterImage/Help Center.svg"
import Instagram from "./FlipFooterImage/Instagram.svg"
import Star from "./FlipFooterImage/Star.svg"
import Twitter from "./FlipFooterImage/Twitter.svg"
import YouTube from "./FlipFooterImage/YouTube.svg"
import Images from "./FlipFooterImage/images.svg"

function FlipFooter(){
    return(
        <>
        <div className={style.FlipFooter}>
            <div className={style.FlipFooterOne}>
                <div className={style.FooterSubOne}>
                <div>
                    <h3>ABOUT</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Flipkart</li>
                        <li>Press</li>
                        <li>Corporate Information</li>
                    </ul>

                </div>
                <div>
                    <h3>GROUP COMPANIES</h3>
                    <ul>
                        <li>Myntra</li>
                        <li>Cleartrip</li>
                        <li>Shopsy</li>
                    </ul>

                </div>
                <div>
                    <h3>HELP</h3>
                    <ul>
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <h3>CONSUMER POLICY</h3>
                    <ul>
                        <li>Cancellation & Return</li>
                        <li>Terms Of Use</li>
                        <li>Security</li>
                        <li>Privacy</li>
                        <li>Sitemap</li>
                        <li>Grievance Safety Connect</li>
                        <li>EPR Compliance</li>
                        <li>FSSAI Food Safety Connect</li>
                        <li>App</li>
                    </ul>
                </div>
                </div>
                <div className={style.FooterSubTwo}>
                <div className={style.FooterSubTwoOne}>
                    <h3>Mail Us:</h3>
                    <ul>
                        <li>Flipkart Internet Private Limited,</li>
                        <li>Building Alyssa,Begonia &</li>
                        <li>Clove Embassy Tech Village,</li>
                        <li>Outer Ring Road,Devarabessanahall Village,</li>
                        <li>Bengaluru,560103,</li>
                        <li>Karnataka,India</li>
                    </ul>
                    <div className={style.FooterSocialMain}>
                        <h3>Social</h3>
                        <div className={style.FooterSocial}>
                        <img src={FaceBook} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={YouTube} alt="" />
                        <img src={Instagram} alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className={style.FooterSubTwotwo}>
                    <h3>Registered Office Address:</h3>
                    <ul>
                        <li>Flipkart Internet Private Limited</li>
                        <li>Builings Alyss, Begonia &</li>
                        <li>Clove Embassy Tech Village,</li>
                        <li>Outer Ring Road,Devarabeesanhalli Village,</li>
                        <li>Karnataka,India</li>
                        <li>CIN:U51109KA2012PTC0666107</li>
                        <li>Telephone: <a>044-67415800</a> / <a>045-67415700</a></li>
                    </ul>

                </div>
                </div>


            </div>
            <div className={style.FlipFooterTwo}>
                <span>
                    <img src={BecomeSeller} alt="" />
                    <p>Become a Seller</p>
                </span>
                <span>
                    <img src={Star} alt="" />
                    <p>Advertise</p>
                </span>
                <span>
                    <img src={GiftCard} alt="" />
                    <p>Gift Cards</p>
                </span>
                <span>
                    <img src={HelpCenter} alt="" />
                    <p>Help Center</p>
                </span>
                <span>
                    <p>@2007-2026 FlipKart.com</p>
                </span>
                <span>
                    <img src={Images} alt="" />
                   
                </span> 
            </div>
        </div>
        </>
    )
}
export default FlipFooter
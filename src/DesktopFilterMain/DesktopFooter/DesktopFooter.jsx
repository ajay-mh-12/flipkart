import { React } from "react";
import style from "./DesktopFooter.module.css";
import facebook from "./DesktopFooterImage/facebook (1).svg";
import instagram from "./DesktopFooterImage/instagram (1).svg";
import bag from "./DesktopFooterImage/bag.svg";
import gift from "./DesktopFooterImage/gift.svg";
import star from "./DesktopFooterImage/star (1).svg";
import youtube from "./DesktopFooterImage/youtube (1).svg";
import twiter from "./DesktopFooterImage/twiter.svg";
import AllinOne from "./DesktopFooterImage/All-in-one.svg";
import question from "./DesktopFooterImage/question.svg";
function DesktopFooter() {
  return (
    <>
      <div className={style.DesktopFooter}>
        <div className={style.DesktopFooterContent}>
         <div className={style.footerOne}>
          <div className={style.footerElement}>
            <p>ABOUT</p>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Flipkart Stories</li>
              <li>Press</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className={style.footerElement}>
            <p>GROUP COMPANIES</p>
            <ul>
              <li>Myntra</li>
              <li>Cleartrip</li>
              <li>Shopsy</li>
            </ul>
          </div>
          <div className={style.footerElement}>
            <p>HELP</p>
            <ul>
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className={style.footerElement}>
            <p>CONSUMER POLICY</p>
            <ul>
              <li>Cancellation & Returns</li>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Grievance Redressal</li>
              <li>EPR Compliance</li>
              <li>FSSAI Food Safety Connect App</li>
            </ul>
          </div>
          </div>
          <div className={style.footerTwo}>
          <div className={style.mailMain}>
            <div className={style.mail}>
              <p>Mail Us</p>
              <ul>
                <li>Flipkart Internet Private Limited,</li>
                <li>Bulidings Alyssa,Begonia &</li>
                <li>Clove Embassy Tech Village,</li>
                <li>Outer Ring Road,Devarabeesanahalli Village,</li>
                <li>Karnataka,India</li>
              </ul>
            </div>
            <div className={style.social}>
              <p>Social</p>
              <div className={style.socialImage}>
                <img src={facebook} alt="facebook" />
                <img src={twiter} alt="twiter" />
                <img src={youtube} alt="youtube" />
                <img src={instagram} alt="instagram" />
              </div>
            </div>
          </div>
          <div className={style.footerElement}>
            <p>Registered Office Address:</p>
            <ul>
              <li>Flipkart Internal Private Limited,</li>
              <li>Buliding Alyssa, Begonia &</li>
              <li>Clove Embassy Tech Village,</li>
              <li>Outer Ring Road,Devarabeesanahalli Village,</li>
              <li>Bengaluru, 560103,</li>
              <li>Karnataka,India</li>
              <li>CIN:U51109KA2012TC066107</li>
              <li>
                Telephone: <a>044-45614700</a>/ <a>044-67415800</a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className={style.DesktopFooterSummary}>
          <div className={style.flip}>
            <img src={bag} alt="bag" />
            <h4>Become a Seller</h4>
          </div>
          <div className={style.flip}>
            <img src={star} alt="star" />
            <h4>Advertise</h4>
          </div>
          <div className={style.flip}>
            <img src={gift} alt="gift" />
            <h4>Gift Cards</h4>
          </div>
          <div className={style.flip}>
            <img src={question} alt="question" />
            <h4>Help Center</h4>
          </div>
          <div className={style.flip}>
            <p>© 2007-2026 Flipkart.com</p>
          </div>
          <div className={style.allinOne}>
            <img src={AllinOne} alt="allinOnePictures" />
          </div>
        </div>
      </div>
    </>
  );
}
export default DesktopFooter;

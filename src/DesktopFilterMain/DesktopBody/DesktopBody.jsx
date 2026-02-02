import React from "react";
import style from "./DesktopBody.module.css"
import Arrow from "./DesktopBodyImage/rightArrow.svg"
import DesktopBodyProduct from "./DesktopBodyProduct/DesktopBodyProduct";
function DesktopBody(){
    return(
        <>
        <div className={style.homePage}>
            <div className={style.homeName}>
                <div className={style.menu}>
                    <p>Home</p>
                    <img src={Arrow} alt="" />
                </div>
                <div className={style.menu}>
                    <p>Audio & Video</p>
                    <img src={Arrow} alt="" />
                </div>
                <div className={style.menu}>
                    <p>Headset</p>
                    <img src={Arrow} alt="" />
                </div>
                <div className={style.menu}>
                    <p>Earphones</p>
                </div>
            </div>
            <div className={style.paragrah}>
                <p> that suit your senses. If you are a die-hard fan of music, an enthusiastic gamer, or a professional with long hours of calls, <a>neck band</a> it is time to explore the versatile choices in these accessories. While searching for them online, you can find a variety of features, including headphones with deep bass, fast charging, sweatproof, water resistant, wireless, and many more, to choose the ideal ones for your lifestyle and needs. <a>earbuds</a> You can find wired and Bluetooth-compatible headphones that cater to your convenience. Also, you can choose from the wide options like , over the head, and others to meet your different usage preferences. For the music listening experience while in gym time or fitness, wireless or in-ear style pieces can be ideal. <a>Noise</a> The over-the-head style can be suitable for your immersive gaming sessions for a better sound experience. Apart from the functionality, you can also look for the aesthetic appeal to complement your personality and style while shopping for ideal headphones. Agara, ATCC, Aroma, are some of the brands that offer these accessories. You can also consider checking the price and other information before proceeding. Buy the preferred earphones to transform the way you experience audio.  </p>
            </div>
            <div className={style.earPhone}>
                <div className={style.productHeading}>
                    <h4>Earphones</h4>
                    <p>(Showing 1 - 40 products of 2,456 products)</p>
                </div>
                <div>
                    <DesktopBodyProduct/>
                </div>


            </div>

        </div>

       
        </>
    )
}
export default DesktopBody
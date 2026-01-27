import { React } from 'react';
import style from "./ProductDetailsCard.module.css"
import blueStar from "./ProductDetailsCardImage/Bluestar.svg"
import whiteStar from "./ProductDetailsCardImage/whiteStar.svg"
import DownArrow from "./ProductDetailsCardImage/DoenArrow.svg"
function ProductDetailsCard() {
    return (
        <>
        <div className={style.ProductDetailsCard}>
            <img src="https://rukminim1.flixcart.com/image/960/1280/xif0q/headphone/o/t/w/tw121-pro-pods-upto-40-hrs-playtime-type-c-fast-charging-dual-original-imahj262yjbjghjd.jpeg?q=60" alt="" />
        
        <div className={style.ProductDetailsCardSymbol}>
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.196 11.4057C21.3096 11.1653 22.4159 8.76955 21.1429 6.31952C21.0141 6.06366 19.7866 3.7842 17.271 3.49733C15.2327 3.26473 13.1489 4.46649 11.9896 6.56762C10.5727 4.2649 8.16313 3.11742 6.02635 3.62138C4.3139 4.03231 3.0485 5.43565 2.54083 6.84674C1.22239 10.483 4.73822 14.5612 6.06424 16.0964C8.0722 18.4224 10.3226 19.7559 11.9821 20.5312C12.467 20.3064 12.9898 20.0273 13.5278 19.6784C13.846 19.4768 14.134 19.2675 14.4068 19.0659" stroke="#333333" stroke-width="1.4px" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M18.0938 12V19.3125" stroke="#333333" stroke-width="1.4px" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M14.4375 15.6562H21.75" stroke="#333333" stroke-width="1.4px" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
            </div>
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.125 13.875L15 9" stroke="#333333" stroke-width="1.4px" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M20.9716 3.95434C21.0078 3.82605 21.0091 3.69044 20.9754 3.56147C20.9417 3.4325 20.8743 3.31484 20.78 3.22059C20.6858 3.12633 20.5681 3.0589 20.4392 3.02524C20.3102 2.99157 20.1746 2.99288 20.0463 3.02903L2.04629 8.48716C1.89934 8.52863 1.76854 8.61397 1.67139 8.73177C1.57424 8.84958 1.51536 8.99422 1.50262 9.14639C1.48988 9.29855 1.52388 9.45098 1.6001 9.58329C1.67631 9.71561 1.79109 9.82151 1.9291 9.88684L10.1257 13.875L14.1138 22.0706C14.1791 22.2086 14.285 22.3234 14.4173 22.3996C14.5497 22.4758 14.7021 22.5098 14.8542 22.4971C15.0064 22.4843 15.1511 22.4255 15.2689 22.3283C15.3867 22.2312 15.472 22.1004 15.5135 21.9534L20.9716 3.95434Z" stroke="#333333" stroke-width="1.4px" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
            </div>
        </div>
        
        <div className={style.ProductDetailsCardSymbolTwo}>
            <div>
            <p>3.5</p>
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12"><path d="M5.99953 8.86357L8.56453 10.4409C8.63108 10.4813 8.70812 10.5011 8.7859 10.4977C8.86368 10.4943 8.93871 10.468 9.00152 10.422C9.06433 10.376 9.11209 10.3124 9.13877 10.2393C9.16545 10.1661 9.16985 10.0867 9.15141 10.0111L8.45391 7.06779L10.7367 5.09904C10.7949 5.04793 10.8369 4.9809 10.8574 4.90621C10.878 4.83153 10.8762 4.75247 10.8523 4.67878C10.8284 4.6051 10.7835 4.54002 10.7231 4.49159C10.6626 4.44315 10.5893 4.41347 10.5122 4.40622L7.51641 4.16247L6.36234 1.36872C6.33292 1.29665 6.2827 1.23497 6.21808 1.19155C6.15347 1.14813 6.07738 1.12495 5.99953 1.12495C5.92168 1.12495 5.8456 1.14813 5.78098 1.19155C5.71636 1.23497 5.66614 1.29665 5.63672 1.36872L4.48266 4.16247L1.48688 4.40622C1.40924 4.41304 1.33532 4.44259 1.27438 4.49117C1.21343 4.53975 1.16815 4.60521 1.1442 4.67938C1.12024 4.75355 1.11867 4.83313 1.13968 4.90818C1.1607 4.98324 1.20336 5.05043 1.26235 5.10138L3.54516 7.07013L2.84766 10.0111C2.82922 10.0867 2.83361 10.1661 2.86029 10.2393C2.88697 10.3124 2.93473 10.376 2.99754 10.422C3.06035 10.468 3.13539 10.4943 3.21317 10.4977C3.29095 10.5011 3.36798 10.4813 3.43453 10.4409L5.99953 8.86357Z" fill="#008042"></path></svg>    
            </div>
            <div>
                <p>806</p>
            </div>
            </div>
        </div>
        <div className={style.DotSvg}>
            <div>
                <img src={blueStar} alt="" />
            </div>
            <div>
                <img src={whiteStar} alt="" />
            </div>
            <div>
                <img src={whiteStar} alt="" />
            </div>
            <div>
                <img src={whiteStar} alt="" />
            </div>
            <div>
                <img src={whiteStar} alt="" />
            </div>
        </div>
        <div className={style.Price}>
            <h5>Hectic</h5>
            <p>Black Earbuds With Premium Quality Sound Bluetooth Headset (Black..<a>more</a>)</p>
            <div className={style.PriceDetails}>
               <img src={DownArrow} alt="" />
               <h4>78%</h4>
               <h2>1,199</h2>
               <h3>₹258</h3>
            </div>
            
        </div>

            
        </>
    );
}

export default ProductDetailsCard;
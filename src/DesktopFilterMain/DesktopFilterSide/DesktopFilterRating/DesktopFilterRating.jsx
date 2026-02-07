import { React } from 'react';
import style from "./DesktopFilterRating.module.css"
import arrow from "./DesktopFilterRatingImage/leftArrow (1).svg"
import { useState } from 'react';
function DesktopFilterRating() {
    const[open,setOpen] = useState(false)
    return (
        <>
        <div className={`${style.DesktopFilterRatingMain} ${open ? style.open : ""}`} onClick={()=>setOpen(!open)}>
            <div className={style.DesktopFilterRating}>
                <p>CUSTOMER RATINGS</p>
                <img src={arrow} alt="" />
            </div>
            <div className={style.DesktopFilterRatingRate}>
                <div className={style.DesktopFilterRatingValue} >
                    <input type="checkbox" id='4' />
                    <label htmlFor="4">4★ & above</label>
                </div>
                <div className={style.DesktopFilterRatingValue}>
                    <input type="checkbox" id='3' />
                    <label htmlFor="3">3★ & above</label>
                </div>
                <div className={style.DesktopFilterRatingValue}>
                    <input type="checkbox" id='2' />
                    <label htmlFor="2">2★ & above</label>
                </div>
                <div className={style.DesktopFilterRatingValue}>
                    <input type="checkbox" id='1' />
                    <label htmlFor="1">1★ & above</label>
                </div>
            </div>

        </div>
            
        </>
    );
}

export default DesktopFilterRating;
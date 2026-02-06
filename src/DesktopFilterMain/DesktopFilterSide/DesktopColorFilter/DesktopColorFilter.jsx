import { React } from 'react';
import style from "./DesktopColorFilter.module.css"
import arrow from "./DestopColorImage/leftArrow (1).svg"
import { useState } from 'react';
function DesktopColorFilter() {
 const[open,setOpen] = useState(false) 
    return (
        <>
        <div className={`${style.desktopColorMain} ${open ? style.open : ""}`} onClick={()=>setOpen(!open)} >
            <div className={style.desktopColor}>
                <p>COLOR</p>
                <img src={arrow} alt="" />
            </div>
            <div className={style.colorMain}>
            <div className={style.color}>
                <input type="checkbox" id='white' />
                <div className={style.white}></div>
                <label htmlFor="white">Beige</label>
            </div>
            <div className={style.color}>
                <input type="checkbox" id='white' />
                <div className={style.black}></div>
                <label htmlFor="white">Black</label>
            </div>
            <div className={style.color}>
                <input type="checkbox" id='white' />
                <div className={style.blue}></div>
                <label htmlFor="white">Blue</label>
            </div>
            <div className={style.color}>
                <input type="checkbox" id='white' />
                <div className={style.brown}></div>
                <label htmlFor="white">Brown</label>
            </div>
            <div className={style.color}>
                <input type="checkbox" id='white' />
                <div className={style.gold}></div>
                <label htmlFor="white">Gold</label>
            </div>
            <div className={style.color}>
                <input type="checkbox" id='white' />
                <div className={style.green}></div>
                <label htmlFor="white">Green</label>
            </div>
            <div className={style.more}>
                <p>11 MORE</p>
            </div>

            </div>


        </div>
        
        </>
    );
}

export default DesktopColorFilter;
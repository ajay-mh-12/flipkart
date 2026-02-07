import { React } from 'react';
import style from "./DesktopFilterDiscount.module.css"
import arrow from "./DesktopFilterDiscountImage/leftArrow (1).svg"
import { useState } from 'react';
function DesktopFilterDiscount() {
    const [open,setOpen] = useState(false)
    return (
        <>
        <div className={`${style.discountMain} ${open ? style.open : ""}`} onClick={()=>setOpen(!open)} >
            <div className={style.discount}>
                <p>DISCOUNT</p>
                <img src={arrow} alt="" />
            </div>
            <div className={style.discountPriceMain}>
                <div className={style.discountPrice}>
                    <input type="checkbox" id='70' />
                    <label htmlFor="70">70% or more</label>
                </div>
                <div className={style.discountPrice} >
                    <input type="checkbox" id='60' />
                    <label htmlFor="60">60% or more</label>
                </div>
                <div className={style.discountPrice}>
                    <input type="checkbox" id='50' />
                    <label htmlFor="50">50% or more</label>
                </div>
                <div className={style.discountPrice}> 
                    <input type="checkbox" id='40' />
                    <label htmlFor="40">40% or more</label>
                </div>
                <div className={style.discountPrice}>
                    <input type="checkbox" id='30' />
                    <label htmlFor="30">30% or more</label>
                </div>
            </div>

        </div>
            
        </>
    );
}

export default DesktopFilterDiscount;
import React from "react";
import style from "./Discount.module.css"
function Discount(){


    return(
        <>
        <div className={style.discount}>
            <div className={style.discountDetails}>
                <input type="checkbox" id="discount" />
                <label htmlFor="discount">50% or more</label>
            </div>
            <div className={style.discountDetails}>
                <input type="checkbox" id="discount" />
                <label htmlFor="discount">40% or more</label>
            </div>
            <div className={style.discountDetails}>
                <input type="checkbox" id="discount" />
                <label htmlFor="discount">30% or more</label>
            </div>
        </div>

    
        </>
    )
}
export default Discount
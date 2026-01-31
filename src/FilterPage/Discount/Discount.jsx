import React, { useContext } from "react";
import style from "./Discount.module.css"
import { discountFiltercontext } from "../../App";
import { useState } from "react";
function Discount(){
const{discount,setDiscount} = useContext(discountFiltercontext)
function handleClick(e){
    if(e.target.checked){
        setDiscount((prev)=>[...prev,e.target.value])
    }else{
        setDiscount((prev)=>prev.filter(item=>item !==e.target.value))
    }

}
console.log(discount)
    return(
        <>
        <div className={style.discount}>
            <div className={style.discountDetails}>
                <input type="checkbox" id="discount" value="50%" onChange={handleClick} />
                <label htmlFor="discount">50% or more</label>
            </div>
            <div className={style.discountDetails}>
                <input type="checkbox" id="discountHigh" value="40%" onChange={handleClick} />
                <label htmlFor="discountHigh">40% or more</label>
            </div>
            <div className={style.discountDetails}>
                <input type="checkbox" id="discountLess" value="30%" onChange={handleClick} />
                <label htmlFor="discountLess">30% or more</label>
            </div>
        </div>

    
        </>
    )
}
export default Discount
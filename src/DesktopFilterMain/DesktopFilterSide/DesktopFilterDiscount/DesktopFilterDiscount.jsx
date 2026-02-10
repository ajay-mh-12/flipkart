import { React } from 'react';
import style from "./DesktopFilterDiscount.module.css"
import arrow from "./DesktopFilterDiscountImage/leftArrow (1).svg"
import { useState,useContext } from 'react';
import { discountFiltercontext } from '../../../App';
function DesktopFilterDiscount() {
    const [open,setOpen] = useState(false)
    const {discount,setDiscount} = useContext(discountFiltercontext)
    function handleClick(e){
        if(e.target.checked){
            setDiscount(prev => [...prev,Number(e.target.value)])
        }else{
            setDiscount(prev => prev.filter(item=> item !== Number(e.target.value)))
        }
    }
    return (
        <>
        <div className={`${style.discountMain} ${open ? style.open : ""}`}  >
            <div className={style.discount} onClick={()=>setOpen(!open)}>
                <p>DISCOUNT</p>
                <img src={arrow} alt="" />
            </div>
            <div className={style.discountPriceMain}>
                <div className={style.discountPrice} onChange={handleClick}>
                    <input type="checkbox" id='70' value={70} />
                    <label htmlFor="70">70% or more</label>
                </div>
                <div className={style.discountPrice} onChange={handleClick} >
                    <input type="checkbox" id='60' value={60} />
                    <label htmlFor="60">60% or more</label>
                </div>
                <div className={style.discountPrice}>
                    <input type="checkbox" id='50' value={50} onChange={handleClick} />
                    <label htmlFor="50">50% or more</label>
                </div>
                <div className={style.discountPrice}> 
                    <input type="checkbox" id='40' value={40} onChange={handleClick} />
                    <label htmlFor="40">40% or more</label>
                </div>
                <div className={style.discountPrice}>
                    <input type="checkbox" id='30' value={30} onChange={handleClick} />
                    <label htmlFor="30">30% or more</label>
                </div>
            </div>

        </div>
            
        </>
    );
}

export default DesktopFilterDiscount;
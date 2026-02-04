import React from "react";
import leftArrow from "./DesktopFilterHeaderImage/leftArrow (1).svg"
import blackArrow from "./DesktopFilterHeaderImage/BlackleftArrow.svg"
import style from "../../DesktopFilterSide/DesktopFilterSlide.module.css"
import { useState } from "react";
import DesktopBrandFilter from "./DesktopBrandFilter/DesktopBrandFilter";
function DesktopFilterHeader(){
    const [open,setOpen] = useState(false)
    return(
        <>
        <div className={style.filterSide}>
            <div className={style.filter}>
            <h2>Filters</h2>
            </div>
            <div className={style.categories}>
                <h2>CATEGORIES</h2>
                <div className={style.audio}>
                    <img src={leftArrow} alt="" />
                    <p>Audio & Video</p>
                </div>
                <div className={style.headest}>
                    <img src={leftArrow} alt="" />
                    <h4>Headset</h4>
                </div>
                <div className={`${style.earphones} ${open ? style.open : ""}`} onClick={()=> setOpen(!open)} >
                    <div className={style.earphone}>
                    <img src={blackArrow} alt="" />
                    <h3>Earphones</h3>
                    </div>
                    <div className={style.earphoneCategory} >
                        <p>Wired Earphones</p>
                        <p>Wireless Earphones</p>
                    </div>
                </div>

            </div>
            <div>
                <DesktopBrandFilter/>
            </div>

        </div>
        </>
    )
}
export default DesktopFilterHeader
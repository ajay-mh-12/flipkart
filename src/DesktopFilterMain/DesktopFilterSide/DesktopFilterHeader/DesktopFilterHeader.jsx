import React from "react";
import leftArrow from "./DesktopFilterHeaderImage/leftArrow (1).svg"
import blackArrow from "./DesktopFilterHeaderImage/BlackleftArrow.svg"
import assured from "./DesktopFilterHeaderImage/AssuredIMage.png"
import style from "../../DesktopFilterSide/DesktopFilterSlide.module.css"
import { useState } from "react";
import DesktopBrandFilter from "./DesktopBrandFilter/DesktopBrandFilter";
import DesktopConnectvityFilter from "../DesktopConnectvityFilter/DesktopConnectvityFilter";
import DesktopColorFilter from "../DesktopColorFilter/DesktopColorFilter";
import DesktopPriceFilter from "../DesktopPriceFilter/DesktopPriceFilter";
import DesktopFilterDiscount from "../DesktopFilterDiscount/DesktopFilterDiscount";
import DesktopFilterRating from "../DesktopFilterRating/DesktopFilterRating";
import DesktopFilterHeadType from "../../DesktopFilterHeadType/DesktopFilterHeadType";

function DesktopFilterHeader(){
    const [open,setOpen] = useState(false)
    const [click,setClick] = useState(false)
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
                <div className={`${style.earphones} ${click ? style.open : ""}`} onClick={()=> setClick(!click)} >
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
            <div>
                <DesktopConnectvityFilter/>
            </div>
            <div>
                <DesktopColorFilter/>
            </div>
            <div className={`${style.compatibleMain} ${open ? style.open : ""}`} onClick={()=>setOpen(!open)} >
                <div className={style.compatibleHead}>
                    <p>COMPATIBLE WITH</p>
                    <img src={leftArrow} alt="" />
                </div>
                <div className={style.compatible}>
                <input type="checkbox" id="mobile" />
                <label htmlFor="mobile">Mobile</label>  
                </div>
                <div className={style.compatible}>
                <input type="checkbox" id="laptop" />
                <label htmlFor="laptop">Laptop</label>  
                </div>
                <div className={style.compatible}>
                <input type="checkbox" id="tablet" />
                <label htmlFor="tablet">Tablet</label>  
                </div>
                <div className={style.compatible}>
                <input type="checkbox" id="audio" />
                <label htmlFor="audio">Audio Player</label>  
                </div>
                <div className={style.compatible}>
                <input type="checkbox" id="gaming" />
                <label htmlFor="gaming">Gaming Console</label>  
                </div>
                <div className={style.compatible}>
                <input type="checkbox" id="desktop" />
                <label htmlFor="desktop">Desktop</label>  
                </div>
                <div className={style.compatible}>
                <input type="checkbox" id="television" />
                <label htmlFor="telivision">Telivision</label>  
                </div>
                <div className={style.compatible}>
                <input type="checkbox" id="studio" />
                <label htmlFor="studio">Studio Recording</label>  
                </div>
            </div>
            <div>
                <DesktopPriceFilter/>
            </div>
            <div>
                <DesktopFilterDiscount/>
            </div>
            <div>
                <DesktopFilterRating/>
            </div>
            <div className={style.assureImage}>
                <input type="checkbox" id="image" />
                <img src={assured} alt="image" />
            </div>
            <div>
                <DesktopFilterHeadType/>
            </div>
            <div className={style.avalability}>
                <p>AVAILABILITY</p>
                <img src={leftArrow} alt="" />
            </div>
            

        </div>
        </>
    )
}
export default DesktopFilterHeader
import { React } from 'react';
import style from "./DesktopBrandFilter.module.css"
import arrow from "./DesktopBrandFilterImage/leftArrow (1).svg"
import search from "./DesktopBrandFilterImage/searchIcon.svg"
import { useState } from 'react';
function DesktopBrandFilter() {
    const[open,setOpen] = useState(false)
    return (
        <>
        <div className={`${style.filterBrand} ${open ? style.open : ""}`} onClick={()=>setOpen(!open)} >
            <div className={style.brandMain} >
                <h4>BRAND</h4>
                <img src={arrow} alt="downArrow" />
            </div>
            <div className={style.filterBrandSearch}>
                <div className={style.brandInput}>
                    <img src={search} alt="" />
                    <input type="text" placeholder='Search Brand'/>
                </div>
                <div className={style.boat}>
                    <input type="checkbox" id='boat' />
                    <label htmlFor="boat">boAt</label>
                </div>
                <div className={style.boat}>
                    <input type="checkbox" id='oneplus' />
                    <label htmlFor="oneplus">OnePlus</label>
                </div>
                <div className={style.boat}>
                    <input type="checkbox" id='realme' />
                    <label htmlFor="realme">realme</label>
                </div>
                <div className={style.boat}>
                    <input type="checkbox" id='noise' />
                    <label htmlFor="noise">Noise</label>
                </div>
                <div className={style.boat}>
                    <input type="checkbox" id='jbl' />
                    <label htmlFor="jbl">JBL</label>
                </div>
                <div className={style.boat}>
                    <input type="checkbox" id='cmf' />
                    <label htmlFor="cmf">CMF by Nothing</label>
                </div>
                <div className={style.more}>
                  <p>415 More</p>  
                </div>
                
            </div>

        </div>
           
        </>
    );
}

export default DesktopBrandFilter;
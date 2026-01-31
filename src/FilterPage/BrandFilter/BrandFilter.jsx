import { React, useContext } from 'react';
import style from "./BrandFilter.module.css"
import blueStar from "./BrandImage/blueSearch.webp"
import { useState } from 'react';
import { brandFiltercontext } from '../../App';
function BrandFilter() {
    const {brand,setBrand} =useContext(brandFiltercontext)
    function handleClick(e){
        if(e.target.checked){
            setBrand((prev)=> [...prev,e.target.value])
        }else{
            setBrand(prev => prev.filter(item => item !== e.target.value))
        }
    }
       
    
    return (
        <>
        <div className={style.BrandFilterMain}>
            <div className={style.brandSearch}>
                <input type="text"  placeholder='Search Brand' />
                <img src={blueStar} alt="BlArrow" />
            </div>
            <div className={style.BrandFilter}>
            <p>Popular Filters</p>
            <div className={style.brandName}>
                <input type="checkbox" id='Denver' value="boat" onChange={handleClick} />
                <label htmlFor="Denver">boAt</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='Wildstone' value="oneplus" onChange={handleClick} />
                <label htmlFor="Wildstone">OnePlus</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='FOGG' value="realme" onChange={handleClick} />
                <label htmlFor="FOGG">realme</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='Adil' value="noise" onChange={handleClick} />
                <label htmlFor="Adil">Noise</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='Bear' value="jbl" onChange={handleClick} />
                <label htmlFor="Bear">JBL</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='Nivea' value="cmfnothing" onChange={handleClick}/>
                <label htmlFor="Nivea">CMF by Nothing</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='Engage' value="OPPO" onChange={handleClick} />
                <label htmlFor="Engage">OPPO</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='Man' value="samsung" onChange={handleClick} />
                <label htmlFor="Man">Samsung</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='Set' value="Apple" onChange={handleClick} />
                <label htmlFor="Set">Apple</label>
            </div>

        </div>
        <div className={style.BrandFooter}>
            <p>View More</p>
        </div>
         </div>
        
            
        </>
    );
}

export default BrandFilter;
import { React } from 'react';
import style from "./BrandFilter.module.css"
import blueStar from "./BrandImage/blueSearch.webp"
function BrandFilter() {
    return (
        <>
        <div className={style.BrandFilterMain}>
            <div className={style.brandSearch}>
                <input type="text"  placeholder='Search Brand'/>
                <img src={blueStar} alt="BlArrow" />
            </div>
            <div className={style.BrandFilter}>
            <p>Popular Filters</p>
            <div className={style.brandName}>
                <input type="checkbox" id='Denver' />
                <label htmlFor="Denver">boAt</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='Wildstone' />
                <label htmlFor="Wildstone">OnePlus</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='FOGG' />
                <label htmlFor="FOGG">realme</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='Adil' />
                <label htmlFor="Adil">Noise</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='Bear' />
                <label htmlFor="Bear">JBL</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='Nivea' />
                <label htmlFor="Nivea">CMF by Nothing</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='Engage' />
                <label htmlFor="Engage">OPPO</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='Man' />
                <label htmlFor="Man">Samsung</label>
            </div>
            <div className={style.brandName}>
                <input type="checkbox" id='Set' />
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
import { React } from 'react';
import style from "./RatingFilter.module.css"
function RatingFilter() {
    return (
        <>
        <div className={style.rating}>
            <div className={style.ratingFilter}>
                <input type="checkbox" id='rate' />
                <label htmlFor="rate">3★ & above</label>
            </div>
            <div className={style.ratingFilter}>
                <input type="checkbox"  id='rate'/>
                <label htmlFor="rate">4★ & above</label>
            </div>
            <div className={style.ratingFilter}>
                <input type="checkbox" id='rate' />
                <label htmlFor="rate">2★ & above</label>
            </div>
            <div className={style.ratingFilter}>
                <input type="checkbox" id='rate' />
                <label htmlFor="rate">1★ & above</label>
            </div>

        </div>
            
        </>
    );
}

export default RatingFilter;
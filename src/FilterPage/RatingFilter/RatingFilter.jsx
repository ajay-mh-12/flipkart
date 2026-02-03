import { React, useContext } from 'react';
import style from "./RatingFilter.module.css"
import { ratingFiltercontext } from '../../App';
import { useState } from 'react';
function RatingFilter() {
const {rateing,setRateing} = useContext(ratingFiltercontext)

function handleClick(e){
    if(e.target.checked){
        setRateing((prev)=>[...prev,e.target.value])
    }else{
        setRateing(prev=>prev.filter(item=>item !==e.target.value))
    }
}
console.log(rateing)
    return (
        <>
        <div className={style.rating}>
            <div className={style.ratingFilter}>
                <input type="checkbox" id='rate' value={3} onChange={handleClick} />
                <label htmlFor="rate">3★ & above</label>
            </div>
            <div className={style.ratingFilter}>
                <input type="checkbox"  id='rate4' value={4} onChange={handleClick}/>
                <label htmlFor="rate4">4★ & above</label>
            </div>
            <div className={style.ratingFilter}>
                <input type="checkbox" id='rate2' value={2} onChange={handleClick} />
                <label htmlFor="rate2">2★ & above</label>
            </div>
            <div className={style.ratingFilter}>
                <input type="checkbox" id='rate1' value={1} onChange={handleClick} />
                <label htmlFor="rate1">1★ & above</label>
            </div>

        </div>
            
        </>
    );
}

export default RatingFilter;
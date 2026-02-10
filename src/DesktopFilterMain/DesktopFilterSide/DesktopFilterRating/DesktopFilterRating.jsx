import { React } from 'react';
import style from "./DesktopFilterRating.module.css"
import arrow from "./DesktopFilterRatingImage/leftArrow (1).svg"
import { useState,useContext } from 'react';
import { ratingFiltercontext } from '../../../App';
function DesktopFilterRating() {
    const[open,setOpen] = useState(false)
    const {rateing,setRateing} = useContext(ratingFiltercontext)
    function handleClick(e){
        if(e.target.checked){
            setRateing(prev => [...prev,Number(e.target.value)])
        }else{
            setRateing(prev=> prev.filter(item => item !== Number(e.target.value)))
        }
    }
    return (
        <>
        <div className={`${style.DesktopFilterRatingMain} ${open ? style.open : ""}`}>
            <div className={style.DesktopFilterRating}  onClick={()=>setOpen(!open)}>
                <p>CUSTOMER RATINGS</p>
                <img src={arrow} alt="" />
            </div>
            <div className={style.DesktopFilterRatingRate}>
                <div className={style.DesktopFilterRatingValue} onChange={handleClick} >
                    <input type="checkbox" id='4' value={4} />
                    <label htmlFor="4">4★ & above</label>
                </div>
                <div className={style.DesktopFilterRatingValue} onChange={handleClick}>
                    <input type="checkbox" id='3' value={3} />
                    <label htmlFor="3">3★ & above</label>
                </div>
                <div className={style.DesktopFilterRatingValue} onChange={handleClick}>
                    <input type="checkbox" id='2' value={2} />
                    <label htmlFor="2">2★ & above</label>
                </div>
                <div className={style.DesktopFilterRatingValue} onChange={handleClick}>
                    <input type="checkbox" id='1' value={1} />
                    <label htmlFor="1">1★ & above</label>
                </div>
            </div>

        </div>
            
        </>
    );
}

export default DesktopFilterRating;
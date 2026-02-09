import { React } from 'react';
import style from "./DesktopColorFilter.module.css"
import arrow from "./DestopColorImage/leftArrow (1).svg"
import { useState,useContext } from 'react';
import { colorFiltercontext } from '../../../App';
function DesktopColorFilter() {
 const[open,setOpen] = useState(false) 
 const {color,setColor}= useContext(colorFiltercontext)
 function handleClick(e) {
    if(e.target.checked) {
        setColor(prev => [...prev,e.target.value])
    }else{
        setColor(prev=>prev.filter(item=>item !== e.target.value))
    }
 }
    return (
        <>
        <div className={`${style.desktopColorMain} ${open ? style.open : ""}`} onClick={()=>setOpen(!open)} >
            <div className={style.desktopColor}>
                <p>COLOR</p>
                <img src={arrow} alt="" />
            </div>
            <div className={style.colorMain}>
            <div className={style.color} onChange={handleClick}>
                <input type="checkbox" id='white' value='white' />
                <div className={style.white}></div>
                <label htmlFor="white">Beige</label>
            </div>
            <div className={style.color} onChange={handleClick}>
                <input type="checkbox" id='black' value='black' />
                <div className={style.black}></div>
                <label htmlFor="black">Black</label>
            </div>
            <div className={style.color} onChange={handleClick}>
                <input type="checkbox" id='blue' value='blue' />
                <div className={style.blue}></div>
                <label htmlFor="blue">Blue</label>
            </div>
            <div className={style.color} onChange={handleClick}>
                <input type="checkbox" id='brown' value='brown' />
                <div className={style.brown}></div>
                <label htmlFor="brown">Brown</label>
            </div>
            <div className={style.color} onChange={handleClick}>
                <input type="checkbox" id='gold' value='gold' />
                <div className={style.gold}></div>
                <label htmlFor="gold">Gold</label>
            </div>
            <div className={style.color} onChange={handleClick} >
                <input type="checkbox" id='green' value='green' />
                <div className={style.green}></div>
                <label htmlFor="green">Green</label>
            </div>
            <div className={style.more}>
                <p>11 MORE</p>
            </div>

            </div>


        </div>
        
        </>
    );
}

export default DesktopColorFilter;
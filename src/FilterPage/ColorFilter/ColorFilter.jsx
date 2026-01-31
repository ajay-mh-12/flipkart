import React, { useContext } from "react";
import style from "./ColorFilter.module.css"
import { colorFiltercontext } from "../../App";
import { useState } from "react";
function ColorFilter(){
    // const [color,setColor] = useState([])
    const {color,setColor} = useContext(colorFiltercontext)
    function handleClick(e){
        if(e.target.checked){
            setColor((prev)=>[...prev,e.target.value])
        }else{
            setColor((prev)=>prev.filter(item=>item !==e.target.value))
        }
    }
    console.log(color)
    
    return(
        <>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="white" value="white" onChange={handleClick} />
            <label htmlFor="white">White</label>
            </div>
            <div className={style.Color}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="blue" value="blue" onChange={handleClick} />
            <label htmlFor="blue">Blue</label>
            </div>
            <div className={style.ColorBlue}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="pink" value="pink" onChange={handleClick} />
            <label htmlFor="pink">Pink</label>
            </div>
            <div className={style.ColorPink}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="green" value="green" onChange={handleClick} />
            <label htmlFor="green">Green</label>
            </div>
            <div className={style.ColorGreen}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="red" value='red' onChange={handleClick} />
            <label htmlFor="red">Red</label>
            </div>
            <div className={style.ColorRed}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="grey" value="grey" onChange={handleClick} />
            <label htmlFor="grey">Grey</label>
            </div>
            <div className={style.ColorGrey}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="orange" value="orange" onChange={handleClick} />
            <label htmlFor="orange">Orange</label>
            </div>
            <div className={style.ColorOrange}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="yellow" value="yellow" onChange={handleClick} />
            <label htmlFor="yellow">Yellow</label>
            </div>
            <div className={style.ColorYellow}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="brown" value="brown" onChange={handleClick} />
            <label htmlFor="brown">Brown</label>
            </div>
            <div className={style.ColorBrown}></div>
        </div>
        </>
    )
}
export default ColorFilter
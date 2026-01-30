import React from "react";
import style from "./ColorFilter.module.css"
function ColorFilter(){
    return(
        <>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="color" />
            <label htmlFor="color">White</label>
            </div>
            <div className={style.Color}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="color" />
            <label htmlFor="color">Blue</label>
            </div>
            <div className={style.ColorBlue}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="color" />
            <label htmlFor="color">Pink</label>
            </div>
            <div className={style.ColorPink}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="color" />
            <label htmlFor="color">Green</label>
            </div>
            <div className={style.ColorGreen}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="color" />
            <label htmlFor="color">Red</label>
            </div>
            <div className={style.ColorRed}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="color" />
            <label htmlFor="color">Grey</label>
            </div>
            <div className={style.ColorGrey}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="color" />
            <label htmlFor="color">Orange</label>
            </div>
            <div className={style.ColorOrange}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="color" />
            <label htmlFor="color">Yellow</label>
            </div>
            <div className={style.ColorYellow}></div>
        </div>
        <div className={style.ColorFilter}>
            <div className={style.ColorWrite}>
            <input type="checkbox" id="color" />
            <label htmlFor="color">Brown</label>
            </div>
            <div className={style.ColorBrown}></div>
        </div>
        </>
    )
}
export default ColorFilter
import { React } from 'react';
import style from "./DesktopFilterHeadType.module.css"
import arrow from "./DesktopFilterHeadTypeImage/leftArrow (1).svg"
import { useState } from 'react';
function DesktopFilterHeadType() {
    const [open,setOpen] = useState(false)
    return (
        <>
        <div className={`${style.DesktopFilterHeadTypeMain} ${open ? style.open : " "}`} onClick={()=>setOpen(!open)}>
            <div className={style.DesktopFilterType}>
                <p>HEADPHONE TYPE</p>
                <img src={arrow} alt="arrow" />
            </div>
            <div className={style.DesktopFilterTypes}>
                <div className={style.desktopFilterTypeValue}>
                    <input type="checkbox" id='ear' />
                    <label htmlFor="ear">In the Eaar</label>    
                </div>
                <div className={style.desktopFilterTypeValue}>
                    <input type="checkbox" id='wireless' />
                    <label htmlFor="wireless">True Wireless</label>
                </div>
            </div>

        </div>
            
        </>
    );
}

export default DesktopFilterHeadType;
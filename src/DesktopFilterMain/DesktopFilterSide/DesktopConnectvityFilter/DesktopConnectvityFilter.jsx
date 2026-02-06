import { React } from 'react';
import style from "./DesktopConnectvityFilter.module.css"
import arrow from "./DesktopConnectvityFilterImage/leftArrow (1).svg"
import { useState } from 'react';
function DesktopConnectvityFilter() {
 const [open,setOpen] = useState(false)
    return (
        <>
        <div className={`${style.connectivityMain} ${open ? style.open : ''}`} onClick={()=>setOpen(!open)}>
            <div className={style.connectivity}>
                <p>CONNECTIVITY</p>
                <img src={arrow} alt="" />
            </div>
            <div className={style.bluetooth}>
                <input type="checkbox" id='bluetooth' />
                <label htmlFor="bluetooth">Bluetooth</label>
            </div>
            <div className={style.bluetooth}>
                <input type="checkbox" id='two' />
                <label htmlFor="two">Bluetooth & Wired</label>
            </div>
            <div className={style.bluetooth}>
                <input type="checkbox" id='wired' />
                <label htmlFor="wired">Wired</label>
            </div>
        </div>
            
        </>
    );
}

export default DesktopConnectvityFilter;
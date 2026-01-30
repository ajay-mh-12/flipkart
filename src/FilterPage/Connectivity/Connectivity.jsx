import { React } from 'react';
import style from "./Connectivity.module.css"
function Connectivity() {
    return (
        <>
        <div className={style.Connectivity}>
            <input type="checkbox" id='connect' />
            <label htmlFor="connect">Bluetooth</label>
        </div>
        <div className={style.Connectivity}>
            <input type="checkbox" id='connect' />
            <label htmlFor="connect">Wired</label>
        </div>
        <div className={style.Connectivity}>
            <input type="checkbox" id='connect' />
            <label htmlFor="connect">Bluetooth & Wired</label>
        </div>
            
        </>
    );
}

export default Connectivity;
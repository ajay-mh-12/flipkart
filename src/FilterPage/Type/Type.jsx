import { React } from 'react';
import style from "./Type.module.css"
function Type() {
    return (
        <>
        <div className={style.headphoneType}>
            <div className={style.type}>
                <input type="checkbox" id='type' />
                <label htmlFor="type">On the Ear</label>
            </div>
            <div className={style.type}>
                <input type="checkbox"  id='type'/>
                <label htmlFor="type">In the Ear</label>
            </div>
            <div className={style.type}>
                <input type="checkbox" id='type' />
                <label htmlFor="type">True Wireless</label>
            </div>

        </div>
            
        </>
    );
}

export default Type;
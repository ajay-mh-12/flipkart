import { React } from 'react';
import style from "./GenderFilter.module.css"
function GenderFilter() {
    return (
        <>
        <div className={style.GenderFilter}>
            <input type="checkbox" id='check' value={"check"} />
            <label htmlFor="check">Men</label>
        </div>
            
        </>
    );
}

export default GenderFilter;
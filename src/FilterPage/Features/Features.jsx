import { React } from 'react';
import style from "./Features.module.css"
function Features() {
    return (
        <>
        <div className={style.Features}>
            <div className={style.featuresFilter}>
                <input type="checkbox"  id='features'/>
                <label htmlFor="features">Fast Charging</label>
            </div>
            <div className={style.featuresFilter}>
                <input type="checkbox" id='features' />
                <label htmlFor="features">Noise Cancellation</label>
            </div>
            <div className={style.featuresFilter}>
                <input type="checkbox" id='features' />
                <label htmlFor="features">Deep Bass</label>
            </div>
        </div>
            
        </>
    );
}

export default Features;
import { React, useContext } from 'react';
import style from "./Features.module.css"
import { featuresFiltercontext } from '../../App';
import { useState } from 'react';
function Features() {
    const {features,setFeatures} = useContext(featuresFiltercontext)

    function handleClick(e){
        if(e.target.checked){
            setFeatures((prev)=>[...prev,e.target.value])
        }else{
            setFeatures(prev => prev.filter(item=>item !==e.target.value))
        }
    }
    console.log(features)
    return (
        <>
        <div className={style.Features}>
            <div className={style.featuresFilter}>
                <input type="checkbox"  id='features' value="fastCharge" onClick={handleClick}/>
                <label htmlFor="features">Fast Charging</label>
            </div>
            <div className={style.featuresFilter}>
                <input type="checkbox" id='features1' value="noiseCan" onChange={handleClick} />
                <label htmlFor="features1">Noise Cancellation</label>
            </div>
            <div className={style.featuresFilter}>
                <input type="checkbox" id='features2' value="deepBass" onChange={handleClick} />
                <label htmlFor="features2">Deep Bass</label>
            </div>
        </div>
            
        </>
    );
}

export default Features;
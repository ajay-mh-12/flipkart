import { React, useContext } from 'react';
import style from "./Type.module.css"
import { typesFiltercontext } from '../../App';
import { useState } from 'react';
function Type() {
    const {type,setType}= useContext(typesFiltercontext)
    function handleClick(e){
        if(e.target.checked){
            setType((prev)=>[...prev,e.target.value])
        }else{
            setType(prev=>prev.filter(item=>item !== e.target.value))
        }
    }
    console.log(type)
    return (
        <>
        <div className={style.headphoneType}>
            <div className={style.type}>
                <input type="checkbox" id='type' value="ontheEar" onChange={handleClick} />
                <label htmlFor="type">On the Ear</label>
            </div>
            <div className={style.type}>
                <input type="checkbox"  id='type1' value="intheEar" onChange={handleClick}/>
                <label htmlFor="type1">In the Ear</label>
            </div>
            <div className={style.type}>
                <input type="checkbox" id='type2' value="trueWireless" onChange={handleClick} />
                <label htmlFor="type2">True Wireless</label>
            </div>

        </div>
            
        </>
    );
}

export default Type;
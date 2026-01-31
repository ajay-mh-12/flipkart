import { React, useContext } from 'react';
import style from "./Connectivity.module.css"
import { connectFiltercontext } from '../../App';
import { useState } from 'react';
function Connectivity() {
   const{connect,setConnect} = useContext(connectFiltercontext)
    function handleClick(e){
        if(e.target.checked){
            setConnect((prev)=>[...prev,e.target.value])
        }else{
            setConnect((prev)=>prev.filter(item=>item !==e.target.value))
        }
    }
    console.log(connect)
    return (
        <>
        <div className={style.Connectivity}>
            <input type="checkbox" id='connect' value="bluetooth" onChange={handleClick} />
            <label htmlFor="connect">Bluetooth</label>
        </div>
        <div className={style.Connectivity}>
            <input type="checkbox" id='connectWired' value="wired" onChange={handleClick}  />
            <label htmlFor="connectWired">Wired</label>
        </div>
        <div className={style.Connectivity}>
            <input type="checkbox" id='connectBoth' value="blueWired" onChange={handleClick} />
            <label htmlFor="connectBoth">Bluetooth & Wired</label>
        </div>
            
        </>
    );
}

export default Connectivity;
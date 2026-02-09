import { React } from 'react';
import style from "./DesktopConnectvityFilter.module.css"
import arrow from "./DesktopConnectvityFilterImage/leftArrow (1).svg"
import { useState, useContext } from 'react';
import { connectFiltercontext } from '../../../App';
function DesktopConnectvityFilter() {
 const [open,setOpen] = useState(false)
 const {connect,setConnect} = useContext(connectFiltercontext)
 function handleClick(e){
    if(e.target.checked){
        setConnect((prev)=>[...prev,e.target.value])
    }else{
        setConnect(prev => prev.filter(item =>item !== e.target.value))
    }
 }

    return (
        <>
        <div className={`${style.connectivityMain} ${open ? style.open : ''}`} onClick={()=>setOpen(!open)}>
            <div className={style.connectivity}>
                <p>CONNECTIVITY</p>
                <img src={arrow} alt="" />
            </div>
            <div className={style.bluetooth}> 
                <input type="checkbox" id='bluetooth' value="bluetooth" onChange={handleClick} />
                <label htmlFor="bluetooth">Bluetooth</label>
            </div>
            <div className={style.bluetooth}>
                <input type="checkbox" id='two' value="blueWired" onChange={handleClick} />
                <label htmlFor="two">Bluetooth & Wired</label>
            </div>
            <div className={style.bluetooth}>
                <input type="checkbox" id='wired' value="wired" onChange={handleClick} />
                <label htmlFor="wired">Wired</label>
            </div>
        </div>
            
        </>
    );
}

export default DesktopConnectvityFilter;
import { React } from 'react';
import style from "./DesktopFilterHeadType.module.css"
import arrow from "./DesktopFilterHeadTypeImage/leftArrow (1).svg"
import { useState,useContext } from 'react';
import { typesFiltercontext } from '../../App';
function DesktopFilterHeadType() {
    const [open,setOpen] = useState(false)
    const {type,setType} = useContext(typesFiltercontext)
    function handleClick(e){
        if(e.target.checked){
            setType(prev => [...prev,e.target.value])
        }else{
            setType(prev => prev.filter(item=>item !==e.target.value))
        }
    }
    return (
        <>
        <div className={`${style.DesktopFilterHeadTypeMain} ${open ? style.open : " "}`} onClick={()=>setOpen(!open)}>
            <div className={style.DesktopFilterType}>
                <p>HEADPHONE TYPE</p>
                <img src={arrow} alt="arrow" />
            </div>
            <div className={style.DesktopFilterTypes}>
                <div className={style.desktopFilterTypeValue} onChange={handleClick}>
                    <input type="checkbox" id='ear' value="intheEar" />
                    <label htmlFor="ear">In the Eaar</label>    
                </div>
                <div className={style.desktopFilterTypeValue}onChange={handleClick} >
                    <input type="checkbox" id='wireless' value="trueWireless" />
                    <label htmlFor="wireless">True Wireless</label>
                </div>
            </div>

        </div>
            
        </>
    );
}

export default DesktopFilterHeadType;
import { React } from 'react';
import style from "./DesktopBrandFilter.module.css"
import arrow from "./DesktopBrandFilterImage/leftArrow (1).svg"
import search from "./DesktopBrandFilterImage/searchIcon.svg"
import { useState,useContext } from 'react';
import { brandFiltercontext } from '../../../../App';
function DesktopBrandFilter() {
    const[open,setOpen] = useState(false)
      const {brand, setBrand} = useContext(brandFiltercontext)
      function handleClick(e){
        if(e.target.checked){
            setBrand((prev) => [...prev, e.target.value])
        }else{
            setBrand(prev=>prev.filter(item=>item !== e.target.value))
        }
        }
    return (
        <>
        <div className={`${style.filterBrand} ${open ? style.open : ""}`} onClick={()=>setOpen(!open)} >
            <div className={style.brandMain} >
                <h4>BRAND</h4>
                <img src={arrow} alt="downArrow" />
            </div>
            <div className={style.filterBrandSearch}>
                <div className={style.brandInput}>
                    <img src={search} alt="" />
                    <input type="text" placeholder='Search Brand'/>
                </div>
                <div className={style.boat} >
                    <input type="checkbox" id='boat' value="boat"  onChange={handleClick} />
                    <label htmlFor="boat">boAt</label>
                </div>
                <div className={style.boat} >
                    <input type="checkbox" id='oneplus' value="oneplus" onChange={handleClick} />
                    <label htmlFor="oneplus">OnePlus</label>
                </div>
                <div className={style.boat} >
                    <input type="checkbox" id='realme' value="realme"onChange={handleClick}    />
                    <label htmlFor="realme">realme</label>
                </div>
                <div className={style.boat} >
                    <input type="checkbox" id='noise' value="noise"  onChange={handleClick} />
                    <label htmlFor="noise">Noise</label>
                </div>
                <div className={style.boat}>
                    <input type="checkbox" id='jbl' value="jbl" onChange={handleClick}  />
                    <label htmlFor="jbl">JBL</label>
                </div>
                <div className={style.boat} >
                    <input type="checkbox" id='cmf' value="cmf" onChange={handleClick}  />
                    <label htmlFor="cmf">CMF by Nothing</label>
                </div>
                <div className={style.more}>
                  <p>415 More</p>  
                </div>
                
            </div>

        </div>
           
        </>
    );
}

export default DesktopBrandFilter;
import { React } from 'react';
import style from "./PriceFilter.module.css"
import { useState } from 'react';
function PriceFilter() {
     const [price,setPrice] = useState([])
    function handleClick(e){
        if(e.target.checked){
            setPrice((prev)=>[...prev,e.target.value])
        }else{
            setPrice(prev=>prev.filter(item=>item !== e.target.value))
        }
    }
    console.log(price)
    return (
        <>
        <div className={style.priceMain}>
            <div className={style.priceTags}>
                <input type="checkbox" id='price' value="600" onChange={handleClick} />
                <label htmlFor="price">Rs.600 and below</label>
            </div>
            <div className={style.priceTags}>
                <input type="checkbox"id='price' value="1000" onChange={handleClick} />
                <label htmlFor="price">Rs.601 to Rs.1000</label>
            </div>
            <div className={style.priceTags}>
                <input type="checkbox" id='price' value="1500" onChange={handleClick}  />
                <label htmlFor="price">Rs.1001 to Rs.1500</label>
            </div>
            <div className={style.priceTags}> 
                <input type="checkbox" id='price' value="2000" onChange={handleClick} />
                <label htmlFor="price">Rs.1501 to Rs.2000</label>
            </div>
            <div className={style.priceTags}>
                <input type="checkbox" id='price' value="2600" onChange={handleClick} />
                <label htmlFor="price">Rs.2001 to Rs.2600</label>
            </div>
            <div className={style.priceTags}>
                <input type="checkbox" id='price' value="4000" onChange={handleClick} />
                <label htmlFor="price">Rs.2601 to Rs.4000</label>
            </div>
            <div className={style.priceTags}>
                <input type="checkbox" id='price' value="7000" onChange={handleClick} />
                <label htmlFor="price">Rs.4001 to Rs.7000</label>
            </div>
            <div className={style.priceTags}>
                <input type="checkbox" id='price' value="10000"  onChange={handleClick}/>
                <label htmlFor="price">Rs.7001 to Rs.10000</label>
            </div>
            <div className={style.priceTags}>
                <input type="checkbox" id='price' value="10001" onChange={handleClick} />
                <label htmlFor="price">Rs.10001 and above</label>
            </div>

        </div>
            
        </>
    );
}

export default PriceFilter;
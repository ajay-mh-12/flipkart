import { React } from "react";
import style from "./DesktopPriceFilter.module.css";
import { useState } from "react";
function DesktopPriceFilter() {
    const [minprice,setMinPrice] = useState(0);
    const [maxprice,setMaxPrice] = useState(5000);

    function handleMinChange(e){
        const value =  Number(e.target.value);
        if(value <= maxprice){
          setMinPrice(value)
        }
    };

    function handleMaxchange(e){
      const value = Number(e.target.value);
        if(value >= minprice){
          setMaxPrice(value)
        }
      }
    
    
  return (
    <>
      <div className={style.DesktopPriceFilterMain}>
        <p>PRICE</p>
        <div className={style.priceSlider}>
            <div className={style.sliderTop}>
                <div className={style.sliderNdiv}></div>
                <div className={style.sliderTdiv}></div>
                <div className={style.sliderSdiv}></div>
                <div className={style.sliderMdiv}></div>
            </div>
          <div className={style.slider}></div>
          <input type="range" min={0} max={5000}  value={minprice} onChange={handleMinChange} />
          <input type="range" min={0} max={5000} value={maxprice}  onChange={handleMaxchange}/>
        </div>
        <div className={style.priceBox}>
          <div className={style.minPrice}>
            <select className={style.min}  onChange={handleMinChange}>
              <option value="0">Min</option>
              <option value="600">600</option>
              <option value="1000">1000</option>
              <option value="1500">1500</option>
              <option value="2000">2000</option>
            </select>
          </div>
          <div className={style.to}>
            <p>to</p>
          </div>
          <div className={style.maxPrice}>
            <select className={style.max} defaultValue="5000"  onChange={handleMaxchange} >
              <option value="600">600</option>
              <option value="1000">1000</option>
              <option value="1500">1500</option>
              <option value="2000">2000</option>
              <option value="2600">2600</option>
              <option value="4000">4000</option>
              <option value="5000">5000+</option>
            </select>
          </div>

        </div>
       
      </div>
     
    </>
  );
}

export default DesktopPriceFilter;

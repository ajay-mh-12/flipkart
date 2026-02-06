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
          <input type="range" min={0} max={5000} value={minprice} onChange={handleMinChange} />
          <input type="range" min={0} max={5000} value={maxprice}  onChange={handleMaxchange}/>
        </div>
       
      </div>
     
    </>
  );
}

export default DesktopPriceFilter;

import StyleBigSlider from "../SliderBig/SlideBig.module.css";
import Airoplain from "../../assets/SliderBigImage/BigScreenAiroplain.webp";
import Bed from "../../assets/SliderBigImage/BigScreenBed.webp";
import Chair from "../../assets/SliderBigImage/BigScreenChair.webp";
import Independent from "../../assets/SliderBigImage/BigScreenIndependent.png";
import TourPackege from "../../assets/SliderBigImage/BigScreenTourpackege.webp";
import ArrowRight from "../../assets/SliderBigImage/Arrow-right.svg";
import { useRef, useEffect, useState } from "react";
// import React from "react";

function SliderBig() {
  const SliderBigSlider = useRef();
  const imageRef = useRef();
  const [time, setTime] = useState(0);

  const SlideBigScreen = [
    {
      id: 1,
      image: Airoplain,
    },
    {
      id: 2,
      image: Bed,
    },
    {
      id: 3,
      image: Chair,
    },
    {
      id: 4,
      image: Independent,
    },
    {
      id: 5,
      image: TourPackege,
    },
  ];

  useEffect(() => {
    const interTime = setTimeout(() => {
      setTime((prevTime) =>
        prevTime === SlideBigScreen.length - 1 ? 0 : prevTime + 1,
      );
    }, 3000);

    return () => clearTimeout(interTime);
  }, [time]);

  useEffect(() => {
    SliderBigSlider.current.scrollTo({
      top: 0,
      left: time * imageRef.current.clientWidth,
      behavior: "smooth",
    });
  }, [time]);

  const goToPrevious = ()=> {
   setTime((times)=> times === 0 ? SlideBigScreen.length-1 : times - 1)
  };

  const goToNext = ()=> {
   setTime((times) => times === SlideBigScreen.length-1 ? 0 : times + 1 )
  }


  return (
    <>
      <div className={StyleBigSlider.sliderMain}>
        <div className={StyleBigSlider.SliderBigScreen} ref={SliderBigSlider}>
          {SlideBigScreen.map((pro) => {
            return <img key={pro.id} src={pro.image} ref={imageRef}></img>;
          })}
        </div>
        <div className={StyleBigSlider.ArrowRightBtn} onClick={goToNext}>
          <img src={ArrowRight} alt="" /> 
        </div>
        <div className={StyleBigSlider.ArrowLeftBtn} onClick={goToPrevious}>
          <img src={ArrowRight} alt="" />
        </div>
      </div>
      <div className={StyleBigSlider.SlideBarBig}>
        {SlideBigScreen.map((sldiv, index) => {
          return (
            <div
              key={sldiv.id}
              className={
                index === time
                  ? StyleBigSlider.SlideBigBarOpen
                  : StyleBigSlider.SlideBarBigClose
              }
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default SliderBig;

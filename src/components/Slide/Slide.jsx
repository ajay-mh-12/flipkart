import styles from "./Slide.module.css";
import FlipKartRepublic from "./SlideImage/FlipKartrepuplic.webp";
import GalaxyPhone from "./SlideImage/GalaxyOffer.webp";
import Headphones from "./SlideImage/Headphones.webp";
import Lap from "./SlideImage/imageFlipLap.webp";
import realmeImage from "./SlideImage/realmeImage.webp";
import samsungImage from "./SlideImage/samsungImage.png";
import Speaker from "./SlideImage/Speaker.webp";
import VivoPhone from "./SlideImage/VivoPhone.webp";
import { useEffect, useRef, useState } from "react";

function Slide() {
  const SlideBarRef = useRef();
  const imageRef = useRef();
  const [time, setTime] = useState(0);

  const slide = [
    {
      id: 1,
      image: FlipKartRepublic,
    },
    {
      id: 2,
      image: GalaxyPhone,
    },
    {
      id: 3,
      image: Headphones,
    },
    {
      id: 4,
      image: Lap,
    },
    {
      id: 5,
      image: realmeImage,
    },
    {
      id: 6,
      image: samsungImage,
    },
    {
      id: 7,
      image: Speaker,
    },
    {
      id: 8,
      image: VivoPhone,
    },
  ];

  // time in slideBar // 
  useEffect(() => {
    const timeInterval = setTimeout(() => {
      setTime((prevTime) => (prevTime === slide.length - 1 ? 0 : prevTime + 1));
    }, 3000);

    return () => clearTimeout(timeInterval);
  }, [time]);

  // Scroll in SlideBar // 
  useEffect(() => {
    SlideBarRef.current.scrollTo({
      top: 0,
      left: time * imageRef.current.clientWidth,
      behavior: "smooth",
    });
  }, [time]);

  return (
    <>
      <div className={styles.Slideimage} ref={SlideBarRef}>
        {slide.map((pro) => {
          return <img key={pro.id} src={pro.image} ref={imageRef}></img>;
        })}
      </div>
      <div className={styles.SlideBarMain}>
        {slide.map((slidiv,index) => {
          return (
            <div
              key={slidiv.id}
              className={ index === time ? styles.SlideBarOpen : styles.SlideBarClose }
            ></div>
          );
        })}
      </div>
      
    </>
  );
}

export default Slide;

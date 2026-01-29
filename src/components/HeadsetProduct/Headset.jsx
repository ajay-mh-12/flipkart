import { React } from "react";
import style from "./HeadsetPro.module.css";
import Arrow from "./HeadsetHeaderImages/arrowDown.svg";
import SearchIcon from "./HeadsetHeaderImages/search (1).svg";
import ShopingIcon from "./HeadsetHeaderImages/shoping.svg";
import Image from "./HeadsetHeaderImages/svgexport-3.svg";
import TwoLineIcon from "./HeadsetHeaderImages/TwoLine.svg";
import FlipkartIcon from "./HeadsetHeaderImages/filipImage.png";
import Persentage from "./HeadsetHeaderImages/persentage.webp";
import Modpersentage from "./HeadsetHeaderImages/Modpersentage.webp";
import Calculation from "./HeadsetHeaderImages/Calculation.webp";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { sortOpenContext } from "../../App";

function Headset() {
//   const [open, setOpen] = useState(false);

const {open, setOpen} = useContext(sortOpenContext)

  function handleOpen() {
    setOpen(!open);
  }
//   console.log(open);
  const navigate = useNavigate();
  return (
    <>
    
      <div className={style.HeadsetHeaderMain}>
        <div className={style.HeadsetHeader}>
          <div className={style.HeadsetHeaderOne}>
            <div onClick={() => navigate("/")}>
              <img src={Image} alt="" />
            </div>
            <div>
              <img src={FlipkartIcon} alt="" />
            </div>
            <p>True Wireless</p>
          </div>
          <div className={style.HeadsetHeaderTwo}>
            <div>
              <img src={SearchIcon} alt="" />
            </div>
            <div>
              <img src={ShopingIcon} alt="" />
            </div>
            <div>
              <p>Login</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.HeadsetTwo}>
        <div className={style.HeadsetSort} onClick={handleOpen}>
          <img src={Arrow} alt="" />
          <h4>Sort</h4>
        </div>
        <div className={style.BorderHeadset}></div>
        <div className={style.HeadsetFilter} onClick={()=>navigate("/Filter")}>
          <img src={TwoLineIcon} alt="" />
          <h4>Filter</h4>
        </div>
      </div>
      <div className={style.HeadsetHeaderDetails}>
        <div>
          <img src={Persentage} alt="" />
          <p>Top Sale Discounts</p>
        </div>
        <div>
          <img src={Modpersentage} alt="" />
          <p>50% or more</p>
        </div>
        <div>
          <img src={Calculation} alt="" />
          <p>Fast Charging</p>
        </div>
      </div>
    </>
  );
}

export default Headset;

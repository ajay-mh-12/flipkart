import React from "react";
import Style from "./Desktop.module.css"
import Headset from "./DesktopImage/Headset.webp"
import Mobile from "./DesktopImage/mobile.webp"
import Speaker from "./DesktopImage/Speaker.webp"
import Tv from "./DesktopImage/Tv.webp"
import WashingMachin from "./DesktopImage/washingmachin.webp"
import Waterfilter from "./DesktopImage/WaterFilter.webp"
import { useNavigate } from "react-router-dom";
function DesktopCard(){
    const DesktopImage = [
        {
            id:1,
            image:Headset
        },
        {
            id:2,
            image:Mobile
        },
        {
            id:3,
            image:Speaker
        },
        {
            id:4,
            image:Tv
        },
        {
            id:5,
            image:WashingMachin
        },
        {
            id:6,
            image:Waterfilter
        }
    ]

    const navigate = useNavigate();

    return(
        <>
        <div className={Style.DesktopCard} onClick={()=>navigate("/productList")}>
        {DesktopImage.map((pro)=>{
            return <img key={pro.id} src={pro.image} alt="" />
        })}
        </div>
        </>
    )
}
export default DesktopCard
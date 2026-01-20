import { React } from 'react';
import StyleBigMenu from "./MenuBarBig.module.css"
import AirolainImage from "./MenuBarBigImage/Airoplain.webp"
import ChristmasTree from "./MenuBarBigImage/ChristmasTree.webp"
import Fashion from "./MenuBarBigImage/FashionPhoto.webp"
import Furniture from "./MenuBarBigImage/Furniture.webp"
import ImageScoty from "./MenuBarBigImage/imageScoty.webp"
import Lapphoto from "./MenuBarBigImage/Lapphoto.webp"
import mobilePhoto from "./MenuBarBigImage/mobilPhoto.webp"
import Pokimon from "./MenuBarBigImage/Pokimon.webp"
import SoapPowder from "./MenuBarBigImage/SoapPowder.webp"
import washingMachine from "./MenuBarBigImage/washingMachine.webp"


function MenuBarBig() {
   const MenuBarBig = [
    {
        id:1,
        image:AirolainImage,
        name:'Flight Bookings'
    },
    {
        id:2,
        image:ChristmasTree,
        name:'Home & Kitchen'
    },
    {
        id:3,
        image:Fashion,
        name:'Fashion'
    },
    {
        id:4,
        image:Furniture,
        name:'Furniture'
    },
    {
        id:5,
        image:ImageScoty,
        name:'Minutes'
    },
    {
        id:6,
        image:Lapphoto,
        name:'Electronics'
    },
    {
        id:7,
        image:mobilePhoto,
        name:'Mobile'
    },
    {
        id:8,
        image:Pokimon,
        name:'Beauty & toys'
    },
    {
        id:9,
        image:SoapPowder,
        name:'Grocery'
    },
    {
        id:10,
        image:washingMachine,
        name:'TVs & Appliances'
    }
   ]

    return (
        <>
        <div className={ StyleBigMenu.MenuBarBigScreen}>
            {MenuBarBig.map((pro)=>{
                return <div key={pro.id} className={StyleBigMenu.MenuBigScreenElements}><img key={pro.id} src={pro.image} alt="" /><h4>{pro.name}</h4></div>
            })}
        </div>
            
        </>
    );
}

export default MenuBarBig;
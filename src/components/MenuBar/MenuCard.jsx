import { React } from 'react';
import StyleMenu from "./Menu.module.css"
import MenuImage1 from "./MenuBarImages/image1.png"
import MenuImage2 from "./MenuBarImages/image2.png"
import MenuImage3 from "./MenuBarImages/image3.webp"
import MenuImage4 from "./MenuBarImages/image4.png"
import MenuImage5 from "./MenuBarImages/image5.png"
import MenuImage6 from "./MenuBarImages/image6.webp"
import MenuImage7 from "./MenuBarImages/image7.webp"
import MenuImage8 from "./MenuBarImages/image8.webp"
import MenuImage9 from "./MenuBarImages/image9.webp"
import MenuImage10 from "./MenuBarImages/image10.webp"
import MenuImage11 from "./MenuBarImages/image11.webp"
import MenuImage12 from "./MenuBarImages/image13.webp"
import MenuImage13 from "./MenuBarImages/image14.webp"
import MenuImage14 from "./MenuBarImages/image15.webp"
import { useNavigate } from 'react-router-dom';

function MenuCard() {

    const MenuCard = [
        [
            {
                id:1, 
                name:'Home',
                image:MenuImage10,
            },
            {
                id:2,
                name:'Fashion',
                image:MenuImage1
            },
            {
                id:3,
                name:'Travel',
                image:MenuImage2
            },
            {
                id:3,
                name:'Appliances',
                image:MenuImage3
            },
            {
                id:4,
                name:'Beauty',
                image:MenuImage4
            },
            {
                id:5,
                name:'Furniture',
                image:MenuImage5
            },
            {
                id:6,
                name:'Sports',
                image:MenuImage6
            },
            {
                id:7,
                name:'Drips for her',
                image:MenuImage7
            },
            {
                id:8,
                name:'Electronics',
                image:MenuImage8
            }
        ],
        [
            {
                id:1,
                name:'Mobiles',
                image:MenuImage9
            },
            {
                id:2,
                name:'Food,Health',
                image:MenuImage11
            },
            {
                id:3,
                name:'Auto Acc..',
                image:MenuImage12
            },
            {
                id:4,
                name:'Toys,Baby..',
                image:MenuImage13
            },
            {
                id:5,
                name:'self Phone',
                image:MenuImage14
            },
            {
                id:6,
                name:'SuperCoin',
                image:MenuImage10
            },
            {
                id:7,
                name:'Fashion',
                image:MenuImage1
            },
            {
                id:8,
                name:'Travel',
                image:MenuImage2
            }
        ]
    ]
 const navigate=useNavigate()
    return (
        <>
            <div className={StyleMenu.menuBarMain}>
            <div className={StyleMenu.menuBarOne}  onClick={()=>navigate("/productList")}>
                {MenuCard[0].map((pro, index)=>{
                    return <div key={index} className={StyleMenu.menuBarContentOne}><img key={pro.id} src={pro.image} alt="" /> <h4>{pro.name}</h4></div>
                })}
            </div>
            
            <div className={StyleMenu.menuBarTwo}>
                {MenuCard[1].map((pro, index)=>{
                    return <div key={index} className={StyleMenu.menuBarContentTwo}><img key={pro.id} src={pro.image} alt="" /><h4>{pro.name}</h4> </div>
                })}
            </div>
            </div>
        </>
    );
    
}

export default MenuCard;
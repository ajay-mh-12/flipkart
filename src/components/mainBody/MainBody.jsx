import Slide from '../Slide/Slide';
import MainStyle from "./Main.module.css"
import SliderBig from '../SliderBig/SliderBig';
import { React } from 'react';
import MenuCard from '../MenuBar/MenuCard';
import MenuBarBig from '../MenuBarBig/MenuBarBig';
import Discount from '../DiscountProduct/DiscountProduct';
import DiscountProductSub from '../DiscountProductsub/DiscountProductSub';
import DesktopCard from '../DestopScreen/DesktopCard';
import FlipFooter from '../FlipFooter/FlipFooter';

function MainBody() {
    return (
        <>
        <div className={MainStyle.MainBody}>
          <Slide/> 
          <MenuBarBig/>
          <SliderBig/>
          <MenuCard />
          <Discount/>
          <DiscountProductSub/>
          <DesktopCard/>
          <DesktopCard/>
          <FlipFooter/>
            
        </div>
                  
        </>
    );
}

export default MainBody;
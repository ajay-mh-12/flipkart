import React from "react";
import DesktopFilterHeadermain from "./DesktopFilterHeadermain/DesktopFilterHeadermain";
import style from "./DesktopFilterMain.module.css"
import DesktopBody from "./DesktopBody/DesktopBody";
function DesktopFilterMain(){
    return(
        <>
        <div className={style.desktopMainFilter} >
        <DesktopFilterHeadermain/>
        <DesktopBody/>
    

        </div>

        </>
    )
}
export default DesktopFilterMain
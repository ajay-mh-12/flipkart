
import DesktopFilterHeadermain from "./DesktopFilterHeadermain/DesktopFilterHeadermain";
import style from "./DesktopFilterMain.module.css";
import DesktopFilterMainComponent from "./DesktopFilterMainComponent/DesktopFilterMainComponent";

function DesktopFilterMain() {

  return (
    <>
      <div className={style.desktopMainFilter}>
        <DesktopFilterHeadermain />
        <div className={style.desktopFilterBody}>
          <DesktopFilterMainComponent/>
         
        </div>
      </div>
    </>
  );
}
export default DesktopFilterMain;

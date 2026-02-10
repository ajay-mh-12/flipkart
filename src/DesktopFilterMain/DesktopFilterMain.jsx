
import DesktopFilterHeadermain from "./DesktopFilterHeadermain/DesktopFilterHeadermain";
import style from "./DesktopFilterMain.module.css";
import DesktopFilterMainComponent from "./DesktopFilterMainComponent/DesktopFilterMainComponent";
import DesktopFooter from "./DesktopFooter/DesktopFooter";

function DesktopFilterMain() {

  return (
    <>
      <div className={style.desktopMainFilter}>
        <DesktopFilterHeadermain />
        <div className={style.desktopFilterBody}>
          <DesktopFilterMainComponent/>
          <DesktopFooter/>
        </div>
      </div>
    </>
  );
}
export default DesktopFilterMain;

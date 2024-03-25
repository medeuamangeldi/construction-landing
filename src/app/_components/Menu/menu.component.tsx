import { NavMobile } from "../NavMobile/navmobile.component";
import styles from "./menu.module.scss";
import Image from "next/image";
const Menu = () => {
  return (
    <div className={styles["menu-nav-container"]}>
      <div className={styles["menu-nav-container-logo"]}>
        <Image
          src={`/logo/logo_black.png`}
          alt="logo"
          width="170"
          height="170"
          style={{ color: "black" }}
        />
      </div>
      <div className={styles["menu-nav-container-right"]}>
        <NavMobile />
      </div>
    </div>
  );
};

export default Menu;

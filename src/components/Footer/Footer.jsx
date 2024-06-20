import style from "./Footer.module.css";
import logo from "../../assets/images/logo.png";

import icon1 from "../../assets/images/icon-facebook.svg";
import icon2 from "../../assets/images/icon-instagram.svg";
import icon3 from "../../assets/images/icon-pinterest.svg";
import icon4 from "../../assets/images/icon-twitter.svg";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.mainFotter}>
        <img src={logo} alt="logo" className={style.logo} />

        <div className={style.listArea}>
          <ul className={style.iconList}>
            <img src={icon1} alt="icon1" />
            <img src={icon2} alt="icon2" />
            <img src={icon3} alt="icon3" />
            <img src={icon4} alt="icon4" />
          </ul>

          <ul className={style.listNormal}>
            <li>Resources</li>
            <li>About</li>
            <li>Developers</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <p className={style.copyright}>
        ©{" "}
        <a href="https://github.com/aresheus" target="_blank">
          aresheus
        </a>
        , Inc. All rights reserved.
      </p>
    </footer>
  );
}

import React from "react";
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.copyright}>LEGENDARY FIGHT LEGUE 2023 © ВСЕ ПРАВА ЗАЩИЩЕНЫ</div>
      <div className={style.main_block}>
        <div className={style.menu}>
          <ul className={style.menu_list}>
            <li>
              <div className={style.menu_item}>НОВОСТИ</div>
            </li>
            <li>
              <div className={style.menu_item}>ТУРНИРЫ</div>
            </li>
            <li>
              <div className={style.menu_item}>БОЙЦЫ</div>
            </li>
            <li>
              <div className={style.menu_item}>ГАЛЕРЕЯ</div>
            </li>
            <li>
              <div className={style.menu_item}>КОНТАКТЫ</div>
            </li>
            <li>
              <div className={style.menu_item}>О НАС</div>
            </li>
          </ul>
        </div>
      </div>
        <div className={style.contact}>8(938)024-02-22</div>
    </div>
  );
};

export default Footer;

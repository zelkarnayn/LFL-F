import React from 'react';
import styles from './Header.module.css'
import logo from '../images/lfl_logo.png'

const Header = () => {
    return (
        <div className={styles.header_menu}>
            <div className={styles.logo}>
                <img src={logo} alt="LFL" className={styles.logo_img} />
            </div>
            <div className={styles.menu}>
                <ul className={styles.menu_list}>
                    <li>
                        <div className={styles.menu_item}>НОВОСТИ</div>
                    </li>
                    <li>
                        <div className={styles.menu_item}>ТУРНИРЫ</div>
                    </li>
                    <li>
                        <div className={styles.menu_item}>БОЙЦЫ</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
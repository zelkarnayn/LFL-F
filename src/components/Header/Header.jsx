import React from 'react';
import styles from './Header.module.css'
import logo from '../../images/lfl_logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.header_menu}>
            <div className={styles.logo}>
                <NavLink to={'/'}><img src={logo} alt="LFL" className={styles.logo_img} /></NavLink>
            </div>
            <div className={styles.menu}>
                <ul className={styles.menu_list}>
                    <li>
                        <NavLink to={'/news'} className={styles.menu_item}>НОВОСТИ</NavLink>
                    </li>
                    <li>
                        <div className={styles.menu_item}>ТУРНИРЫ</div>
                    </li>
                    <li>
                        <div className={styles.menu_item}>БОЙЦЫ</div>
                    </li>
                    <li>
                        <div className={styles.menu_item}>ГАЛЕРЕЯ</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
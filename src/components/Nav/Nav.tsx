import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Nav.module.css';
import containerStyle from '../common/styles/container.module.css';


export const Nav = () => {
    return (
        <nav className={s.navBlock}>
            <ul className={`${s.linkBlock} ${containerStyle.container}`}>
                <li><NavLink to="/">Все котики</NavLink></li>
                <li><NavLink to="favorite">Любимые котики</NavLink></li>
            </ul>
        </nav>
    );
};


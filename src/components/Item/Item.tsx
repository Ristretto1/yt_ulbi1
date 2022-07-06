import React from 'react';
import s from '../Gallery/Gallery.module.css';
import {ReactComponent as Heart} from '../common/icon/heart.svg';

export const Item = () => {
    return (
        <div className={s.itemBlock}>
            <button className={s.heart}>
                <Heart className={s.heartImg} alt="add to favorite"/>
            </button>
        </div>
    );
};


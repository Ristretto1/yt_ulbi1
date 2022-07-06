import React from 'react';
import s from './Gallery.module.css';
import containerStyle from '../common/styles/container.module.css';
import {Item} from '../Item/Item';

export const Gallery = () => {
    return (
        <div className={s.gallery}>
            <div className={containerStyle.container}>
                <Item/>
            </div>
        </div>
    );
};
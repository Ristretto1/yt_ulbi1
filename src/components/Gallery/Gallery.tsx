import React, {useEffect} from 'react';
import s from './Gallery.module.css';
import containerStyle from '../common/styles/container.module.css';
import {Item} from '../Item/Item';
import {useDispatch, useSelector} from 'react-redux';
import {GetItemsTC, isLikeAC} from '../../store/reducers/galleryReducer';
import {AppStateType} from '../../store/store';
import {ImgAppType} from '../types/apiTypes';

export const Gallery = () => {
    const items = useSelector<AppStateType, Array<ImgAppType>>(store => store.gallery)
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(GetItemsTC())
    }, [])

    return (
        <div className={s.gallery}>
            <div className={containerStyle.container}>
                <div className={s.imagesWrapper}>
                    {items.map(item => {

                        const imgStyleForMapping = {
                            backgroundImage: `url(${item.url})`,
                            backgroundSize: 'cover'
                        }

                        const onLikeHandler = (islike: boolean) => {
                            dispatch(isLikeAC(item.id, islike))
                        }

                        return (
                            <Item
                                key={item.id}
                                callback={onLikeHandler}
                                style={imgStyleForMapping}
                                isLike={item.isLike}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
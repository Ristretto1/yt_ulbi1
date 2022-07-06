import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import {ImgAppType} from '../types/apiTypes';
import {GetItemsTC, isLikeAC} from '../../store/reducers/galleryReducer';
import {Item} from '../Item/Item';

export const Favorite = () => {
    const items = useSelector<AppStateType, Array<ImgAppType>>(store => store.gallery)
    const dispatch = useDispatch();

    const filteredItems = items.filter(item => item.isLike)

    useEffect(() => {
        // @ts-ignore
        dispatch(GetItemsTC())
    }, [])

    return (
        <>
            {filteredItems.map(item => {
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
        </>

    );
};

import React, {useEffect} from 'react';
import {Gallery} from './components/Gallery/Gallery';
import {Nav} from './components/Nav/Nav';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import s from './components/Gallery/Gallery.module.css';
import containerStyle from './components/common/styles/container.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './store/store';
import {ImgAppType} from './components/types/apiTypes';
import {GetItemsTC} from './store/reducers/galleryReducer';


export const App = () => {
    const dispatch = useDispatch();
    const items = useSelector<AppStateType, Array<ImgAppType>>(store => store.gallery)
    const filteredItems = items.filter(item => item.isLike)

    useEffect(() => {
        if(items.length === 0) {
            // @ts-ignore
            dispatch(GetItemsTC())
        }
    }, [])

    return (
        <BrowserRouter>
            <Nav/>
            <div className={s.gallery}>
                <div className={containerStyle.container}>
                    <div className={s.imagesWrapper}>
                        <Routes>
                            <Route path="/" element={<Gallery items={items}/>}/>
                            <Route path="favorite" element={<Gallery items={filteredItems}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};


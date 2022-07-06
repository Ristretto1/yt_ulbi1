import React from 'react';
import {Favorite} from './components/Favorite/Favorite';
import {Gallery} from './components/Gallery/Gallery';
import {Nav} from './components/Nav/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export const App = () => {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Gallery/>}/>
                <Route path="favorite" element={<Favorite/>}/>
            </Routes>
        </BrowserRouter>
    );
};


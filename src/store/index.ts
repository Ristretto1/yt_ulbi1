import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from './redusers/userReducer';

const rootReducer = {
    user: userReducer
}

export const store = createStore(rootReducer, applyMiddleware(thunk))
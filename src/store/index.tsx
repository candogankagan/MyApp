import {combineReducers, createStore} from 'redux';
import {userListReducer} from './list/reducer';

export const rootReducer = combineReducers({
    list: userListReducer,
});

export const store = createStore(rootReducer);

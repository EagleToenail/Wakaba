import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user';
import choreReducer from './features/chore';
import modalReducer from './features/modal';
import pageReducer from './features/page';
import roomReducer from './features/room';

const store = configureStore({ 
    reducer: {
        user:userReducer,
        chore:choreReducer,
        modal:modalReducer,
        page:pageReducer,
        room:roomReducer
    } 
});
export default store;

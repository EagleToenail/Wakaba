import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user';
import choreReducer from './features/chore';
import modalReducer from './features/modal';
import pageReducer from './features/page';
import roomReducer from './features/room';

import dataReducer from './sales/reducer';

const store = configureStore({ 
    reducer: {
        user:userReducer,
        chore:choreReducer,
        modal:modalReducer,
        page:pageReducer,
        room:roomReducer,
        data:dataReducer
    } 
});
export default store;

import {configureStore} from '@reduxjs/toolkit';
import { DataReducer } from './reducer';

const store = configureStore({
    reducer:{
       Data : DataReducer,
    }
})

export default store;
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducers/counterReducer';


const appStore = configureStore({
    reducer: counterReducer,
  })


export default appStore;

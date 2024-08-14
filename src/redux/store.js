import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './reducers/currencyReducer';


const appStore = configureStore({
    reducer: currencyReducer,
  })


export default appStore;

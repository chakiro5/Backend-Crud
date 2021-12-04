import { configureStore } from '@reduxjs/toolkit'
import productoReducer from './slices/productos';

const reducer = {
  productos: productoReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;

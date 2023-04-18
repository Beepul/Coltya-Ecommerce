import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import productSlice from "./reducers/productSlice";
import heartSlice from "./reducers/heartSlice";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";
// import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  cart: cartSlice,
  product: productSlice,
  heart: heartSlice
})
// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer );

// export const store = configureStore({
//     reducer: {
//       root: persistedReducer
//     }
//   })

//   export const persistor = persistStore(store);

export default configureStore({
  reducer: {
    root: rootReducer
  }
})


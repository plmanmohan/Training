import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";


const persistConfig = {
    key: 'root',
    storage
}

const pReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: pReducer,
});

export const persistor = persistStore(store);
export default store;
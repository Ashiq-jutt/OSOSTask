import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import cartReducer from './features/Cart';

const reducers = combineReducers({
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [''],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);
export {persistor, store};

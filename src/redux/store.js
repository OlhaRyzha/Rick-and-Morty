import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { charactersReducer } from './charactersSlice';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'dataСharacterKey',
  storage,
  whitelist: ['name', 'value'],
};

const rootReducer = combineReducers({
  charactersData: persistReducer(persistConfig, charactersReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

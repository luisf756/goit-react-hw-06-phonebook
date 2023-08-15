import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from './contacts/contacts-reducer';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
];

const itemsPersistConfig = {
    key: 'items',
    storage,
    blacklist: ['filter'],
}

const store = configureStore({
    reducer: {
        contacts: persistReducer(itemsPersistConfig, contactsReducer),
    },
    middleware,
})

const persistor = persistStore(store);
// eslint-disable-next-line
export default {store, persistor};
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import QuestionSlice from "./QuestionReducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
const rootReducer = combineReducers({
    question: QuestionSlice
})
const persistConfig = {
    key: "root",
    version: 1,
    storage,
}
const persistedReducers = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducers,
    enhancers: [],
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})
const persistor = persistStore(store)
export default store;
export { persistor }
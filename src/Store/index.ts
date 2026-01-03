import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import theme from "@Store/theme/themeSlice";
import weather from "@Store/data/dataSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const rootConfig = {
  key: "root",
  storage,
  whitelist: ["theme"],
};
const rootreducer = combineReducers({
  theme,
  weather,
});
const persistedReducer = persistReducer(rootConfig, rootreducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);
export { store, persistor, theme };
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

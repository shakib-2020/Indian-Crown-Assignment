import { mealsApi } from "@/api/mealsApi";
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slice/searchSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
      [mealsApi.reducerPath]: mealsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(mealsApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

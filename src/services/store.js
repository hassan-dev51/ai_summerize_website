import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./articles";

const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  //middileware is called before to begin with the state of
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});

export default store;

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import handsReducer from "./handsSlice";
export const store = configureStore({
  reducer: {
    hands: handsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

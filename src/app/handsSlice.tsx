import { createSlice } from "@reduxjs/toolkit";

type handsState = {
  hands: Array<unknown>;
};

const initialState: handsState = {
  hands: [],
};

const handsSlice = createSlice({
  name: "hands",
  initialState,
  reducers: {
    setHands: (state: handsState, action: { payload: Array<unknown> }) => {
      console.log(action.payload);
      state.hands = action.payload;
    },
  },
});

export const { setHands } = handsSlice.actions;
export default handsSlice.reducer;

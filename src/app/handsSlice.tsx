import { createSlice } from "@reduxjs/toolkit";

type handsState = {
  hands: Array<unknown>;
  handsGenerator: AsyncGenerator<any, void, unknown> | null;
};

const initialState: handsState = {
  hands: [],
  handsGenerator: null,
};

const handsSlice = createSlice({
  name: "hands",
  initialState,
  reducers: {
    setHands: (state: handsState, action: { payload: Array<unknown> }) => {
      state.hands = action.payload;
    },
    setHandsGenerator: (
      state: handsState,
      action: { payload: AsyncGenerator<any, void, unknown> }
    ) => {
      state.handsGenerator = action.payload;
    },
  },
});

export const { setHands, setHandsGenerator } = handsSlice.actions;
export default handsSlice.reducer;

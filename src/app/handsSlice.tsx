import { createSlice } from "@reduxjs/toolkit";

type Hand = {
  handedness: "Left" | "Right";
  keypoints: Array<{
    x: number;
    y: number;
  }>;
  keypoints3D: Array<{
    x: number;
    y: number;
    z: number;
  }>;
  score: number;
};
type handsState = {
  hands: Array<Hand>;
};

const initialState: handsState = {
  hands: [],
};

const handsSlice = createSlice({
  name: "hands",
  initialState,
  reducers: {
    setHands: (state: handsState, action: { payload: Array<Hand> }) => {
      if (action.payload) {
        state.hands = action.payload;
      }
    },
  },
});

export const { setHands } = handsSlice.actions;
export default handsSlice.reducer;

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
  xPosition: number;
  yPosition: number;
  zPosition: number;
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
        const newHands = action.payload.map((hand: Hand) => {
          const distanceCentralPoints = Math.sqrt(
            (hand.keypoints[9].x - hand.keypoints[0].x) ** 2 +
              (hand.keypoints[9].y - hand.keypoints[0].y) ** 2 +
              (hand.keypoints3D[9].z - hand.keypoints3D[0].z) ** 2
          );

          const zPosition = -(distanceCentralPoints * 0.05);
          const xPosition = -(hand.keypoints[9].x * 0.025) + 8;
          const yPosition = -(hand.keypoints[9].y * 0.025) + 4;

          return {
            ...hand,
            zPosition,
            xPosition,
            yPosition,
          };
        });
        state.hands = newHands;
      }
    },
  },
});

export const { setHands } = handsSlice.actions;
export default handsSlice.reducer;

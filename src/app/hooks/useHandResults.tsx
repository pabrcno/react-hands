import handsResult from "../model";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

type Hand = {
  handedness: "Left" | "Right";
  keypoints: Array<{ x: number; y: number }>;
  keypoints3D: Array<{ x: number; y: number; z: number }>;
  score: number;
  xPosition: number;
  yPosition: number;
  zPosition: number;
};

const useHandResults = (webcamRef: unknown) => {
  const [hands, setHands] = useState<Hand[]>([]);

  const updateHands = async () => {
    const newHandsResults = await handsResult(webcamRef);

    if (newHandsResults) {
      const newHands = newHandsResults.map((hand: Hand) => {
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
      setHands(newHands);
    }
  };

  useFrame(() => {
    updateHands();
  });

  // Return the stateful value.
  return hands;
};

export default useHandResults;

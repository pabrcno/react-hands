import { Hand } from "@tensorflow-models/hand-pose-detection/dist/types";

export const mapHandPointsToBones = (handPoints: Hand, skeleton: any) => {
  const { keypoints3D } = handPoints;

  const mappedBones = keypoints3D?.map((keypoint, pos) => {
    const { x, y, z } = keypoint;

    return { ...skeleton.bones[pos], position: { x, y, z } };
  });

  return { ...skeleton, bones: mappedBones };
};

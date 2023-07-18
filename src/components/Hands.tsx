import { useRef } from "react";
import useHandResults from "../app/hooks/useHandResults";
import { Dot } from "./Dot";

import { Html } from "@react-three/drei";
import Webcam from "react-webcam";

export const Hands = () => {
  const webcamRef = useRef(null);
  const hands = useHandResults(webcamRef);

  return (
    <group>
      <Html>
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            width: "200vw",
            height: "200vh",
            zIndex: -1,
            visibility: "hidden",
          }}
        />
      </Html>
      {hands.map((hand) => {
        return (
          <group position={[hand.xPosition, hand.yPosition, hand.zPosition]}>
            {hand.keypoints3D.map((point) => (
              <Dot
                key={`${point.x}-${point.y}-${point.z}-${hand.handedness}`}
                position={{
                  x: point.x,
                  y: point.y,
                  z: point.z,
                }}
                handedness={hand.handedness}
              />
            ))}
          </group>
        );
      })}
    </group>
  );
};

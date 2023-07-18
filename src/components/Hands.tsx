import { useRef } from "react";
import useHandResults from "../app/hooks/useHandResults";

import { Center, Html } from "@react-three/drei";
import Webcam from "react-webcam";
import { RightHand } from "./RightHand";
import { LeftHand } from "./LeftHand";

export const Hands = () => {
  const webcamRef = useRef(null);
  const hands = useHandResults(webcamRef);

  return (
    <group>
      <Center
        matrixWorldAutoUpdate={undefined}
        getObjectsByProperty={undefined}
      >
        <Html position={[-9, 5, 0]}>
          <Webcam
            mirrored
            ref={webcamRef}
            style={{
              width: "100vw",
              height: "100vh",
              zIndex: -1,
              visibility: "hidden",
            }}
          />
        </Html>
      </Center>
      {hands[0] && (
        <RightHand key={`hand-${hands[0].handedness}`} position={[0, 0, -10]} />
      )}
    </group>
  );
};

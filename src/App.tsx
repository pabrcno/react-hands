import { Suspense, useRef } from "react";
import "./App.css";
import { useAppSelector } from "./app/hooks";
import { RootState } from "./app/store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";

import Webcam from "react-webcam";

import "./App.css";

import useHandResults from "./app/hooks/useHandResults";
import { Dot } from "./components/Dot/Dot";
import { WelcomeText } from "./components/WelcomeText/WelcomeText";

import Hand from "./Scene";

function App() {
  const webcamRef = useRef(null);

  const hands = useAppSelector((state: RootState) => state.hands);
  const hand = hands.hands[0];
  useHandResults(webcamRef);
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <div className="mainContainer">
        <Canvas>
          <ambientLight intensity={0.5} />
          <OrbitControls />
          <Stars
            radius={25}
            depth={10}
            count={250}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          {hand?.handedness === "Left" && (
            <group
              position={[hand.xPosition, hand.yPosition, hand.zPosition]}
              rotation={[0, 0, 0]}
            >
              <Suspense fallback={null}>
                <Hand hand={hand} />
              </Suspense>
            </group>
          )}
        </Canvas>
      </div>
    </div>
  );
}

export default App;

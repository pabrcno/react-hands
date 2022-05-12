import { useRef } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { RootState } from "./app/store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Webcam from "react-webcam";

import "./App.css";

import useHandResults from "./app/hooks/useHandResults";
import { Dot } from "./components/Dot/Dot";

function App() {
  const webcamRef = useRef(null);
  const hands = useAppSelector((state: RootState) => state.hands);
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
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <OrbitControls />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          <group>
            {hands.hands.map((hand) =>
              hand.keypoints3D.map((point) => (
                <Dot
                  key={`${point.x}-${point.y}-${point.z}-${hand.handedness}`}
                  position={{
                    x: point.x,
                    y: point.y,
                    z: point.z,
                  }}
                  handedness={hand.handedness}
                />
              ))
            )}
          </group>
        </Canvas>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./App.css";

import { Hands } from "./components/Hands";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <Canvas
          style={{
            background: "radial-gradient(#000, #303030)",
          }}
        >
          <ambientLight intensity={0.5} />

          <Hands />
        </Canvas>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";

import "./App.css";

import { Hands } from "./components/Hands";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <Canvas>
          <ambientLight intensity={0.5} />
          <Stats />

          <Hands />
        </Canvas>
      </div>
    </div>
  );
}

export default App;

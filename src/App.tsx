import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";

import "./App.css";

import { Hands } from "./components/Hands";
import { useState } from "react";

function App() {
  const [showButton, setShowButton] = useState(true);

  const handleStart = () => {
    console.log("Start button clicked!");
    setShowButton(false);
    // Add any logic you want to handle when the button is clicked
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <Canvas>
          <ambientLight intensity={0.5} />
          <Stats />

          <Hands />
        </Canvas>
        {showButton && (
          <button className="startButton" onClick={handleStart}>
            Start
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

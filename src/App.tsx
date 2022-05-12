import { useRef } from "react";
import Webcam from "react-webcam";

import "./App.css";

import useHandResults from "./app/hooks/useHandResults";

function App() {
  const webcamRef = useRef(null);
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
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            visibility: "hidden",
          }}
        />
      </header>
    </div>
  );
}

export default App;

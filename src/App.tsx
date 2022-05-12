import { useEffect, useRef } from "react";
import Webcam from "react-webcam";

import "./App.css";
import model from "./app/model";

function App() {
  const webcamRef = useRef(null);
  useEffect(() => {
    model(webcamRef);
  }, []);

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
          }}
        />
      </header>
    </div>
  );
}

export default App;

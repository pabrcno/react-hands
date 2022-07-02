import "@tensorflow/tfjs-backend-webgl";
import * as params from "./params";
import * as tfjsWasm from "@tensorflow/tfjs-backend-wasm";

import * as handdetection from "@tensorflow-models/hand-pose-detection";
import { STATE } from "./params";
import { setBackendAndEnvFlags } from "./util";

tfjsWasm.setWasmPaths(
  `https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@${tfjsWasm.version_wasm}/dist/`
);

let detector;

async function createDetector() {
  const model = handdetection.SupportedModels.MediaPipeHands;
  const runtime = "tfjs";
  return handdetection.createDetector(model, {
    runtime,
    modelType: STATE.modelConfig.type,
    maxHands: 2,
  });
}

async function handsResult(webcamRef) {
  if (
    typeof webcamRef.current !== "undefined" &&
    webcamRef.current !== null &&
    webcamRef.current.video.readyState === 4
  ) {
    // Get Video Properties
    const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set video width
    webcamRef.current.video.width = videoWidth;
    webcamRef.current.video.height = videoHeight;
    let hands = null;

    // Detector can be null if initialization failed (for example when loading
    // from a URL that does not exist).
    if (detector != null) {
      // FPS only counts the time it takes to finish estimateHands.

      // Detectors can throw errors, for example when using custom URLs that
      // contain a model that doesn't provide the expected output.
      try {
        hands = await detector.estimateHands(video, {
          flipHorizontal: false,
        });
      } catch (error) {
        detector.dispose();
        detector = null;
        alert(error);
      }
      return hands;
    }
  }
}

async function model() {
  // Gui content will change depending on which model is in the query string.

  params.STATE.model = handdetection.SupportedModels.MediaPipeHands;
  const backends = params.MODEL_BACKEND_MAP[params.STATE.model];
  params.STATE.backend = backends[0];

  await setBackendAndEnvFlags(STATE.flags, STATE.backend);

  detector = await createDetector();
}
model();
export default handsResult;

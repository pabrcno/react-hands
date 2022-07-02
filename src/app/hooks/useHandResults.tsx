import { useEffect } from "react";
import { setHands } from "../handsSlice";
import handsResult from "../model";
import { useAppDispatch } from "./../hooks";

const useHandResults = (webcamRef: unknown) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    requestAnimationFrame(async () => {
      dispatch(setHands(await handsResult(webcamRef)));
      useHandResults();
    });
   
  }, [dispatch, webcamRef]);
};
export default useHandResults;

import { useCallback, useEffect } from "react";
import { setHands } from "../handsSlice";
import handsResult from "../model";
import { useAppDispatch } from "./../hooks";

const useHandResults = (webcamRef: unknown) => {
  const dispatch = useAppDispatch();

  const handResultsAnimation = useCallback(async () => {
    requestAnimationFrame(async () => {
      dispatch(setHands(await handsResult(webcamRef)));
      handResultsAnimation();
    });
  }, [dispatch, webcamRef]);

  useEffect(() => {
    handResultsAnimation();
  }, [handResultsAnimation]);
};
export default useHandResults;

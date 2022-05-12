import { useEffect } from "react";
import { setHands } from "../handsSlice";
import handsResult from "../model";
import { useAppDispatch } from "./../hooks";

const useHandResults = (webcamRef: unknown) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setInterval(async () => {
      dispatch(setHands(await handsResult(webcamRef)));
    }, 10);
  }, [dispatch, webcamRef]);
};
export default useHandResults;

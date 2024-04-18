import { useRef, useState } from "react";

const useGetState:<T>(initVal: T)=>any = (initVal: any) => {
    const [state, setState] = useState(initVal);
    const ref = useRef(initVal);
    const setStateCopy = (newVal: any) => {
      ref.current = newVal;
      setState(newVal);
    }
    const getState = () => ref.current;
    return [state, setStateCopy, getState];
  }

  export default useGetState;

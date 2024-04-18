
import { useEffect } from 'react';

const useMounted = (fn: () => void) => {
  useEffect(() => {
    fn();
  }, []);
};

export default useMounted;

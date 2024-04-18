import { useEffect, useRef } from "react";
import { isEqual } from "lodash";

const useDeepCompareEffect = (
  callback: any,
  dependencies: any[],
  compare?: ((arg0: never[], arg1: any) => any) | undefined
) => {
  // 默认的对比函数采用lodash.isEqual, 支持自定义
  if (!compare) compare = isEqual;
  const memoizedDependencies = useRef([]) as any;
  if (!compare(memoizedDependencies.current, dependencies)) {
    memoizedDependencies.current = dependencies;
  }
  useEffect(callback, memoizedDependencies.current);
};

export default useDeepCompareEffect;

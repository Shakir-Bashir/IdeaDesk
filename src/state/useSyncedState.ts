import { useEffect, useRef } from "react";
import { useImmer, type ImmerHook } from "use-immer";

export const useSyncedState = <TState>(
  initialState: TState,
  syncCallBack: (state: TState) => void
): ImmerHook<TState> => {
  const [state, setState] = useImmer(initialState);
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      syncCallBack(state);
    }
    didMountRef.current = true;
  }, [state, setState]);

  return [state, setState];
};

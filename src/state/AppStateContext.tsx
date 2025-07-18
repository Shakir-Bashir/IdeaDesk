import { createContext, useContext } from "react";

import { usePageState } from "./usePageState";
import { type Page } from "../utils/types";
import { withInitialState } from "./withInitialState";

type AppStateContextType = ReturnType<typeof usePageState>;

const AppStateContext = createContext<AppStateContextType>(
  {} as AppStateContextType
);

type AppStateProvidedProps = {
  children: React.ReactNode;
  initialState: Page;
};

export const AppStateProvidedr = withInitialState<AppStateProvidedProps>(
  ({ children, initialState }: AppStateProvidedProps) => {
    const pageStateHandlers = usePageState(initialState);

    return (
      <AppStateContext.Provider value={pageStateHandlers}>
        {children}
      </AppStateContext.Provider>
    );
  }
);

export const useAppState = () => useContext(AppStateContext);

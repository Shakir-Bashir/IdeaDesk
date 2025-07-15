import { Page } from "./Page/Page";
import { AppStateProvidedr } from "./state/AppStateContext";
import { createPage } from "./utils/createPage";

const initialState = createPage();

function App() {
  return (
    <AppStateProvidedr initialState={initialState}>
      <Page />;
    </AppStateProvidedr>
  );
}

export default App;

import { Page } from "./Page/Page";
import { AppStateProvidedr } from "./state/AppStateContext";
import { createPage } from "./utils/createPage";
import { Route, Routes } from "react-router-dom";

const initialState = createPage();

const Auth = () => <div>Auth</div>;

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />

      <Route
        path="/:id"
        element={
          <AppStateProvidedr initialState={initialState}>
            <Page />;
          </AppStateProvidedr>
        }
      />

      <Route
        path="/"
        element={
          <AppStateProvidedr initialState={initialState}>
            <Page />;
          </AppStateProvidedr>
        }
      />
    </Routes>
  );
}

export default App;

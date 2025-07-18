import { Page } from "./Page/Page";
import { AppStateProvidedr } from "./state/AppStateContext";
// import { createPage } from "./utils/createPage";
import { Route, Routes } from "react-router-dom";
import { Auth } from "./auth/auth";
import { Private } from "./auth/private";

// const initialState = createPage();

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />

      <Route
        path="/:id"
        element={
          <Private
            component={
              <AppStateProvidedr>
                <Page />;
              </AppStateProvidedr>
            }
          />
        }
      />

      <Route
        path="/"
        element={
          <Private
            component={
              <AppStateProvidedr>
                <Page />;
              </AppStateProvidedr>
            }
          />
        }
      />
    </Routes>
  );
}

export default App;

import { Global, ThemeProvider } from "@emotion/react";
import variables from "./styles/Variables";
import GlobalStyles from "./styles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./components/Error/Error";

function App() {
  return (
    <ThemeProvider theme={variables}>
      <Global styles={GlobalStyles} />
      <ErrorBoundary FallbackComponent={Error}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;

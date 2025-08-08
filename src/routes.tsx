import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Error from "./components/Error/Error";
import Home from "./pages/Home/Home";
import Trifly from "./pages/ProjectPage/Trifly";
import Toucheese from "./pages/ProjectPage/Toucheese";
import Wish from "./pages/ProjectPage/Wish";
import Portfolio from "./pages/ProjectPage/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "project",
        children: [
          {
            path: "trifly",
            element: <Trifly />,
          },
          {
            path: "toucheese",
            element: <Toucheese />,
          },
          {
            path: "wish",
            element: <Wish />,
          },
          {
            path: "portfolio",
            element: <Portfolio />,
          },
        ],
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../components/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: <App />,
  },
]);

export default router;

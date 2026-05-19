import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { router } from "./router";
import "./styles/styles.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <>
    <RouterProvider router={router} />
    <TanStackRouterDevtools router={router} />
  </>
);
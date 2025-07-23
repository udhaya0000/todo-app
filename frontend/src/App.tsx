import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "./App.css";

const container = document.getElementById("root");
const root = createRoot(container!);
const router = createRouter({ routeTree });

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => root.unmount());
}

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
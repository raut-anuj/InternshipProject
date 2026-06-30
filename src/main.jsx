import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // <-- Ye line add karo
import App from "./App";
import "./index.css";

import { QueryClient, QueryClientProvider } from "./utils/reactQuery";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);
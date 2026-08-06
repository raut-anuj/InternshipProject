import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import "./index.css";

import { QueryClient, QueryClientProvider } from "./Archive/utils/reactQuery";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);
// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";
import { store } from "./store/store.ts";

/**
 * Redux provider works on the principal of react context. 
 */
createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

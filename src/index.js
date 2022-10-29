import { createRoot } from "react-dom/client";
import App from "@/app.jsx";
import { store } from "@/store/store.js";
import { Provider } from "react-redux";
import React from "react";

const root = createRoot(document.querySelector("#app"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

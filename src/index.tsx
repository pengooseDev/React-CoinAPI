import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "theme";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        {/* ThemeProvider은 반드시 ThemeObject를 prop으로 전달받아야한다. */}
        <ThemeProvider theme={mainTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

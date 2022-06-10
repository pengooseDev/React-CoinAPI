import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "theme";
import { QueryClientProvider, QueryClient } from "react-query";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            {/* ThemeProvider은 반드시 ThemeObject를 prop으로 전달받아야한다. */}
            <ThemeProvider theme={mainTheme}>
                <App />
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                {/* ThemeProvider은 반드시 ThemeObject를 prop으로 전달받아야한다. */}
                <App />
            </QueryClientProvider>
        </RecoilRoot>
    </React.StrictMode>
);

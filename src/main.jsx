import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import * as bootstrap from "bootstrap";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider} from "react-i18next"
import i18next from "i18next";
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import global_pt from "./translations/pt/global.json"
import global_ja from "./translations/ja/global.json"

i18next.init({
    interpolation: {escapeValue: false},
    lng: "en",
    resources: {
        es: {
            global: global_es,
        },
        en: {
            global: global_en,
        },
        pt: {
            global: global_pt,
        },
        ja: {
            global: global_ja,
        }
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <I18nextProvider i18n={i18next}>
                <App />
            </I18nextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

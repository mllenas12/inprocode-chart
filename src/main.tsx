import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./app/store.tsx";
import { Provider } from "react-redux";
import { Suspense } from "react";
import "./i18n.ts";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <Suspense>
        <App />
      </Suspense>
    </I18nextProvider>
  </Provider>
);

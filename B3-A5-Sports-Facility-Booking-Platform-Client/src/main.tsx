import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { Toaster } from "sonner";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { HelmetProvider } from "react-helmet-async";
import FacilityProvider from "./providers/FacilityProvider";
import BookingProvider from "./providers/BookingProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <FacilityProvider>
            <BookingProvider>
              <RouterProvider router={router}></RouterProvider>
            </BookingProvider>
          </FacilityProvider>
        </PersistGate>
      </Provider>
      <Toaster></Toaster>
    </HelmetProvider>
  </React.StrictMode>
);

import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import DailiesReducer from "./reducers/DailiesReducer";

const store = configureStore({
  reducer: DailiesReducer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

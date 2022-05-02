import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import DailiesReducer from "./reducers/DailiesReducer";
import LoginReducer from "./reducers/LoginReducer";

const store = configureStore({
  reducer: { dailies: DailiesReducer, login: LoginReducer }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import LoginPage from "./components/login/LoginPage";
import Header from "./components/header/Header"
import Dailies from "./components/dailies/Dailies";
import DailiesReducer from "./reducers/DailiesReducer";
import LoginReducer from "./reducers/LoginReducer";

const store = configureStore({
  reducer: { dailies: DailiesReducer, login: LoginReducer }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dailies" element={<Dailies />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

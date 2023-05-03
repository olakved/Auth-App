import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWrapper from "./utils/webWrapper";
import Homepage from "./pages/homepage";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import ErrorPage from "./pages/error";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWrapper>
              <Homepage />
            </LayoutWrapper>
          }
        />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

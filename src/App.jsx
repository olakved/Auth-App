import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWrapper from "./utils/webWrapper";
import Homepage from "./pages/homepage";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import ErrorPage from "./pages/error";
import ProfilePage from "./pages/profile";
import AppLayout from "./pages/layout";
import DashHeader from "./components/dashHeader";
import CoinPage from "./pages/coins";
import CoinDetails from "./components/common/coin";

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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage />} />

        {/* App Routes */}
        <Route path="profile" element={<AppLayout />}>
          <Route index element={<ProfilePage />} />
          <Route path="coins" element={<CoinPage />} />
        </Route>

        {/* single coin route */}
        <Route path="coins/:id" element={<CoinDetails />} />
      </Routes>
    </>
  );
}

export default App;

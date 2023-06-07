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
import { PrivateRoute } from "./utils/hooks/privateRoute";
import DashboardPage from "./pages/dashboard";
import ContactPage from "./pages/contactUs";
import BlogPage from "./pages/blog";
import NewsSect from "./pages/homepage/news";
import BlogDetails from "./pages/blogDetails";
import FaqPage from "./pages/faq";
import UsersPage from "./components/drinks";
import DrinksPage from "./components/drinks";

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
        <Route
          path="/contact"
          element={
            <LayoutWrapper>
              <ContactPage />
            </LayoutWrapper>
          }
        />
        <Route
          path="/blog"
          element={
            <LayoutWrapper>
              <BlogPage />
            </LayoutWrapper>
          }
        />
        <Route
          path="/drinkspage"
          element={
            <LayoutWrapper>
              <DrinksPage />
            </LayoutWrapper>
          }
        />
        <Route
          path="/faq"
          element={
            <LayoutWrapper>
              <FaqPage />
            </LayoutWrapper>
          }
        />
        {/* Single News route */}
        <Route
          path="/blog/:id"
          element={
            <LayoutWrapper>
              <BlogDetails />
            </LayoutWrapper>
          }
        />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        <Route path="*" element={<ErrorPage />} />

        {/* App Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="coins" element={<CoinPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>

        {/* single  route */}
        <Route path="coins/:id" element={<CoinDetails />} />
      </Routes>
    </>
  );
}

export default App;

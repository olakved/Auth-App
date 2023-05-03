import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

function LayoutWrapper({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LayoutWrapper;

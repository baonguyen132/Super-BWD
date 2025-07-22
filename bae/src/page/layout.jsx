import React from "react";
import { Helmet } from "react-helmet"; // để set <title> và meta

function Layout({ title, children }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        {/* Google Icon Font */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://cdn.boxicons.com/fonts/basic/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.boxicons.com/fonts/brands/boxicons-brands.min.css"
          rel="stylesheet"
        />
      </Helmet>
      {/* Nội dung chính của trang */}
      {children}
    </>
  );
}

export default Layout;

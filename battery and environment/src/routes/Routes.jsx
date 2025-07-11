import React from "react";
import { Routes, Route } from "react-router-dom";
// Import các page/component
import HomePage from "../page/Home/Home";
// import NotFound from "../pages/NotFound"; // 404 page nếu có

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;
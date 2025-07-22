import React from "react";

import Layout from "../layout";
import Footer from "../../include/footer/footer";
import Header from "./header/header";
import BatteryMain from "./battery_main/battery_main";
function Home() {
  
  return (
    <Layout title="Trang chủ | BAE">
      <Header />
      <BatteryMain />
      <Footer />
    </Layout>
  );
}

export default Home;

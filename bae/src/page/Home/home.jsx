import React from "react";

import Layout from "../layout";
import Footer from "../../include/footer/footer";
import Header from "./header/header";
import Introduce from "./introduce/introduce";
import BatteryMain from "./battery_main/battery_main";
import Develop from "./develop/develop";
function Home() {
  
  return (
    <Layout title="Trang chủ | BAE">
      <Header />
      <Introduce />
      <BatteryMain />
      <Develop />
      <Footer />
    </Layout>
  );
}

export default Home;

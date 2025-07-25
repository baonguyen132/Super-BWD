import React, { useContext } from "react";

import Layout from "../layout";
import Footer from "../../include/footer/footer";
import Header from "./header/header";
import Introduce from "./introduce/introduce";
import BatteryMain from "./battery_main/battery_main";
import Develop from "./develop/develop";
import { UserContext } from "../../context/UserContext";
function Home() {

  const {user, dispatch} = useContext(UserContext);
  
  return (
    <Layout title="Trang chủ | BAE">
      <Header user={user} />
      <Introduce />
      <BatteryMain />
      <Develop />
      <Footer />
    </Layout>
  );
}

export default Home;

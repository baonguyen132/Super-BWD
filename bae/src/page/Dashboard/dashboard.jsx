import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "./dashboard.module.scss"
import NavigationCustome from "../../layout/navigation/Navigation.jsx"
import { Outlet } from "react-router-dom";

function Dashboard() {
  const { user, dispatch } = useContext(UserContext);

  return (
    <div className={styles.dashboard_page}>
      <div className={styles.navigation}>
        <NavigationCustome />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;

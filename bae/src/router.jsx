import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./page/SignUp/signup";
import LoginPage from "./page/Login/login";
import Home from "./page/Home/home";
import UserProvider from "./context/UserContext";
import Dashboard from "./page/Dashboard/dashboard";
import DashboardHome from "./page/Dashboard/screen/DasboardHome/DashboardHome";
import HistoryList from "./page/Dashboard/screen/DashboardHistory/HistoryList";
import DashboardCart from "./page/Dashboard/screen/DashboardCart/DashboardCart";
import DashboardVoucher from "./page/Dashboard/screen/DashboardVoucher";
import DashboardMyVoucher from "./page/Dashboard/screen/DashboardMyVoucher";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Home />
    ),
  },
  {
    path: "/dashboard",
    element: (
        <Dashboard />
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "voucher",
        element: <DashboardVoucher />,
      },
      {
        path: "history",
        element: <HistoryList />,
      },
      {
        path: "cart",
        element: <DashboardCart />, // Assuming you want to use the same component for cart
      },
      {
        path: "my-voucher",
        element: <DashboardMyVoucher />,
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: (
      <center>
        <h1>404</h1>
        <br />
        <h1>Không tồn tại trang này</h1>
      </center>
    ),
  },
]);

function RouterCustome() {
  return RouterProvider({
    router: router,
  });
}

export default RouterCustome;

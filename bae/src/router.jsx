import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./page/SignUp/signup";
import LoginPage from "./page/Login/login";
import Home from "./page/Home/home";
import UserProvider from "./context/UserContext";
import Dashboard from "./page/Dashboard/dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <Home />
      </UserProvider>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <UserProvider>
        <Dashboard />
      </UserProvider>
    ),
    children: [
      {
        path: "page1",
        element: <h1>ss</h1>,
      },
      {
        path: "page2",
        element: <h1>sssz</h1>
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

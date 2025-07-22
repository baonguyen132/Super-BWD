import {RouterProvider, createBrowserRouter} from "react-router-dom"
import SignUp from "./page/SignUp/signup"
import LoginPage from "./page/Login/login"
import Home from "./page/Home/home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <LoginPage />,
        
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "*",
        element: <center><h1>404</h1><br /><h1>Không tồn tại trang này</h1></center>
    }
])

function RouterCustome() {
    return (
        <RouterProvider router={router} />
    )    
}

export default RouterCustome
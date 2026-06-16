import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Root/Home/Home";
import ErrorPage from "../Components/Root/ErrorPage/ErrorPage";
import Login from "../Components/Root/Login/Login";
import FormLogin from "../Components/Root/FormLogin/FormLogin";
import RegisterForm from "../Components/Root/RegisterForm/RegisterForm";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/formLogin',
                element: <FormLogin/>
            },
            {
                path: '/registerForm',
                element: <RegisterForm/>
            },
            {
                path:'glogin',
                element: <Login/>
            }
        ]
    }
])

export default Router;
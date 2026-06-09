import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Root/Home/Home";
import ErrorPage from "../Components/Root/ErrorPage/ErrorPage";
import Login from "../Components/Root/Login/Login";

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
                path:'login',
                element: <Login/>
            }
        ]
    }
])

export default Router;
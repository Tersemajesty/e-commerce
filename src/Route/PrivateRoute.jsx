import { Outlet } from "react-router";
import Login from "../Pages/Login";

const PrivateRoute = () => {
    const user = JSON.parse(localStorage.getItem("userData"));
    return user?.token ? <Outlet /> : <Login />;
}

export default PrivateRoute

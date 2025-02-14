import {Outlet} from "react-router";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";

const HomeRoute = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default HomeRoute
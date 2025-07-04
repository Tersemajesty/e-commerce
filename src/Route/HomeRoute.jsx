import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Loader from "../component/Loader/Loader";

const HomeRoute = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
        setLoading(true); // Show loader when route changes
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulated delay
        
        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default HomeRoute;

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./component/Home/Home";
import Explore from "./Pages/Explore";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Admin from "./Pages/Admin"
import NotFound from "./Pages/NotFound";
import Account from "./Pages/Account";
import HomeRoute from "./Route/HomeRoute";
import PrivateRoute from "./Route/PrivateRoute"
import { useEffect, useState } from "react";
import Loader from "./component/Loader/Loader";
import ProductDetailPage from "./Pages/ProductDetailpage";




const router = createBrowserRouter([
  
    {
    path: "/",
    element: <HomeRoute />,
    children: [
      { path:"/", element: <Home/> },
      { path: "explore", element: <Explore /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
      { path: "account", element: <Account /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      {
        element: <PrivateRoute/>,
        children:[
          {path: "/admin",
            element:<Admin/>
          }
        ]
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
  
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return isLoading ? <Loader /> : <RouterProvider router={router}/>};


export default App;

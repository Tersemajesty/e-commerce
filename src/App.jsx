import "./App.css"
import Body from "./component/Body/Body"
import HomeRoute from "./Route/HomeRoute";
import Home from "./Pages/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ProductPage from "./Pages/ProductPage"
import Shop from "./Pages/Shop"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Cart from "./Pages/Cart"
import User from "./Pages/User"
import WishList from "./Pages/WishList"
import PrivateRoute from "./Route/PrivateRoute";
import Dashboard from "./Pages/Dashboard";

const App = () => {
 const router = createBrowserRouter([
    {
     path: "",
     element: <HomeRoute />,

       children: [
          
          {
            path: "/productpage",
            element:<ProductPage/>
          },

          {
            path: "/Home",
            element:<Home/>
          },

          {
            path: "/shop",
            element:<Shop/>
          }, {
            path: "/user",
            element:<User/>
          },

          {
            path:"/wishlist",
            element: <WishList />
          },

          {
            path:"/Cart",
            element: <Cart />
          }
       ]
    },

    {
        path: "/login",
        element: <Login />
    },

    {
      path: "/body",
      element: <Body />
    },

    {
        path: "/signup",
        element: <Signup />
    },
    {
      path:"/private",
      element: <PrivateRoute/>,
      children:[
        {
          path: './Dashboard',
          element: <Dashboard/>
        }
      ]
    }
 ])
    
    return (
       <RouterProvider router={router}/>
    )
}

export default App
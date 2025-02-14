import style from "./Header.module.css"
import { GiFlowerTwirl } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div className={style.Head}>
      <div className={style.inner}>
      <div className={style.logo}>
      <GiFlowerTwirl size={55}/>
      <header>Terse <span>Majesty</span></header> 
  </div>
    <div className={style.home}>
        <NavLink to={"/Home"}>
        <h2>Home</h2>
        </NavLink>
        <NavLink to={"/Shop"}>
        <h2>Shop</h2>
        </NavLink>
        <NavLink to={"/ProductPage"}>
        <h2>ProductPage</h2>
        </NavLink>
        <NavLink to={"/WishList"}>
        <h2>WishList</h2>
        </NavLink>
   </div>
    <div className={style.user}>
         <FaRegUser size={25}  />
         <NavLink to={"/user"}>
         <h1>user</h1>
         </NavLink>
         <AiOutlineShoppingCart size={25} />
         <NavLink to={"/cart"}>
         <h1>Cart</h1>
         </NavLink>
         <NavLink to={"/Login"}>
         <h1>Login</h1>
         </NavLink>
         </div>
      </div>
    
    </div>
  )
}
export default Header

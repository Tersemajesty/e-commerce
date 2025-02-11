import style from "./Header.module.css"
import { GiFlowerTwirl } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";





 const Header = () => {
  return (
    <div className={style.Head}>
      <div className={style.logo}>
      <GiFlowerTwirl size={55}/>
          <header>Terse <span>Majesty</span></header>
      </div>
      <div className={style.hit}>
      <div className={style.wrap}>
      <IoIosSearch />
         <input type="text"
         placeholder="search products" />
      </div>
      <button>Search</button>
      </div>
      <div className={style.wrapper}>
         <div className={style.user}>
         <FaRegUser size={30}  />
         <h1>user</h1>
         <AiOutlineShoppingCart size={30} />
         <h1>Cart</h1>
         <FiMenu size={32}/>
         </div>
      </div>
    </div>
  )
}
export default Header
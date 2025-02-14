import style from './Pages.module.css'
import { NavLink } from "react-router-dom";


 const Signup = () => {
    return (
        <div className={style.signup}>
            <div className={style.signupContainer}>
               <div className={style.signuphead}>
                 <strong>Signup</strong>
                 <h1>Create your account to get full access</h1>
               </div>
               <div className={style.signupform}>
                  <h1>Full Name</h1>
                  <input type="text" 
                  placeholder='Enter full name'/>
               </div>
               <div className={style.signupform1}>
               <h1>Email address</h1>
                  <input type="text" 
                  placeholder='Email address'/>
               </div>
               <div className={style.signupform2}>
               <h1>Create Password</h1>
                  <input type="text" 
                  placeholder='Enter Password'/>
               </div>
               <div className={style.signupform3}>
               <h1>Confirm Password</h1>
                  <input type="text" 
                  placeholder='Confirm Password'/>
               </div>
               <div className={style.signupform4}>
                         <NavLink to={"/Login"}>
                         <h1>Already have an account <strong>Login here</strong></h1>

                         </NavLink>
                         <button>Sign-up</button>

               </div>
            </div>
        </div>
    )
}
export default Signup
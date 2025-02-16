import style from './Pages.module.css';
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState("james2@gmail.com");
    const [password, setPassword] = useState("Password1$");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const url = "https://movie-app-ch5.onrender.com/api/user/log-in";

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            return toast.error("Enter credentials");
        }
        try {
            const response = await axios.post(url, { email, password });
            console.log(response);
            if (response?.status === 200) {
                localStorage.setItem("userData", JSON.stringify(response?.data?.data));
            }

            toast.success(response?.data?.message);
            navigate("/");
        } catch (err) {
            console.log(err);
            alert("Invalid credentials")
        }
    };

    return ( 
        <div className={style.login}>
            <ToastContainer />
            <div className={style.loginContainers}>
                <div className={style.loginimage}>
                    <img src="public/Byredo's.jpeg" alt="Login" />
                </div>
                <div className={style.loginform}>
                    <div className={style.Login}>
                        <strong>Login</strong>
                        <div className={style.input}>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Enter email" 
                            /> 
                        </div>
                        <div className={style.type}>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Enter password" 
                                 
                            /> 
                            <span 
            onClick={() => setShowPassword(!showPassword)} 
            className={style.eyeIcon}
        >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
                            
                        </div>
                        <div className={style.types}>
                            <button onClick={handleLogin}>Login</button>
                            <NavLink to="/signup">
                                <h1>Dont have an account? <strong>Signup</strong></h1>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

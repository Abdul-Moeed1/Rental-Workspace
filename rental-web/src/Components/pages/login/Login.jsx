import weblogo from "../../../assets/weblogo.png"
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export const Login = () => {

    return (
        <div className="login-page-container w-full h-screen flex bg-blue-950 px-2">
        
        <div className="login-page m-auto border-2 rounded-lg bg-white px-12 py-8 w-[400px]  ">
            <div className="login-page-header   ">

            <div className="login-page-logo m-auto h-auto w-[180px] mb-1">
                <img src={weblogo} alt=""  className="h-[100%] w-[100%]" />
            </div>
            
            <h1 className="login-page-title font-bold mt-0 text-center text-blue-950 text-2xl">Login into your Rental Workspace account</h1>
            </div>
            <form action="" method="post" className="login-form mt-8">
                <label htmlFor="email" className="font-semibold">Email</label>
                <div className="login-form-input flex gap-3 border-b py-2 mb-3">
                   <FaRegUser className="font-light mt-1"/>
                   <input type="email" name="email" id="email" placeholder="Enter your email" required className="focus:outline-none w-full"/>
                </div>

                <label htmlFor="password" className="font-semibold">Password</label>
                <div className="login-form-input flex gap-3 border-b py-2 mb-3">
                <MdLockOutline className="font-light text-[19px] mt-1"/>
                <input type="password" name="password" id="password" placeholder="Enter your password" required className="focus:outline-none w-full"/>
                </div>

                <div className="text-right font-medium">
                    <a href="/forgot-password" className="text-blue-950 hover:text-black"> Forgot Password?
                    </a>
                 </div>

                <button type="submit" className="login-form-submit text-[18px] font-bold bg-blue-950 text-white w-full py-2 mt-5 border rounded-3xl cursor-pointer">Login</button>
            </form>
            <div className="login-page-foote text-center mt-2">Don't have an account? <a href="/signup" className="text-blue-950 font-semibold hover:text-black">Signup</a></div>
        </div>
            
        </div>
    )
}
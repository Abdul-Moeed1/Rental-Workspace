import weblogo from "../../../assets/weblogo.png"
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { HiOutlineIdentification } from 'react-icons/hi';


export const SignUp = () => {

    return (
        <div className="signup-page-container w-full h-screen flex bg-blue-950 px-2">
        
        <div className="signup-page m-auto  rounded-lg bg-white px-12 py-6 w-[400px]  ">
            <div className="signup-page-header   ">

            <div className="signup-page-logo m-auto h-auto w-[180px] mb-1">
                <img src={weblogo} alt=""  className="h-[100%] w-[100%]" />
            </div>
            
            <h1 className="signup-page-title font-bold  text-center text-blue-950 text-2xl">Create your Rental Workspace account</h1>
            </div>
            <form action="" method="post" className="signup-form mt-6">
                <label htmlFor="name" className="font-semibold">Name</label>
                <div className="signup-form-input flex gap-3 border-b py-2 mb-3">
                <HiOutlineIdentification className="font-light text-[19px] mt-1" />
                <input type="text" name="name" id="name" placeholder="Enter your name" required className="focus:outline-none w-full"/>
                </div>
                <label htmlFor="email" className="font-semibold">Email</label>
                <div className="signup-form-input flex gap-3 border-b py-2 mb-3">
                   <FaRegUser className="font-light mt-1"/>
                   <input type="email" name="email" id="email" placeholder="Enter your email" required className="focus:outline-none w-full"/>
                </div>

                <label htmlFor="password" className="font-semibold">Password</label>
                <div className="signup-form-input flex gap-3 border-b py-2 mb-3">
                <MdLockOutline className="font-light text-[19px] mt-1"/>
                <input type="password" name="password" id="password" placeholder="Enter your password" required className="focus:outline-none w-full"/>
                </div>

                <button type="submit" className="signup-form-submit text-[18px] font-bold bg-blue-950 text-white w-full py-2 mt-5 border rounded-3xl cursor-pointer">SignUp</button>
            </form>
            <div className="signup-page-foote text-center mt-2">Already have an account? <a href="/login" className="text-blue-950 font-semibold hover:text-black">Login</a></div>
        </div>
            
        </div>
    )
}
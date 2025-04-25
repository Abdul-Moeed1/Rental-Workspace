import { ImGit, ImGithub, ImGoogle, ImLinkedin2, ImLocation2, ImMenu, ImPhone, ImPinterest2, ImTwitch, ImWhatsapp } from "react-icons/im";
import { LuFacebook, LuGitlab, LuInstagram, LuMenu, LuTwitter } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";
// import useScrollBehaviour from "./ScrollBehaviour";
export const SocialLinks = () => {
// const showSocial = useScrollBehaviour();
    return (
        <div className={`social-tab p-1 flex gap-1  justify-between flex-wrap transform transition-transform duration-300
           max-[875px]:flex-col`}>

            <div className="left-social-tab flex gap-3">
               <a href="" className="flex gap-0.5 text-[14px]"><ImLocation2  className="mt-0.5"/> Abc, Washington Lahore Pakistan</a>
               <a href="" className="flex gap-0.5 text-[14px]"><ImPhone  className="mt-0.5"/> +92 3055997241</a>
               <a href="" className="flex gap-0.5 text-[14px]"><ImGoogle className="mt-0.5"/> support@gmail.com</a>
            </div>
            <div className="flex  right-social-tab">

             <div className="social-icons flex gap-2">
                <a href="" className="hover:text-blue-800"><LuFacebook /></a>
                <a href="" className="hover:text-red-800"><ImGit/></a>
                <a href="" className="hover:text-pink-800"><LuGitlab/></a>
                <a href="" className="hover:text-purple-800"><LuMessageCircle /></a>
                <a href="" className="hover:text-blue-800"><LuTwitter/></a>
                <a href="" className="hover:text-amber-800"><ImTwitch/></a>
                <a href="" className="hover:text-red-800"><ImPinterest2/></a>
                <a href="" className="hover:text-green-800"><ImWhatsapp/></a>
                <a href="" className="hover:text-blue-800"><ImLinkedin2/></a>
                <a href="" className="hover:text-yellow-800"><ImGoogle /></a>
                <a href="" className="hover:text-orange-800"><ImGithub/></a>
                <a href="" className="hover:text-pink-800"><LuInstagram/></a>
             </div>

            
            </div>
        </div>
    )       
}
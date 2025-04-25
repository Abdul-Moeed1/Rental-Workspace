import { SocialLinks } from "./Social";
import  weblogo  from "../../assets/weblogo.png";
import { Navbar } from "./Navbar";
import AnimatedSearch from "./SearchInput";
import useScrollBehaviour from "../hook/ScrollBehaviour";
export const Header = () => {
    const showSocial = useScrollBehaviour();

    return (
    <div className={`header z-50 fixed w-[100%] bg-white border-b-2 transform transition-height duration-300 border-amber-950 h-[8.7rem] max-[907px]:h-[10rem] max-[735px]:h-[7rem] max-[535px]:h-24
        ${showSocial ?  "" : "min-[735px]:h-[6.6rem]" }
    `}>

        <div className="w-[88%] transform  transition-translate duration-300 m-auto max-[875px]:w-[95%]">

        <div className={`
             max-[735px]:hidden ${showSocial ? "translate-y-0" :"min-[735px]:translate-y-[-3rem]"}
            `}>
            <SocialLinks/>
        </div>
        <div className={` flex justify-between items-center transition-all duration-300 mt-2 max-[545px]:w-max 
            ${showSocial ? "" :"min-[907px]:translate-y-[-2rem] min-[735px]:translate-y-[-3rem]"}
            `}>
            <div className="logo w-36 h-auto max-[875px]:w-30">
                <img src={weblogo} alt="" className="h-[100%] w-[100%]"/>
            </div>
            <div>
                <Navbar/>
            </div>
        </div>
        <div className={`max-[535px]:translate-y-[-3rem] transition-all duration-300
                        ${showSocial ? "translate-y-0" :"min-[907px]:translate-y-[-2rem] min-[735px]:translate-y-[-3rem]"}
            `}>
                <AnimatedSearch/>
        </div>
        </div>
    </div>
    )
}
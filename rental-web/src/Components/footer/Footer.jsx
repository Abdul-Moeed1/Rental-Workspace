import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import  weblogo  from "../../assets/weblogo.png";
import { FaCcAmex, FaCcDinersClub, FaCcDiscover, FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa, FaSquarePhone } from "react-icons/fa6"
export const Footer = () => {

    return (
        <>
            <section className="footer py-6 border-t-2 border-blue-950 flex flex-wrap justify-around max-[585px]:flex-col max-[585px]:items-center max-[585px]:gap-2.5 max-[585px]:px-2 max-[545px]:pb-20 ">
               <div className="left-side flex flex-col gap-2 w-[25%] max-[585px]:w-[100%] max-[585px]:items-center">
                    <div className="footer-logo w-28 h-auto max-[585px]:w-24">
                     <img src={weblogo} alt="" />
                    </div>
                  <div className="footer-description text-[13px] max-[585]:text-center">Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Debitis nisi ab aspernatur culpa ipsum. Eligendi recusandae at quo delectus lorem pixel bna.
                  </div>
                </div>
    
               <div className="middle-card-side flex flex-col gap-2 w-[20%] max-[585px]:w-[100%] max-[585px]:items-center">
                <h1 className="font-bold text-blue-950">We Accept</h1>
                <div className="cards text-2xl flex flex-wrap gap-2">
                    <FaCcVisa  className="fa-cards"/>
                    <FaCcPaypal className="fa-cards"/>
                    <FaCcMastercard className="fa-cards"/>
                    <FaCcDiscover  className="fa-cards"/>
                    <FaCcJcb  className="fa-cards"/>
                    <FaCcStripe  className="fa-cards"/>
                    <FaCcAmex  className="fa-cards"/>
                    <FaCcAmex  className="fa-cards"/>
                    <FaCcDinersClub  className="fa-cards"/>
                </div>
               </div>
               <div className="middle-location-side flex flex-col gap-2 w-[22%] max-[725px]:w-[26%] max-[585px]:w-[100%] max-[585px]:items-center">
                 <h1 className="font-bold text-blue-950 ">Location</h1>
                 <div className="location-details text-[13px] max-[585px]:flex max-[585px]:gap-2 max-[585px]:flex-wrap max-[585px]:justify-center">
                     <div className="location-details-items flex gap-0.5 items-center max-[845px]:items-start">
                        <FaLocationDot className="location-side-icon"/>
                        <div> 123 Main Street, City, Country</div>
                     </div>
                    <div className="location-details-items flex gap-0.5 items-center">            
                        <FaSquarePhone className="location-side-icon"/><div> (+92) 3055997241</div>
                    </div> 
                    <div className="location-details-items flex gap-0.5 items-center">
                        <BiLogoGmail className="location-side-icon"/>
                     <div> mt4458649@gmail.com</div>
                    </div>
                    <div className="location-details-items flex gap-0.5 items-center">
                        <BiLogoLinkedin className="location-side-icon"/>
                     <div> LinkhedIn Profile</div>
                    </div>
                 </div>
               </div>
               <div className="right-side flex flex-col gap-2 w-[20%] max-[725px]:w-[15%] max-[585px]:w-[100%] max-[585px]:items-center ">
                 <h1 className="font-bold text-blue-950  max-[725px]:text-center">Download Our App</h1>
                 <div className="app-store flex flex-wrap gap-1 max-[900px]:justify-center">
                   <img src="../../images/app-store.jpg" alt=""  className="w-22"/>
                   <img src="../../images/play-store.jpg" alt="" className="w-22" />
                 </div>
               </div>
               
            </section>
        </>
    )
}
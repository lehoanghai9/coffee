import { ReactComponent as MyLogo } from "../assets/shared/desktop/logofooter.svg";
import backg from "../assets/plan/desktop/bg-steps.png"
import facebook from "../assets/shared/desktop/icon-facebook.svg"
import instagram from "../assets/shared/desktop/icon-instagram.svg"
import twitter from "../assets/shared/desktop/icon-github.svg"
import {Link} from "react-router-dom"


export const Footer = () => {
  return(
    <div className="pb-16">
      <div className="flex flex-col items-center gap-9 py-14 mt-32 bg-cover lg:flex-row lg:justify-between lg:px-16" style={{ backgroundImage: `url(${backg})` }}>
      
      <Link to="/"><MyLogo/></Link>
      


      <ul className="flex flex-col sm:flex-row gap-6">

        <Link to="/" ><li className="font-barlow font-bold text-grey text-center hover:text-cream duration-200">HOME</li></Link>

        <Link to="/about-us"><li className="font-barlow font-bold text-grey text-center hover:text-cream duration-200">ABOUT US</li></Link>
        
        <Link to="/create-your-plan"><li className="font-barlow font-bold text-grey text-center hover:text-cream duration-200">CREATE YOUR PLAN</li></Link>
        
      </ul>
      <div className="flex gap-6 sm:mt-6 lg:mt-0 items-center">
        <a href="https://www.facebook.com/hai.lehoanghai/"><img src={facebook} alt="facebook icon" className=" fill-current hover:fill-white "></img></a>

        <a href="https://github.com/lehoanghai9"><img src={twitter} alt="twitter icon" className=" fill-current hover:rotate-180"></img></a>
        

        <a href="https://www.instagram.com/_lehoanghai/"><img src={instagram} alt="instagram icon" className=" fill-current hover:fill-pale"></img></a>
        
      </div>
    </div>
    </div>
    
  )
}
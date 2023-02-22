import { ReactComponent as MyLogo } from "../assets/shared/desktop/logo.svg";
import {ReactComponent as Hamburger} from "../assets/shared/mobile/icon-hamburger.svg"
import {ReactComponent as Closed} from "../assets/shared/mobile/icon-close.svg"
import {Link} from "react-router-dom"
import { useState } from "react";

export const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    if(isOpen){
      document.body.style.overflowY = "auto"
    } else{
      document.body.style.overflowY = "hidden"
    }
    
  }

  return (
    <div>
      <nav className=" flex justify-between mt-[20px] sm:mt-[30px] items-center justify-self-center w-full">
      <Link to="/"><MyLogo/></Link>
      
      {isOpen ? <Closed className="md:hidden cursor-pointer " onClick={toggle}/> : <Hamburger className="md:hidden cursor-pointer" onClick={toggle}/>}
      

      <ul className="hidden md:flex">
        <Link to="/"><li className="font-barlow font-extrabold text-grey text-[12px] mr-[32px] hover:text-greyblue duration-200">HOME</li></Link>

        <Link to="/about-us"><li className="font-barlow font-extrabold text-grey text-[12px] mr-[32px] hover:text-greyblue duration-200">ABOUT US</li></Link>
        
        <Link to="/create-your-plan"><li className="font-barlow font-extrabold text-grey text-[12px] hover:text-greyblue duration-200">CREATE YOUR PLAN</li></Link>
        
      </ul>

    </nav>
    <div className={`${isOpen ? "closedmenu show" : "closedmenu"} z-40 sm:hidden absolute w-screen h-screen right-0 bg-gradient-to-b from-cream via-cream to-transparent `}>
    <Link to="/"><h1 className="text-greyblue mt-32 text-center font-fraunces font-black text-3xl mb-12" onClick={toggle}>Home</h1></Link>
    <Link to="/about-us"><h1 className=" text-greyblue text-center font-fraunces font-black text-3xl mb-12" onClick={toggle}>About Us</h1></Link>
    <Link to="/create-your-plan"><h1 className=" text-greyblue text-center font-fraunces font-black text-3xl " onClick={toggle}>Create Your Plan</h1></Link>
    </div>

    </div>
    
  )
}


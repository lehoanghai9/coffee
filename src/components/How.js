import { HowSteps } from "./mini-components/HowSteps"
import {Link} from "react-router-dom"


export const How = () =>{
  return(
    <div className="mt-28 sm:mt-40 flex flex-col ">
      <h1 className="font-fraunces font-black text-3xl text-center text-grey mb-20 sm:text-left sm:text-4xl lg:text-5xl">How it works</h1>


      <div className="flex flex-col sm:flex-row sm:gap-[20px] lg:gap-[70px]">
        <HowSteps bigtitle="01" smalltitle="Pick your coffee" text="Select from our evolving range of artisan coffees. Our beans are ethically 
        sourced and we pay fair prices for them. There are new coffees in all profiles 
        every month for you to try out." textdark="yes"/>
        <HowSteps bigtitle="02" smalltitle="Choose the frequency" text="Customize your order frequency, quantity, even your roast style and grind type. 
        Pause, skip or cancel your subscription with no commitment through our online portal." textdark="yes"/>
        <HowSteps bigtitle="03" smalltitle="Receive and enjoy!" text="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
        world-class coffees curated to provide a distinct tasting experience." textdark="yes"/>
        
      </div>
      <div className="flex justify-center sm:justify-start">
        <Link to="/create-your-plan"><button className='font-fraunces text-cream font-black w-[220px] h-[56px] bg-cyan rounded-[6px] hover:bg-hoverbutton duration-300  mt-6'>
          Create your plan
        </button></Link>
      </div>
      
      
    </div>
    
  )
}
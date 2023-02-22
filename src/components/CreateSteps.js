import backg from "../assets/plan/desktop/bg-steps.png"
import { HowSteps } from "./mini-components/HowSteps"

export const CreateSteps = () => {
  return(
    <div className="rounded-[12px] bg-cover py-20 px-6 sm:px-10 lg:px-20" style={{ backgroundImage: `url(${backg})` }}>
      <div className="flex flex-col sm:flex-row sm:gap-[20px] lg:gap-[70px]">
          <HowSteps bigtitle="01" smalltitle="Pick your coffee" text="Select from our evolving range of artisan coffees. Our beans are ethically 
        sourced and we pay fair prices for them. There are new coffees in all profiles 
        every month for you to try out." transparent ="yes"/>
        <HowSteps bigtitle="02" smalltitle="Choose the frequency" text="Customize your order frequency, quantity, even your roast style and grind type. 
        Pause, skip or cancel your subscription with no commitment through our online portal." transparent ="yes" / >
        <HowSteps bigtitle="03" smalltitle="Receive and enjoy!" text="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
        world-class coffees curated to provide a distinct tasting experience." transparent ="yes"/>
        
      </div>
    </div>
  )
}

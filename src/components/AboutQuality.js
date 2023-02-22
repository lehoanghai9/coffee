import coffeedesktop from "../assets/about/desktop/image-quality.jpg"
import coffeetablet from "../assets/about/tablet/image-quality.jpg"
import coffeemobile from "../assets/about/mobile/image-quality.jpg"
import backg from "../assets/plan/desktop/bg-steps.png"

export const AboutQuality = () => {
  return(
    <div className="flex flex-col  bg-cover rounded-[12px] items-center px-6 pb-14 sm:pb-20 sm:px-20 lg:flex-row lg:justify-around lg:gap-7 mb-28 sm:mb-36 lg:mb-40" style={{ backgroundImage: `url(${backg})` }}>
      <img src={coffeemobile} className="sm:hidden rounded-[12px] max-w-[90%] mt-[-20%] mb-12" alt="coffee quality illustration"/>
      <img src={coffeetablet} className="hidden sm:flex lg:hidden rounded-[12px] mt-[-20%] mb-16" alt="coffee quality illustration"/>
      <img src={coffeedesktop} className="hidden lg:flex rounded-[12px] lg:order-last mt-[-80px]" alt="coffee quality illustration"/>

      <div className="lg:w-[50%] lg:max-w-[600px]">
        <h1 className="text-center font-fraunces text-cream font-black text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-12 lg:text-left">Uncompromising quality</h1>
        <p className="font-barlow text-cream text-center lg:text-left">Although we work with growers who pay close attention to all stages of harvest and processing, 
  we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the 
  coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast 
  consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
      </div>

    </div>)
}
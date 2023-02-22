import backgrounddesk from '../assets/home/desktop/image-hero-coffeepress.jpg'
import backgroundmobile from '../assets/home/mobile/image-hero-coffeepress.jpg'
import backgroundtablet from '../assets/home/tablet/image-hero-coffeepress.jpg'
import {Link} from "react-router-dom"

export const Hero = () => {
  return (
    {/*DESKTOP
    */},
    <div>
      <div className='hidden xl:flex w-full max-h-[600px] bg-cover mt-8 py-28 rounded-[12px]' style={{ backgroundImage: `url(${backgrounddesk})` }}>
      <div className='flex flex-col justify-between w-3/6 ml-20 h-[400px] '>
        <h1 className='font-fraunces font-black text-cream text-[5rem] leading-none w-5/6'>Great coffee made simple.</h1>
        <p className='font-barlow text-cream font-light w-4/6 text-lg'>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
        <Link to="/create-your-plan"><button className='font-fraunces text-cream font-black w-[220px] h-[56px] bg-cyan rounded-[6px] hover:bg-hoverbutton duration-300'>Create your plan</button></Link>
    
      </div>
      </div>

    {/*MOBILE
    */}
    
    <div className='w-full flex items-center h-[500px] bg-cover rounded-[12px] mt-5 md:hidden px-6' style={{ backgroundImage: `url(${backgroundmobile})` }}>
      <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='font-fraunces font-black text-cream text-[40px] text-center mb-6 leading-none'>
          Great coffee made simple.
        </h1>
        <p className='font-barlow text-cream font-light text-base text-center mb-8'>
          Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
        </p>
        <Link to="/create-your-plan"><button className='font-fraunces text-cream font-black w-[220px] h-[56px] bg-cyan rounded-[6px] hover:bg-hoverbutton duration-300'>
          Create your plan
        </button></Link>
        
        </div>
      </div>
      {/*TABLET
    */}
    <div className='hidden w-full h-[500px] bg-cover rounded-[12px] mt-8 md:flex xl:hidden py-24' style={{ backgroundImage: `url(${backgroundtablet})` }}>
      <div className='flex flex-col  w-2/4 ml-16 justify-between'>
        <h1 className='font-fraunces font-black text-cream text-5xl'>
        Great coffee made simple.
      </h1>
      <p className='font-barlow text-cream font-light text-base'>
        Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
      </p>
      <Link to="/create-your-plan"><button className='font-fraunces text-cream font-black w-[220px] h-[56px] bg-cyan rounded-[6px] hover:bg-hoverbutton duration-300'>Create your plan</button></Link>
      
      </div>
      
    </div>
    </div>
  )
}  
import { Whys } from "./mini-components/Whys"
import backg from "../assets/plan/desktop/bg-steps.png"
import coffee from "../assets/home/desktop/icon-coffee-bean.svg"
import gift from "../assets/home/desktop/icon-gift.svg"
import truck from "../assets/home/desktop/icon-truck.svg"

export const WhyUs = () => {
  return(
    <div>
      <div className="flex flex-col  h-[1000px] sm:h-[600px] mt-[120px] rounded-[12px] items-center px-6 sm:px-16 bg-cover" style={{ backgroundImage: `url(${backg})` }}>
      <div className="max-w-[540px] ">
        <h1 className="font-fraunces font-black text-3xl sm:text-4xl lg:text-5xl mt-16 text-cream text-center"> Why choose us?</h1>
      <p className="m-6 lg:m-9 font-barlow text-cream text-base text-center mt">A large part of our role is choosing which particular coffees will be featured 
  in our range. This means working closely with the best coffee growers to give 
  you a more impactful experience on every level. </p>
      </div>
    </div>
    <div className="flex flex-col mt-[-630px] sm:mt-[-340px] lg:mt-[-300px] gap-7 lg:flex-row mx-6 sm:mx-16 xl:mx-24">
        <Whys img={coffee} title="Best quality" text="Discover an endless variety of the world’s best artisan coffee from each of our roasters." alt = "coffee icon"/>
        <Whys img={gift} title="Exclusive benefits" text="Special offers and swag when you subscribe, including 30% off your first shipment." alt="gift icon"/>
        <Whys img={truck} title="Free shipping" text="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed." alt="truck icon"/>
      </div>
    </div>
  )
}
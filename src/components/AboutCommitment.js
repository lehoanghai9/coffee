import guydesktop from "../assets/about/desktop/image-commitment.jpg"
import guytablet from "../assets/about/tablet/image-commitment.jpg"
import guymobile from "../assets/about/mobile/image-commitment.jpg"

export const AboutCommitment = () => {
  return(
    <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-6 lg:gap-8 mb-52 sm:mb-60 lg:mg-52">
      <div className="sm:w-[50%]">
        <img src={guymobile} className="sm:hidden rounded-[12px] w-full object-cover " alt="coffee making commitment"/>
      <img src={guytablet} className="hidden sm:flex lg:hidden rounded-[12px] object-cover ml-6" alt="coffee making commitment"/>
      <img src={guydesktop} className="hidden lg:flex rounded-[12px] ml-6" alt="coffee making commitment"/>
      </div>
      

      <div className="mt-12 sm:mt-0 px-2 sm:max-w-[50%]">
        
        <h1 className="font-fraunces font-black text-3xl lg:text-4xl text-greyblue text-center sm:text-left mb-8">
          Our commitment
        </h1>
        <p className="font-barlow text-lg text-greyblue text-center sm:text-left">
          We’re built on a simple mission and a commitment to doing good along the way. We want to 
          make it easy for you to discover and brew the world’s best coffee at home. It all starts 
          at the source. To locate the specific lots we want to purchase, we travel nearly 60 days 
          a year trying to understand the challenges and opportunities in each of these places.
          We collaborate with exceptional coffee growers and empower a global community of farmers 
          through with well above fair-trade benchmarks. We also offer training, support farm community 
          initiatives, and invest in coffee plant science. Curating only the finest blends, we roast 
          each lot to highlight tasting profiles distinctive to their native growing region.
        </p>
      </div>
    </div>
  )
}
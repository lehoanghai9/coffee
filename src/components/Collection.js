import { Coffee } from "./mini-components/Coffee"
import coff1 from "../assets/home/desktop/image-gran-espresso.png"
import coff2 from "../assets/home/desktop/image-planalto.png"
import coff3 from "../assets/home/desktop/image-piccollo.png"
import coff4 from "../assets/home/desktop/image-danche.png"


//text-grey
export const Collection = () => {
  return (<div className="mt-20 sm:mt-28">
    <h1 className="font-fraunces font-black text-[3rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[13rem] text-center  text-transparent bg-clip-text bg-gradient-to-b from-grey opacity-60">our collection</h1>

    <div className="flex flex-col lg:flex-row lg:gap-6 sm:mt-[-100px] md:mt-[-120px] lg:mt-[-80px] xl:mt-[-120px]">

      <Coffee title="Gran Espresso" img={coff1} alt="coffe danche" text="Light and flavorful blend with cocoa and black pepper for an intense experience"/>

      <Coffee title="Planalto" img={coff2} alt="coffee planalto" text="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"/>

      <Coffee title="Piccollo" img={coff3} alt="coffee piccollo" text="Mild and smooth blend featuring notes of toasted almond and dried cherry"/>

      <Coffee title="Danche" img={coff4} alt="coffee danche" text="Ethiopian hand-harvested blend densely packed with vibrant fruit notes"/>
    </div>
    
  </div>)
  
}
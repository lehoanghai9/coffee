import { Headquarters } from "./mini-components/Headquarters"
import uk from "../assets/about/desktop/illustration-uk.svg"
import canada from "../assets/about/desktop/illustration-canada.svg"
import australia from "../assets/about/desktop/illustration-australia.svg"


export const AboutHeadquarters = () => {
  return(
    <div>
      <h1 className="text-center font-fraunces font-black text-grey text-2xl sm:text-4xl lg:text-5xl sm:text-left mb-16 sm:mb-20 lg:mb-32">Our headquarters</h1>
      <div className="flex flex-col gap-20 sm:flex-row sm:justify-around">
        <Headquarters img={uk} country="United Kingdom" infos={["68 Asfordby Rd", "Alcaston", "SY6 1YA", "+44 1241 918425"]}/>
      <Headquarters img={canada} country="Canada" infos={["1528 Eglinton Avenue", "Toronto", "Ontario M4P 1A6", "+1 416 485 2997"]}/>
      <Headquarters img={australia} country="Australia" infos={["36 Swanston Street", "Kewell", "Victoria", "+61 4 9928 3629"]}/>
      </div>
      
    </div>
  )
}
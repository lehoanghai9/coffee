import { AboutCommitment } from "./AboutCommitment"
import { AboutHeadquarters } from "./AboutHeadquarters"
import { AboutHero } from "./AboutHero"
import { AboutQuality } from "./AboutQuality"

export const About = () => {
  return(
    <div>
      <AboutHero/>
      <AboutCommitment/>
      <AboutQuality/>
      <AboutHeadquarters/>
    </div>
  )
}
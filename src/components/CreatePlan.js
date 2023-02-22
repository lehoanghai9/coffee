import { CreateHero } from "./CreateHero"
import { CreateSteps } from "./CreateSteps"
import { Options } from "./Options"


export const CreatePlan = () => {
  return(
    <div>
      <CreateHero/>
      <CreateSteps/>
      <Options/>
    </div>
  )
}
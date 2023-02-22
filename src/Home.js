import { Collection } from './components/Collection';
import { Hero } from './components/Hero';
import { How } from './components/How';
import { WhyUs } from './components/WhyUs';

export const Home = () => {
  return(
    <div >
      <Hero/>
      <Collection/>
      <WhyUs/>
      <How/>
    </div>
  )
}
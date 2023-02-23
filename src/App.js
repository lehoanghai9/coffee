import './App.css';
import { Home } from './Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { CreatePlan } from './components/CreatePlan';
import { About } from './components/About';


function App() {
  return (
    <div className='flex flex-col content-center mx-[24px] md:mx-[40px] lg:mx-[80px] h-screen max-w-[2000px] pb-20'>
      
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create-your-plan" element={<CreatePlan />}/>
          <Route path="/about-us" element={<About />}/>
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
    
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Router>
    <Routes>
       <Route exact path='/landing-page' element = {<LandingPage />}></Route>
       </Routes>
     <div>
       <div className="bg-cover " >
          <HeroSection />
        </div>
      </div>
    
  </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import SearchMobil from './pages/SearchMobil';
import ListMobil from './pages/ListMobil';
import DetailMobil from './pages/DetailMobil';

function App() {
  return (
    <Router>
    <Routes>
       <Route exact path='/' element = {<LandingPage />}></Route>
       <Route exact path='/search' element = {<SearchMobil />}></Route>
       <Route exact path='/listmobil' element = {<ListMobil />}></Route>
       <Route exact path='/detailmobil' element = {<DetailMobil />}></Route>
       </Routes>
     <div>
       {/* <div className="bg-cover " >
          <LandingPage />
        </div> */}
      </div>
    
  </Router>
  );
}

export default App;

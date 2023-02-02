import logo from './logo.svg';
import './App.css';
import './Skel.css';
import './Style.css';
// import './StyleXLarge.css';
import './StyleLarge.css';
// import './StyleMedium.css';
// import './StyleSmall.css'
import Main from './pages/Main';
import EmployeePage from './pages/EmployeePage';
import Header from './components/Header'
import { BrowserRouter as Router,Routes, Route, Link, } from "react-router-dom";
// import EmployeeTable from './components/EmployeeTable';

function App() {
  return (
   <Router>
   <div className='App'>
    <Header />
    <Routes>
      <Route exact path='/' element = {<Main />}></Route>
      <Route exact path='/employee-page' element = {<EmployeePage />}></Route>
    </Routes>
   </div>
   </Router>
  );
}

export default App;

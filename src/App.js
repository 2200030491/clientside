// import logo from './logo.svg';
// import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NavBar from './main/NavBar';
import Home from './main/Home';
import About from './main/About';
import Contact from './main/Contact';
import Login from './main/Login';
import Signup from './main/SignUp';
import Dashboard from './main/Dashboard';
import Loan from './main/Loan';
import TransferMoney from './main/TransferMoney';
function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loan" element={<Loan/>}/>
        <Route path="/transfer" element={<TransferMoney/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import './components/navbar/navbar.scss';
import './components/Home.scss';
import './components/about-us/about.scss';
import './components/volunteer/volunteer.scss';
import './components/Register/register.scss';
import './components/login/login.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/about-us/About';
import Footer from './components/Footer';
import Volunteer from './components/volunteer/Volunteer';
import Register from './components/Register/Register';
import Login from './components/login/Login';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/volunteer' element={<Volunteer />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
   
  );
}

export default App;

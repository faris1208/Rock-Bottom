import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import './components/navbar/navbar.scss';
import './components/Home.scss';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
    </div>
  );
}

export default App;

import './App.css';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Services/>
      <AboutUs/>
      <Contact/>
    </div>
  );
}

export default App;

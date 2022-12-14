import './App.css';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import MainBanner from './Pages/MainBanner/MainBanner';
import Navbar from './Pages/Navbar/Navbar';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainBanner></MainBanner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

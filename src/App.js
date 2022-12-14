import './App.css';
import HomePage from './features/pages/HomePage';
import NavBar from './features/components/NavBar';
import Footer from './features/components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './features/pages/AboutMe';
import ContactPage from './features/pages/ContactPage';
import CasiCliniciPage from './features/pages/CasiCliniciPage';
import InterventiChirurgigiPage from './features/pages/InterventiChirurgiciPa';
import SubFooter from './features/components/SubFooter';
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<HomePage />}></Route>
          <Route path={'/about'} element={<AboutMe />}></Route>
          <Route path={'/contatti'} element={<ContactPage />}></Route>
          <Route path={'/casiClinici'} element={<CasiCliniciPage />}></Route>
          <Route
            path={'/interventi'}
            element={<InterventiChirurgigiPage />}
          ></Route>
        </Routes>
        <section className='footer-section'>
          <Footer />
        </section>
        <section className='subfooter-section'>
          <SubFooter />
        </section>
      </Router>
    </>
  );
}

export default App;

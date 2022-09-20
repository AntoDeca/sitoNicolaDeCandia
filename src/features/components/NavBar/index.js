import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import logo from '../../../assets/logotest.png';
import { useNavigate, useParams } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { FaBars } from 'react-icons/fa';
function NavBar() {
  const [fix, setFix] = useState(false);
  const [active, setActive] = useState(window.location.href.split('/')[3]);
  const [mobile, setMobile] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    setMobile(!mobile);
  };

  useEffect(() => {
    console.log(window.location.href.split('/')[3]);
    setActive(window.location.href.split('/')[3]);
  }, [window.location.href]);

  const navigateFunction = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const gotoHome = (e) => {
    e.preventDefault();
    navigateFunction('/');
  };
  const gotoAbout = (e) => {
    e.preventDefault();
    navigateFunction('/about');
    setMobile(!mobile);
  };
  const gotoInterventi = (e) => {
    e.preventDefault();
    navigateFunction('/interventi');
    setMobile(!mobile);
  };
  const gotoContatti = (e) => {
    e.preventDefault();
    navigateFunction('/contatti');
    setMobile(!mobile);
  };
  const gotoCasiClinici = (e) => {
    e.preventDefault();
    navigateFunction('/casiClinici');
    setMobile(!mobile);
  };

  return (
    <header className='nav'>
      <nav className={`navbar ${mobile && 'navbar-mobile'}`}>
        <div className='logowrapper'>
          <img className='logo' src={logo} alt={logo}></img>
        </div>
        <ul
          className={`navbar-list ${mobile ? 'navbar-active' : 'navbar-close'}`}
        >
          <li onClick={gotoHome}>
            <a
              href='##'
              className={`navbar-link ${active.length === 0 ? 'on' : ''}`}
            >
              Home
            </a>
          </li>
          <li onClick={gotoAbout}>
            <a
              href='##'
              className={` navbar-link ${active === 'about' ? 'on' : ''}`}
            >
              ABOUT ME
            </a>
          </li>
          <li onClick={gotoInterventi}>
            <a
              href='##'
              className={`navbar-link ${active === 'interventi' ? 'on' : ''}`}
            >
              INTERVENTI CHIRURGICI
            </a>
          </li>
          <li onClick={gotoCasiClinici}>
            <a
              href='##'
              className={`navbar-link ${active === 'casiClinici' ? 'on' : ''}`}
            >
              CASI CLINICI
            </a>
          </li>
          <li onClick={gotoContatti}>
            <a
              href='##'
              className={`navbar-link ${active === 'contatti' ? 'on' : ''}`}
            >
              CONTATTI
            </a>
          </li>
        </ul>
        <button className='nav-btn' onClick={handleClick}>
          {mobile ? <ImCross className='icon' /> : <FaBars className='icon' />}
        </button>
      </nav>
    </header>
  );
}

export default NavBar;

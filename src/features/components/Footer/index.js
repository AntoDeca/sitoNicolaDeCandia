import React from 'react';
import Button from '../Button';
import { ImLocation } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaBook } from 'react-icons/fa';
import logo from '../../../assets/logotest.png';
import './index.css';
import PersonalCard from '../PersonalCard';
function Footer() {
  return (
    <div className='footer container'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt={'logo De Candia Nicola'} />
      </div>
      <div className='footer-contacts'>
        <h2 className='footercontacts-title'>Contatti</h2>
        <ul className='footer-list'>
          <li>
            <div className='footer-adress'>
              <ImLocation fill='rgb(39, 68, 148)' />
              <p>Via N.Dall'Arca 19</p>
            </div>
          </li>
          <li>
            <div className='footer-adress'>
              <BsFillTelephoneFill fill='rgb(39, 68, 148)' />
              <a className='phone-link' href='tel:080 5219334'>
                080 5219334
              </a>
            </div>
          </li>
          <li>
            <div className='footer-adress'>
              <MdEmail fill='rgb(39, 68, 148)' />
              <p>nicopa2000@yahoo.it</p>
            </div>
          </li>
          <li>
            <div className='footer-adress'>
              <FaBook fill='rgb(39, 68, 148)' />
              <p>PIVA: 06985120721</p>
            </div>
          </li>
        </ul>
      </div>
      <PersonalCard />
    </div>
  );
}

export default Footer;

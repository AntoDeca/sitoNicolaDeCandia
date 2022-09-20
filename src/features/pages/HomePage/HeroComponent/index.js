import React from 'react';
import './index.css';
import papa from '../../../../assets/papa.png';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
function HeroComponent() {
  const navigate = useNavigate();
  const gotoAbout = (e) => {
    e.preventDefault();
    navigate('about');
    window.scrollTo(0, 0);
  };
  return (
    <div className='hero container'>
      <div className='hero-content'>
        <div className='hero-content-text'>
          <h1 className='hero-title'>
            <span className='color'>Dott</span>.Nicola De Candia
          </h1>
          <p className='hero-subtitle'>Otorino Laringoiatra-NeuroChirurgo</p>
        </div>
        <p className='hero-description'>
          Il <span className='color'>Dott. Nicola De Candia</span> si è iscritto
          nell'anno accademico 1981/82 alla Facoltà di Medicina e Chirurgia
          dell' Università di Bari, laureandosi in corso nella stessa sede il
          13/11/1987, riportando la votazione di{' '}
          <span className='color'>110/110 e lode</span>.
          <br />
          <br />
          Nel 1992 è risultato <span className='color'>vincitore</span> del
          concorso nazionale bandito dal Gruppo Italiano per lo studio della
          farmacologia della vertigine (GISFaV) per l'assegnazione di una borsa
          di studio con il progetto di ricerca dal titolo:
          <span className='color'>
            ”La Diidroergocristina nel trattamento dei disturbi
            dell'integrazione visuo-spaziale dell'anziano”
          </span>
          ; dal 23/7/1993 al 5/9/1993 ha partecipato al “Visiting Phisician's
          program” presso l'
          <span className='color'>
            House Ear Institute in Los Angeles (USA)
          </span>
          ;
        </p>
        <Button type='stroke' onClick={gotoAbout}>
          Scopri di più
        </Button>
      </div>
      <div className='hero-imagebox'>
        <img className='hero-image' alt='Ciao' src={papa} />
      </div>
    </div>
  );
}

export default HeroComponent;

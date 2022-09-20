import React from 'react';
import './index.css';
import papa from '../../../assets/papa.png';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
function PersonalCard() {
  const navigate = useNavigate();
  const gotoContatti = (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    navigate('/contatti');
  };
  return (
    <div className='personalCard'>
      <div className='personalCard-content'>
        <img className='nic-img' src={papa} alt={'logo'} />
        <h2 className='personalCard-header'>
          {' '}
          <span className='color'>Dott.</span>Nicola De Candia
        </h2>
        <Button type='stroke' onClick={gotoContatti}>
          Prenota una visita
        </Button>
      </div>
    </div>
  );
}

export default PersonalCard;

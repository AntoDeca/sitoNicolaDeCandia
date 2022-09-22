import React from 'react';
import './index.css';
import ReactPlayer from 'react-player';
import settoplasticaendoscopica from '../../../assets/settoplastica.mp4';
import poliposi from '../../../assets/poliposi.mp4';
function CasiCliniciPage() {
  return (
    <section className='casiClinici-section'>
      <div className='container'>
        <div className='casiclinici-header'>
          <h2 className='casiClinici-title'>Casi Clinici</h2>
          <p>Alcuni casi clinici eseguiti dal dott. Nicola De Candia.</p>
        </div>
        <div className='video-box'>
          <h2 className='videobox-title'>Settoplastica Endoscopica</h2>
          <div className='video'>
            <video controls width={'100%'}>
              <source src={settoplasticaendoscopica} type='video/mp4' />
            </video>
          </div>
        </div>
        <div className='video-box'>
          <h2 className='videobox-title'>Poliposi nasale</h2>
          <div className='video'>
            <video controls width={'100%'}>
              <source src={poliposi} type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CasiCliniciPage;

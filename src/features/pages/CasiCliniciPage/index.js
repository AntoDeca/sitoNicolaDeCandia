import React from 'react';
import './index.css';
import settoplasticaendoscopica from '../../../assets/settoplastica.mp4';
import poliposi from '../../../assets/poliposi.mp4';
function CasiCliniciPage() {
  return (
    <section className='casiClinici-section'>
      <div className='container'>
        <div className='casiclinici-header'>
          <h2 className='casiClinici-title'>
            <span className='color'>Casi</span> Clinici
          </h2>
          <p>Alcuni casi clinici eseguiti dal dott. Nicola De Candia.</p>
        </div>
        <div className='video-box'>
          <h2 className='videobox-title'>
            <span className='color'>Settoplastica</span> Endoscopica
          </h2>
          <div className='video'>
            <video
              controls
              width={'100%'}
              poster='../../../assets/DSC07325.jpg'
            >
              <source src={settoplasticaendoscopica} type='video/mp4' />
            </video>
          </div>
        </div>
        <div className='video-box'>
          <h2 className='videobox-title'>
            <span className='color'>Poliposi</span> nasale
          </h2>
          <div className='video'>
            <video
              controls
              width={'100%'}
              poster='../../../assets/DSC07325.jpg'
            >
              <source src={poliposi} type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CasiCliniciPage;

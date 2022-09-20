import React from 'react';
import './index.css';
function CasiCliniciPage() {
  return (
    <section className='casiClinici-section'>
      <div className='container'>
        <div className='casiclinici-header'>
          <h2 className='casiClinici-title'>Casi Clinici</h2>
          <p>Alcuni casi clinici eseguiti dal dott. Nicola De Candia.</p>
        </div>
        <div className='video-box'>
          <h2 className='videobox-title'>
            Decongestione sottomucosa dei turbinati mediante debrider
          </h2>
          <div className='video'>
            <iframe
              width='100%'
              height='500'
              src='https://www.youtube.com/embed/gRfU3dUNldw'
              title='Decongestione sottomucosa dei turbinati mediante debrider'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className='video-box'>
          <h2 className='videobox-title'>Settoplastica endoscopica</h2>
          <div className='video'>
            <iframe
              width='100%'
              height='500'
              src='https://www.youtube.com/embed/-8dfnwOj9_w'
              title='video intervento settoplastica endoscopica'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className='video-box'>
          <h2 className='videobox-title'>Poliposi nasale</h2>
          <div className='video'>
            <iframe
              width='100%'
              height='500'
              src='https://www.youtube.com/embed/jpXzJQHYqJo'
              title='video intervento poliposi'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CasiCliniciPage;

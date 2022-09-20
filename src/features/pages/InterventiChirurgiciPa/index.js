import React from 'react';
import './index.css';
import surge from '../../../assets/surge.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function InterventiChirurgigiPage() {
  return (
    <section className='interventi-section'>
      <div className='container interventi-container'>
        <div className='animation-box'>
          <LazyLoadImage
            className='aboutme-img'
            src={surge}
            alt={'surgeon working on a patient'}
            effect='blur'
          ></LazyLoadImage>
        </div>
        <div className='interventi-text'>
          <h2 className='interventi-title'>Interventi Chirurgici</h2>
          <p>
            Principali interventi chirurgici effettuati dal dott. Nicola De
            Candia:
          </p>
          <ul className='interventi-list'>
            <li>Miringo/timpanoplastica</li>
            <li>Stapedectomia</li>
            <li>FESS (functional endoscopic sinus surgery)</li>
            <li>
              Decongestione turbinati, turbinoplastica con
              laser-debrider-radiofrequenza
            </li>
            <li>Polipotomia nasale con laser-debrider</li>
            <li>Settoplastica endoscopica</li>
            <li>Adenoidectomia endoscopica</li>
            <li>Tonsillectomia</li>
            <li>Causticazione con laser di varici settali</li>
            <li>Uvulopalatoplastica</li>
            <li>Microlaringoscopia</li>
            <li>Parotidectomia</li>
            <li>Asportazione gh. Sottomandibolare</li>
            <li>Plastica durale</li>
            <li>Dacriocistorinostomia (chirurgia delle vie lacrimali)</li>
            <li>Asportazione adenoma ipofisi</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default InterventiChirurgigiPage;

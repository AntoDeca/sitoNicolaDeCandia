import React from 'react';
import './index.css';
import { ImLocation } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiFillClockCircle } from 'react-icons/ai';
function ContactPage() {
  return (
    <section className='contact-section'>
      <div className='container address-container'>
        <div className='contacts'>
          <h2 className='contacts-title'>Indirizzo</h2>
          <ul className='contacts-list'>
            <li>
              <div className='contacts-adress'>
                <ImLocation fill='rgb(39, 68, 148)' />
                <p>Via N.Dall'Arca 19 Bari</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='contacts'>
          <h2 className='contacts-title'>Orari</h2>
          <ul className='contacts-list'>
            <li>
              <div className='contacts-adress'>
                <AiFillClockCircle fill='rgb(39, 68, 148)' />
                <ul className='hours-list'>
                  <li className='hour'>
                    <p>LUNEDI</p>
                    <p> 16:00-20:00</p>
                  </li>
                  <li className='hour'>
                    <p>MERCOLEDI</p>
                    <p> 16:00-20:00</p>
                  </li>
                  <li className='hour'>
                    <p>VENERDI</p>
                    <p> 16:00-20:00</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className='contacts'>
          <h2 className='contacts-title'>Contatti</h2>
          <ul className='contacts-list'>
            <li>
              <div className='contacts-adress'>
                <BsFillTelephoneFill fill='rgb(39, 68, 148)' />
                <a className='phone-link' href='tel:080 5219334'>
                  080 5219334
                </a>
              </div>
            </li>
            <li>
              <div className='contacts-adress'>
                <BsFillTelephoneFill fill='rgb(39, 68, 148)' />
                <a className='phone-link' href='tel:+39 330786177 '>
                  +39 330786177
                </a>
              </div>
            </li>
            <li>
              <div className='contacts-adress'>
                <MdEmail fill='rgb(39, 68, 148)' />
                <p>nicopa2000@yahoo.it</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='map'>
        <iframe
          width='100%'
          height='500'
          id='gmap_canvas'
          src="https://maps.google.com/maps?q=Via%20N.%20dall'Arca%2019%20,Bari&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameborder='0'
          scrolling='no'
          marginheight='0'
          marginwidth='0'
          title='Mappa Studio Dottor De Candia'
        ></iframe>
      </div>
      <div className='container howtoreach-container'>
        <h2 className='howtoreach-bigtitle'>Come raggiungere lo studio</h2>
        <p className='description'>
          Lo studio del dott. De Candia è situato nel centro di Bari a pochi
          metri dalla Stazione ferroviaria. Coordinate geografiche: 41.119438 -
          16.870731
        </p>
        <div className='carhowto'>
          <h2 className='howtoreach-title'>Auto</h2>
          <ul className='howotreach-list'>
            <li>Dalla SS16 prendere l'uscita 4 direzione "via Napoli";</li>
            <li>percorrere tutta via Napoli;</li>
            <li>
              alla fine della strada girare obbligatoriamente a destra in via
              Latilla;
            </li>
            <li>proseguire dritto per tuttia via Quintino Sella;</li>
            <li>
              dopo quasi 1 km, prima del sottopassaggio, svoltare a sinistra per
              Corso Italia;
            </li>
            <li>proseguire dritto fino in Piazza Aldo Moro;</li>
            <li>
              superata la fontana, svoltare a sinistra in via N. dall'Arca (dove
              si trova lo studio).
            </li>
          </ul>
          <p>
            Si consiglia di posteggiare la propria auto nel comodo Gestipark di
            Piazza Umberto I, con accesso da via S. Crisanzio (tariffa oraria: €
            1,50). In alternativa è possibile lasciare la propria auto per
            strada, nelle strisce blu, avendo cura di pagare il ticket (tariffa
            oraria: € 2,00)
          </p>
        </div>
        <div className='mezzipublicihowto'>
          <h2 className='howtoreach-title'>Mezzi Publici</h2>
          <p>
            È possibile raggiungere lo studio del dott. De Candia con le
            seguenti linee AMTAB (fermata Piazza Aldo Moro): 2, 3, 6, 7, 11,
            11/, 12, 12/, 13, 14, 16, 19, 20, 20/, 21, 22, 27, 30, 53, 71, E.
          </p>
          <ul className='howotreach-list'>
            <li>attraversare Piazza Aldo Moro;</li>
            <li>
              percorrere via Nicolò dall'Arca fino al civico 19 (lato sinistro
              della strada).
            </li>
          </ul>
        </div>
        <div className='trenohowto'>
          <h2 className='howtoreach-title'>Treno</h2>
          <p>
            È possibile raggiungere lo studio del dott. De Candia con Ferrovie
            dello Stato - Trenitalia, Ferrovie del Nord Barese (Ferrotramviaria)
            e Ferrovie Sud Est (Ferrovie Appulo Lucane) fermata "Bari centrale".
          </p>
          <ul className='howotreach-list'>
            <li>attraversare Piazza Aldo Moro;</li>
            <li>
              percorrere via Nicolò dall'Arca fino al civico 19 (lato sinistro
              della strada).
            </li>
          </ul>
        </div>
        <div className='areohowto'>
          <h2 className='howtoreach-title'>Aereo</h2>
          <p>Dall'aeroporto Karol Wojtyla prendere:</p>
          <ul className='howotreach-list'>
            <li>il bus navetta Tempesta (€ 4,00) per Piazza Aldo Moro;</li>
            <p>oppure</p>
            <li>il treno per Bari con fermata "Bari - Centrale" (€ 5,00).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;

import React from 'react';
import './index.css';
import papa2 from '../../../assets/papa2.png';
import papa2placeholder from '../../../assets/papa2placeholder.png';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useInView } from 'react-intersection-observer';
import 'react-lazy-load-image-component/src/effects/blur.css';
function AboutMe() {
  const { ref: aboutmeRef, inView: heroVisible } = useInView();
  return (
    <section
      className={`aboutme-section ${
        heroVisible === true ? '' : 'section-hidden'
      }`}
      ref={aboutmeRef}
    >
      <div className='aboutme-container container'>
        <div className='aboutme-content'>
          <div className='aboutme-header'>
            <h1 className='aboutme-doc'>
              <span className='color'>Dott.</span>Nicola De Candia
            </h1>
            <p className='aboutme-spec'>Otorinolaringoiatria-Neurochirurgo</p>
            <h2 className='aboutme-title'>Curriculum Vitae</h2>
          </div>
          <p className='aboutme-text'>
            Il <span className='color'>Dott. Nicola De Candia</span> si è
            iscritto nell'anno accademico 1981/82 alla Facoltà di Medicina e
            Chirurgia dell' Università di Bari, laureandosi in corso nella
            stessa sede il 13/11/1987, riportando la votazione di{' '}
            <span className='color'>110/110 e lode.</span>
            <br></br>
            <br></br>
            Si è abilitato all'esercizio della professione
            <span className='color'> Medico-Chirurgo</span> nella II sessione
            del 1987, riportando la votazione di{' '}
            <span className='color'>110/110</span> ; si è iscritto alla scuola
            di specializzazione in
            <span className='color'> Otorinolaringoiatria</span> presso
            l'Università di Bari nell'anno accademico 1987/88, specializzandosi
            nella stessa sede il 28/1/1991, riportando la votazione di{' '}
            <span className='color'>50/50 e lode</span>;<br></br>
            <br></br>
            Si è iscritto alla Scuola di Specializzazione in{' '}
            <span className='color'>Neurochirurgia</span> presso l'Università
            degli studi di Bari, specializzandosi nella stessa sede il 20
            ottobre 2009, riportando la votazione di{' '}
            <span className='color'>70/70 e lode</span>.<br></br>
            <br></br>
            Nel 1992 è risultato<span className='color'> vincitore</span> del
            concorso nazionale bandito dal Gruppo Italiano per lo studio della
            farmacologia della vertigine (GISFaV) per l'assegnazione di una
            borsa di studio con il progetto di ricerca dal titolo:
            <span className='color'>
              ”La Diidroergocristina nel trattamento dei disturbi
              dell'integrazione visuo-spaziale dell'anziano”
            </span>
            ;<br></br>
            <br></br>
          </p>
          <ul className='aboutme-list'>
            <li>
              dal 23/7/1993 al 5/9/1993 ha partecipato al “Visiting Phisician's
              program” presso l'House Ear Institute in Los Angeles (USA);
            </li>
            <li>
              il 4/12/1995 ha conseguito il titolo di Dottore di ricerca
              in”Fisiopatologia della comunicazione audio-verbale”, VII ciclo,
              presso l'Università degli studi di Napoli Federico II;
            </li>
            <li>
              dal 30/12/1994 a tutt'oggi è Dirigente Medico I livello presso
              l'Unità Operativa di Otorinolaringoiatria dell'Azienda Ospedaliera
              Policlinico di Bari;
            </li>
            <li>
              dal 7/4/1997 al 22/4/1997 si è recato in missione presso la
              Clinica ORL dell'Università di Brescia per acquisire le tecniche
              di chirurgia endoscopica naso-paranasale,
            </li>
            <li>
              dal 1/7/1999 al 3/7/1999 ha frequentato il 25° corso di chirurgia
              endoscopica naso-sinusale presso la Clinica ORL di Graz (Austria);
            </li>
            <li>
              dal 29/10/2000 al 2/11/2000 ha frequentato il 13th Andrea Vesalius
              Corse: "Advanced endoscopic surgical tecniques of paranasal
              sinuses and rhinobasis and lateral approaches to skull base”
              presso la facoltà di medicina della libera Università di
              Bruxelles;
            </li>
            <li>
              dal 16/11/2002 al 18/11/2002 si è recato in missione a Bruxelles
              per frequentare il 17th Corso Andrea Vesalius-Corso pratico
              intensivo avanzato di anatomia dissettiva e chirurgia demolitiva e
              ricostruttiva della regione cervicale;
            </li>
            <li>
              dal 19 al 22 marzo 2003 ha partecipato al Corso Internazionale
              Masterclass di Microchirurgia endoscopica sinusale e del
              basicranio - Milano;
            </li>
            <li>
              dal 23 al 25 marzo 2009 ha partecipato al IX Corso Itinerante di
              Roncochirurgia in diretta – Forlì;
            </li>
            <li>
              dal 27 al 29 marzo 2009 ha partecipato al 5th Corso Masterclass di
              Chirurgia Endoscopica Nasosinusale e della Base Cranica - Milano;
            </li>
            <li>
              dal 24 al 27 novembre 2009 ha partecipato al II Corso intensivo di
              dissezione chirurgica in Otorinolaringoiatria: ghiandole salivari-
              Milano;
            </li>
            <li>
              dal 26 al 30 settembre 2010 ha partecipato al 5th Corso
              Internazionale di dissezione “A 360° Journey around Skull Base:
              Anterior and Lateral approaches Course” – Nizza.
            </li>
          </ul>
          <div className='aboutme-docenza'>
            <h3 className='aboutmedocenza-title'>Docente</h3>
            <p className='aboutme-text'>
              Docente di “Tecniche endoscopiche naso-sinusali” al 2° anno della
              scuola di specializzazione in Otorinolaringoiatria dell'Università
              di Bari;
            </p>
          </div>
          <div className='aboutme-docenza'>
            <h3 className='aboutmedocenza-title'>Chirurgo</h3>
            <p className='aboutme-text'>
              Per quanto riguarda la CASISTICA OPERATORIA, il dott. Nicola De
              Candia ha eseguito più di mille interventi tra quelli di seguito
              elencati:
            </p>
            <ul className='aboutme-list'>
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
              <li>Asportazione adenoma ipofisi</li>
            </ul>
            <p className='aboutme-text'>
              Si rimanda ai registri di sala operatoria depositati presso la
              Clinica ORL del Policlinico-Bari.
            </p>
          </div>
          <div className='aboutme-docenza'>
            <h3 className='aboutmedocenza-title'>Relatore</h3>
            <p className='aboutme-text'>
              Autore di numerose COMUNICAZIONI SCIENTIFICHE, è stato invitato in
              qualità di RELATORE a Congressi Nazionali ed Internazionali;
              inoltre ha partecipato come DOCENTE alla realizzazione di CORSI
              per la formazione medico-specialistica:
            </p>
            <ul className='aboutme-list'>
              <li>
                1° Corso di Chirurgia endoscopica dei seni paranasali - Lecce;
              </li>
              <li>
                2° Corso di Chirurgia Endoscopica dei seni paranasali e del
                basicranio anteriore - Brindisi - 26-28 aprile 2010;
              </li>
              <li>Rhinofocus - Bari - 2011;</li>
              <li>ENDOPUGLIA 2012 - Foggia - 15-17 novembre 2012;</li>
              <li>
                Il Trattamento dell'epistassi nella malattia di
                Rendu-Osler-Weber - Bari, 14-15 dicembre 2012;
              </li>
              <li>
                Master avanzato di citologia nasale – Bari , 21-23 dicembre
                2012;
              </li>
              <li>ENDOPUGLIA 2013 – Lecce – 27-29 novembre 2013;</li>
              <li>
                Approccio multidisciplinare alle rinopatie 5 Aprile 2014 - Bari.
              </li>
            </ul>
            <p className='aboutme-text'>
              Si rimanda ai registri di sala operatoria depositati presso la
              Clinica ORL del Policlinico-Bari.
            </p>
          </div>
          <div className='aboutme-docenza'>
            <h3 className='aboutmedocenza-title'>
              Autore di testi e pubblicazioni
            </h3>
            <p className='aboutme-text'>
              Ha partecipato alla stesura dei seguenti TESTI:
            </p>
            <ul className='aboutme-list mb'>
              <li>
                argomenti di otorinolaringoiatria di G.Cortesina, 1996
                (Ed.Archimedica);
              </li>
              <li>
                manuale di otorinolaringoiatria di A. Quaranta e R. Fiorella,
                1998 (ED McGraw-Hill);
              </li>
            </ul>
            <p className='aboutme-text'>
              E' autore di numerose PUBBLICAZIONI SCIENTIFICHE:
            </p>
            <ul className='aboutme-list'>
              <li>
                1° Corso di Chirurgia endoscopica dei seni paranasali - Lecce;
              </li>
              <li>
                2° Corso di Chirurgia Endoscopica dei seni paranasali e del
                basicranio anteriore - Brindisi - 26-28 aprile 2010;
              </li>
              <li>Rhinofocus - Bari - 2011;</li>
              <li>ENDOPUGLIA 2012 - Foggia - 15-17 novembre 2012;</li>
              <li>
                Il Trattamento dell'epistassi nella malattia di
                Rendu-Osler-Weber - Bari, 14-15 dicembre 2012;
              </li>
              <li>
                Master avanzato di citologia nasale – Bari , 21-23 dicembre
                2012;
              </li>
              <li>ENDOPUGLIA 2013 – Lecce – 27-29 novembre 2013;</li>
              <li>
                Approccio multidisciplinare alle rinopatie 5 Aprile 2014 - Bari.
              </li>
            </ul>
            <p className='aboutme-text'>
              Si rimanda ai registri di sala operatoria depositati presso la
              Clinica ORL del Policlinico-Bari.
            </p>
          </div>
        </div>
        <div className='aboutme-imgcontainer'>
          <LazyLoadImage
            className='aboutme-img'
            src={papa2}
            alt={'foto dottore Nicola De Candia Bari'}
            placeholderSrc={papa2placeholder}
            effect='blur'
          ></LazyLoadImage>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

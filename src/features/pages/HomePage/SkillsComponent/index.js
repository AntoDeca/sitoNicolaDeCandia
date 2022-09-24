import React from 'react';
import Card from '../../../components/Card';
import './index.css';
import nose from '../../../../assets/nose.png';
import ear from '../../../../assets/ear.png';
import throat from '../../../../assets/throat.png';
import test from '../../../../assets/test.png';
import { GoCheck } from 'react-icons/go';
function SkillsComponent() {
  return (
    <div className='skills-box container'>
      <h2 className='skills-box-title'>
        <span className='color'>Patologie</span> trattate
      </h2>
      <div className='card-container'>
        <Card
          title={'Naso'}
          type='pat'
          image={nose}
          list={[
            'Ostruzione nasale',
            'Rinite vasomotoria',
            'Poliposi nasale',
            'Ipertrofia dei turbinati',
            'Ipertrofia adenoide e tonsillare',
            'OSAS',
            'Sinusite',
            ' Mucocele',
            'Varici settali-epistassi',
            'Deviazione del setto nasale',
            'Tumori benigni e maligni (papilloma invertito, osteoma, etc.)',
          ]}
        />
        <Card
          type='pat'
          title={'Orecchio'}
          image={ear}
          list={[
            'perforazione della membrana timpanica',
            'otite cronica',
            'otosclerosi',
            'otosclerosi',
            'otosclerosi',
            'sindrome di Meniere',
            'sindrome vertiginosa - cupololitiasi',
          ]}
        />
        <Card
          type='pat'
          title={'Collo'}
          image={throat}
          list={[
            'Polipi, noduli, prolassi delle corde vocali',
            'Discheratosi e neoformazioni maligne del laringe',
            'Tumefazioni del collo',
            'Adenomi, calcolosi ghiandole salivari',
          ]}
        />
        <Card
          title={'Esami Clinici'}
          image={test}
          type='exam'
          icon={GoCheck}
          list={[
            'esame audiometrico ',
            'esame impedenzometrico',
            'prove vestibolari',
            'otoendoscopia',
            'fibroscopia laringea',
            'microscopia auricolare',
            'endoscopia nasale',
            ' endoscopia laringea',
          ]}
        />
      </div>
    </div>
  );
}

export default SkillsComponent;

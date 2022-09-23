import React from 'react';
import './index.css';
import { TiTick } from 'react-icons/ti';

function Card({ image, title, list, type, Icon }) {
  return (
    <div className={`card ${type}`}>
      <h2 className='card-title'>{title}</h2>
      <img src={image} alt={image} className='card-img'></img>
      <div className='card-content'>
        <ul className={`card-list ${type === 'exam' ? 'card-list-exam' : ''} `}>
          {list.map((el) => {
            return (
              <li className='list-item'>
                {type === 'exam' && <TiTick className='card-icon' />}
                <p>{el}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Card;

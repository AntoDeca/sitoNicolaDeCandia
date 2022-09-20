import React from 'react';
import './index.css';

function Card({ image, title, list, type, Icon }) {
  return (
    <div className={`card ${type}`}>
      <h2 className='card-title'>{title}</h2>
      <img src={image} className='card-img'></img>
      <div className='card-content'>
        <ul className={`card-list ${type === 'exam' ? 'card-list-exam' : ''} `}>
          {list.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Card;

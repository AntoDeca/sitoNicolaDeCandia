import React, { useState } from 'react';
import './index.css';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { ImLocation } from 'react-icons/im';
function SlideShow() {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    e.preventDefault();
    navigate('contatti');
    window.scrollTo(0, 0);
  };

  return (
    <div className='slider'>
      <AnimatePresence>
        <motion.div
          className='hero-text'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <div className='hero-heading-box'>
            <h1 className='hero-heading'>Dott. Nicola De Candia</h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 4, delay: 1.1 }}
              className='underline'
            ></motion.div>
          </div>
          <div className='slider-specialities'>
            <h2 className='slider-spec'>Specialista in OtorinoLaringoiatria</h2>
            <h2 className='slider-spec'>Specialista in NeuroChirurgia</h2>
          </div>

          <Button className='big-btn' type='stroke' onClick={clickHandler}>
            Contattaci
          </Button>
        </motion.div>
        <div className='overlay'></div>
      </AnimatePresence>
    </div>
  );
}

export default SlideShow;

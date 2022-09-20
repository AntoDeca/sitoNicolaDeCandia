import React, { useState } from 'react';
import './index.css';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
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
        >
          <h1 className='hero-heading'>otorinodecandia</h1>
          <Button className='big-btn' type='stroke' onClick={clickHandler}>
            Prenota una visita
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default SlideShow;

import React from 'react';
import { motion } from 'framer-motion';
import './index.css';
function AnimatedText({ text, className }) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
      style={{ overflow: 'hidden', display: 'flex' }}
      className={className}
    >
      {words.map((word, index) => {
        return (
          <motion.span
            variants={child}
            style={{ marginRight: '5px' }}
            key={index}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export default AnimatedText;

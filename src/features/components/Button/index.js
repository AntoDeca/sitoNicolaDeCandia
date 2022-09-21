import React from 'react';
import './index.css';
function Button({ children, type, className, onClick }) {
  return (
    <a href='##' onClick={onClick} className={`btn ${type} ${className}`}>
      <span className='btn-content'>{children}</span>
    </a>
  );
}

export default Button;

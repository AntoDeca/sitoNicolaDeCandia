import React from 'react';
import './index.css';
function Button({ children, type, className, onClick }) {
  return (
    <a href='##' onClick={onClick} className={`btn ${type} ${className}`}>
      {children}
    </a>
  );
}

export default Button;

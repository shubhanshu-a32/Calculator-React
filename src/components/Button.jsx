import React from 'react';

const getButtonStyle = (label) => {
  if (label === '=') return 'bg-cyan-500 hover:bg-cyan-600 text-white';
  if (label === 'C') return 'bg-red-500 hover:bg-red-600 text-white';
  if (label === 'DEL') return 'bg-yellow-500 hover:bg-yellow-600 text-white';
  if (['/', '*', '+', '-'].includes(label)) return 'bg-purple-500 hover:bg-purple-600 text-white';
  return 'bg-gray-700 hover:bg-gray-600 text-white';
};

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${getButtonStyle(label)} text-xl py-4 rounded-xl transition-all duration-200 shadow-md`}
    >
      {label}
    </button>
  );
};

export default Button;

import Display from './components/Display'
import Button from './components/Button'
import Calculate from './utils/Calculate'

import './App.css'
import { useState } from 'react';

const buttons = [
  'C', 'DEL','/', '+', '-', '*',
  '=', '0', '1', '2', '3', '4', 
  '5', '6', '7', '8', '9', '.'
];

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if(value === 'C') return setInput('');
    if(value === 'DEL') return setInput(input.slice(0,-1));
    if(value === '=') return setInput(Calculate(input));
    setInput(input + value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-teal-800 text-white">
      <h1 className="text-center text-2xl font-bold text-cyan-300 mb-4">React Calculator</h1>
      <Display value={input} />
      <div className="grid grid-cols-4 gap-4 mt-5">
        {buttons.map((btn, idx) => (
          <Button key={idx} label={btn} onClick={() => handleClick(btn)} />
        ))}
      </div>
    </div>
  )
};

export default App

import './App.css';

import React, { useState } from 'react';

import QuoteMachine from './components/QuoteMachine';
import ContextQuote from './Context';

const App = () => {
  const [color, setColor] = useState<string>("#16a085");
  return (
    <ContextQuote.Provider
      value={{
        color: color,
        setColor: (newColor: string) => setColor(newColor),
      }}
    >
      <div id="wrapper" style={{ backgroundColor: color }}>
        <QuoteMachine />
      </div>
    </ContextQuote.Provider>
  );
};

export default App;

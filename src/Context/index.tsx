import React from 'react';

const defaultValue = { color: "#16a085", setColor: (newColor: string) => {} };
const ContextQuote = React.createContext(defaultValue);
export default ContextQuote;

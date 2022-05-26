import React from 'react';

import { IQuoteText } from '../QuoteMachine/interface';

const QuoteText: React.FC<IQuoteText> = ({ text }) => {
  return (
    <div id="text">
      <i className="fa fa-quote-left"> </i>
      <span>{text}</span>
    </div>
  );
};

export default QuoteText;

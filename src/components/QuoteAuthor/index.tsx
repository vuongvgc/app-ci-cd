import React from 'react';

import { IQuoteAuthor } from '../QuoteMachine/interface';

const QuoteAuthor: React.FC<IQuoteAuthor> = ({ author }) => {
  return <div id="author">-{author}</div>;
};

export default QuoteAuthor;

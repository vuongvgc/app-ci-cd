import React, { useContext, useEffect, useState } from 'react';

import ContextQuote from '../../Context';
import { getDataQuote, randomNumber } from '../../utilities';
import Footer from '../Footer';
import QuoteAuthor from '../QuoteAuthor';
import QuoteText from '../QuoteText';
import { IQuoteItem } from './interface';

const QuoteMachine: React.FC = () => {
  const [quote, setQuote] = useState<IQuoteItem>();
  const [isRandomQuote, setIsRandomQuote] = useState(false);
  const { color } = useContext(ContextQuote);
  useEffect(() => {
    getDataQuote().then((data) => setQuote(data));
  }, [isRandomQuote]);

  return (
    <div id="quote-box" style={{ color: color }}>
      <QuoteText text={quote ? quote.content : ""} />
      <QuoteAuthor author={quote ? quote.author : ""} />
      <Footer
        setIsRandomQuote={setIsRandomQuote}
        isRandomQuote={isRandomQuote}
      />
    </div>
  );
};

export default QuoteMachine;

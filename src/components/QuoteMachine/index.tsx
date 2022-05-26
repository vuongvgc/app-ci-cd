import React, { useContext, useEffect, useState } from 'react';

import ContextQuote from '../../Context';
import { randomNumber } from '../../utilities';
import Footer from '../Footer';
import QuoteAuthor from '../QuoteAuthor';
import QuoteText from '../QuoteText';
import { IQuoteItem } from './interface';

const QuoteMachine: React.FC = () => {
  const [quote, setQuote] = useState<IQuoteItem>();
  const [isRandomQuote, setIsRandomQuote] = useState(false);
  const { color } = useContext(ContextQuote);
  useEffect(() => {
    if (isRandomQuote) {
      fetch("https://api.quotable.io/random")
        .then((rs) => {
          return rs.json();
        })
        .then((data) => {
          setQuote(data);
        })
        .finally(() => setIsRandomQuote(false));
    }
  }, [isRandomQuote]);

  return (
    <div id="quote-box" style={{ color: color }}>
      <QuoteText text={quote ? quote.content : ""} />
      <QuoteAuthor author={quote ? quote.author : ""} />
      <Footer setIsRandomQuote={setIsRandomQuote} />
    </div>
  );
};

export default QuoteMachine;

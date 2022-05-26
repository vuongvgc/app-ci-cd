import React, { useContext } from 'react';

import ContextQuote from '../../Context';
import { colorsArray, randomNumber } from '../../utilities';
import { IButton } from '../QuoteMachine/interface';

const Footer: React.FC<IButton> = ({ setIsRandomQuote }) => {
  const { color, setColor } = useContext(ContextQuote);
  return (
    <div className="footer__box">
      <a
        className="button"
        id="tweet-quote"
        title="Tweet this quote!"
        target="_top"
        href="twitter.com/intent/tweet"
        style={{ backgroundColor: color }}
      >
        <i className="fa fa-twitter"></i>
      </a>
      <a
        className="button"
        id="tumblr-quote"
        title="Post this quote on tumblr!"
        target="_blank"
        href="twitter.com/intent/tweet"
        style={{ backgroundColor: color }}
      >
        <i className="fa fa-tumblr"></i>
      </a>
      <button
        className="button"
        style={{ backgroundColor: color }}
        id="new-quote"
        onClick={() => {
          setIsRandomQuote(true);
          setColor(colorsArray[randomNumber(0, colorsArray.length - 1)]);
        }}
      >
        New quote
      </button>
    </div>
  );
};

export default Footer;

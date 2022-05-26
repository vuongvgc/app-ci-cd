import { IQuoteItem } from '../components/QuoteMachine/interface';
import { getDataQuote } from './index';

it("function get API and return object quote", async () => {
  const data = await getDataQuote();
});

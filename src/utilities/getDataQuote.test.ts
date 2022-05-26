import { getDataQuote } from './index';

it("function get API and return object quote", async () => {
  const data = await getDataQuote();
  expect(data.content).toBeTruthy();
  expect(data.author).toBeTruthy();
});

import hello from './index';

test('hello output as expect', () => {
  expect(hello()).toBe('hello world!!!');
});

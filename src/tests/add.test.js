function sum(a, b) {
  return a + b;
};

function generateGreeting(name = 'Anonymous') {
  return `Hello ${name}!`;
};

test('adds 1 + 2 equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Should greet my name!', () => {
  expect(generateGreeting('Mikael')).toBe('Hello Mikael!');
})

test('Should generate greeting with no name', () => {
  expect(generateGreeting()).toBe('Hello Anonymous!');
})
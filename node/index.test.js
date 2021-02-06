// const add = require('./index');
const index = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(index.add(1, 2)).toBe(3);
});

test('adds 2 + 3 to equal 5', () => {
    expect(index.add(2, 3)).toBe(5);
});

test('jsonのテスト', () => {
    expect(index.readJson('./test.json').name).toBe("むった");
});
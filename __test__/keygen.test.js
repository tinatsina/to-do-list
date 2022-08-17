import makeId from '../src/common/keygen.js';

describe('Test for ID maufacture', () => {
  test('Length of ID --> 10', () => {
    const result = makeId().length;
    expect(result).toBe(16);
  });
  test('Length of ID --> 10', () => {
    expect((makeId().length)).toBe(16);
  });
  test('Length of ID --> 10', () => {
    const result = makeId().length;
    expect(result).toBe(16);
  });
  test('Length of ID --> 10', () => {
    const result = makeId().length + 4;
    expect(result).toBe(20);
  });
  test('Length of ID --> 10', () => {
    const result = makeId().length - 6;
    expect(result).toBe(10);
  });
  test('Length of ID --> 10', () => {
    const result = makeId().length - 16;
    expect(result).toBe(0);
  });
});
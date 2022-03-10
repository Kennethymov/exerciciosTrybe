const {sum, myRemove} = require('./sum.js');

describe('testa a função sum', () => {

test('sums 2 e 5', () => {
  expect(sum(2, 5)).toBe(7);
});

test('sums 0 e 0', () => {
  expect(sum(0, 0)).toBe(0);
});

// test('sums 4 e "5"', () => {
//   expect(sum(4, '5')).toEqual(0);
//   expect(()=> {sum()}).toThrow('parameters must be numbers');
// });

it('deve disparar um erro caso receba como parâmetro uma string', () => {
  expect(() => sum(4, '5')).toThrowError();
  expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
})

});

describe('Testa funcao myRemove', () => {

  test('myRemove([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('myRemove([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('myRemove([1, 2, 3, 4], 5)', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

})

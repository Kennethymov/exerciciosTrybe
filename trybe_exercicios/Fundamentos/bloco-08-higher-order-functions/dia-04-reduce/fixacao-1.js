const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(array) {
    // escreva seu código aqui
    return array.reduce((acc, ccr) => acc.concat(ccr), []);
  }

  console.log(flatten(arrays));
  
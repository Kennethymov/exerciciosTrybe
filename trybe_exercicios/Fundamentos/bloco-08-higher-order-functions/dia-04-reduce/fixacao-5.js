// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(array) {
    // escreva seu código aqui
    const letras = array.reduce((acc, ccr) => acc + ccr);
    let a = letras.split('a').length - 1;
    let A = letras.split('A').length - 1;
    return a + A;
  }

  console.log(containsA(names));
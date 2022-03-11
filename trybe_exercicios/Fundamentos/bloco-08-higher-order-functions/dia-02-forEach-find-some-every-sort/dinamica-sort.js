const estudantes = [
    {
      nome: 'Joel',
      Projeto: 'Trybewarts',
      status: 98,
    },
    {
      nome: 'Mica',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Hugonardo',
      Projeto: 'Trybewarts',
      status: 97,
    },
    {
      nome: 'Aninha',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Joicy',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Ronald',
      Projeto: 'Trybewarts',
      status: 75,
    },
  ];

  // 1 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados em ordem alfabetica.

  // escreva sua função aqui.

//   estudantes.sort(array)

  estudantes.sort((a, b) => {
      if (a.nome > b.nome) {
          return 1;
      } else if (a.nome < b.nome) {
          return -1;
      }
      return 0;
  });

  console.log(estudantes);

  // 2 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados por status.

  // escreva sua função aqui. 

  estudantes.sort((a, b) => {
    if (a.status > b.status) {
        return 1;
    } else if (a.status < b.status) {
        return -1;
    }
    return 0;
});

console.log(estudantes);

  const pessoa = (name) => {
    const email = name.toLowerCase().replace(' ', '_')
    return {
        nome: name,
        email: `${email}@trybe.com`
    }
}

const newEmployees = () => {
    const employees = {
      id1: pessoa('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: pessoa('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: pessoa('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees());

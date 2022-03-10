const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(10, isEven); // Testa quais números serão pares;
  repeat(10, isOdd); // Testa quais números serão ímpares;

  const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator());


  // Ao chamar a função doingThings:
// doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const wakeUp = () => 'Acordando!';
const breakfast = () => 'Bora tomar café!!';
const slepp = () => 'Partiu dormir!!';

const doingThings = (acao) => {
    console.log(acao());
};

doingThings(wakeUp);
doingThings(breakfast);
doingThings(slepp);
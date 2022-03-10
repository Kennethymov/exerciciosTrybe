const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checked = (gabarito, resposta) => {
        let nota = 0;
        for (let i = 0; i < resposta.length; i +=1) {
            if (resposta[i] === 'N.A') {
                nota += 0;
            } else if (resposta[i] === gabarito[i]) {
                nota += 1;
            } else if (resposta[i] !== gabarito[i]) {
                nota -= 0.5;
            }
        }
        return `Nota final: ${nota} pontos!`;
};

const pontuacao = (gabarito, resposta, checked) => checked(gabarito, resposta);

console.log(pontuacao(RIGHT_ANSWERS, STUDENT_ANSWERS, checked));
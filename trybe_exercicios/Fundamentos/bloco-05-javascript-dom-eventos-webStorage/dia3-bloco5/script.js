function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//   Exercicio 1

function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const daysList = document.querySelector("#days");

    for (let id = 0; id < dezDaysList.length; id += 1) {
        const day = dezDaysList[id];
        const dayListItem = document.createElement("li");
        dayListItem.innerText = day;
        daysList.appendChild(dayListItem);
    }
}

createDays();




//   Exercicio 2



//   Exercicio 3
//   Exercicio 4
//   Exercicio 5
//   Exercicio 6
//   Exercicio 7
//   Exercicio 8
//   Exercicio 9
//   Exercicio 10

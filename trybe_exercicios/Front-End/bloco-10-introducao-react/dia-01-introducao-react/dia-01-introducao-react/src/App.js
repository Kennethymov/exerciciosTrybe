import logo from './logo.svg';
import './App.css';
import teste from './Component'
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const listToDo = ['Acordar', 'Trabalho Prefeitura Ipatinga', 'Almoçar', 'Trybe', 'Estudar mais um cadim', 'Dormir'];

class App extends React.Component {
  render() {
    return (
      <ul> { listToDo.map((ToDo) => Task(ToDo)) } </ul>
    );
  }
}

// function App() {
//   return <ul> { listToDo.map((ToDo) => Task(ToDo)) } </ul>;    
// }

export default App;

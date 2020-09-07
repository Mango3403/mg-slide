import React from 'react';
import './App.css';
import Slide from './Slide';

function App() {
  const items = [
    {
      id: 1,
      text: 'Iron Man',
      src:
        'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
      isChecked: true,
    },
    {
      id: 2,
      text: 'Iron Man',
      src:
        'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
      isChecked: false,
    },
    {
      id: 3,
      text: 'Iron Man',
      src:
        'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
      isChecked: false,
    },
    {
      id: 4,
      text: 'Iron Man',
      src:
        'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
      isChecked: false,
    },
  ];
  return (
    <div className="App">
      <Slide items={items} />
    </div>
  );
}

export default App;

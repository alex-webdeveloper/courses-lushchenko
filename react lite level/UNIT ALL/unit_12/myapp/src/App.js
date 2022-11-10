import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
      x: 0,
      o: 0,
      display: 'block',
      pointerEvents: 'auto',
      arrXO: ['x', 'o'],
      scoreString: ''
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  }

  // выбор игрока x или o
  changeArr = (event) => {
    let data = event.target.getAttribute('data');
    if (data === 'o') {
      this.setState({ arrXO: ['o', 'x'] });
    }
  }

  // открытие поля
  openField = () => {
    this.setState({ display: 'none' })
  }

  // сброс игры, перезагрузка страницы
  resetGame = () => {
    window.location.reload();
  }

  // следующая игра
  nextGame = () => {
    this.setState({ squares: Array(9).fill(null) });
    this.setState({ count: 0 });
    this.setState({ pointerEvents: 'auto' });
  }

  // определение победы и запись общего счета, определение ничьи 
  winnerDraw = (itemText) => {
    console.log(itemText);
    for (let i = 0; i < 8; i++) {
      let line = this.winnerLine[i];
      if (this.state.squares[line[0]] === itemText && this.state.squares[line[1]] === itemText && this.state.squares[line[2]] === itemText) {
        this.setState({ pointerEvents: 'none' });
        this.setState({ [itemText]: this.state[itemText] + 1 });
        this.setState({ scoreString: 'Победа ' + itemText });
        return false;
      }
    }

    if (this.state.count === 8) {
      this.setState({ pointerEvents: 'none' });
      this.setState({ scoreString: 'Ничья' });
    }
  }

  // начало игры, первый ход и последующие, запуск счетчика
  clickHandler = event => {
    let data = event.target.getAttribute('data');
    let currentSquares = this.state.squares;

    if (currentSquares[data] === null) {
      currentSquares[data] = this.state.arrXO[this.state.count % 2];
      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: currentSquares });
      this.winnerDraw(currentSquares[data]);
    }

    else alert('Поле занято!');

  }


  render() {
    return (
      <div className='App'>
        <div className='count'>
          <div className='player'>
            <p>Игрок Х</p>
            <p>{this.state.x}</p>
          </div>
          <div className='player'>
            <p>Игрок О</p>
            <p>{this.state.o}</p>
          </div>
        </div>
        <div className='game'>
          <button onClick={this.nextGame} value='nex'>Next Game</button>
          <button onClick={this.resetGame} value='reset'>Reset Game</button>
        </div>
        <div className="tic-tac-toe" style={{ pointerEvents: this.state.pointerEvents }}>
          <div className='hidden' style={{ display: this.state.display }} onClick={this.openField}>
            <button>X</button>
            <button onClick={this.changeArr} data='o'>О</button>
          </div>
          <div className='ttt-grid' onClick={this.clickHandler} data='0'>{this.state.squares[0]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='1'>{this.state.squares[1]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='2'>{this.state.squares[2]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='3'>{this.state.squares[3]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='4'>{this.state.squares[4]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='5'>{this.state.squares[5]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='6'>{this.state.squares[6]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='7'>{this.state.squares[7]}</div>
          <div className='ttt-grid' onClick={this.clickHandler} data='8'>{this.state.squares[8]}</div>
        </div>
        <p style={{ color: 'rgb(230, 220, 164)', fontSize: '20px' }}>{this.state.scoreString}</p>
      </div>

    );
  }
}

export default App;

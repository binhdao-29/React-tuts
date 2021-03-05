import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.list = [
      { title : 'Go to school', isComplete : true },
      { title : 'Go to work', isComplete : true },
      { title : 'Go to market' },
      { title : 'Go to park', isComplete : false }
    ];
  }
  render() {
    return (
      <div className="App">
        {
          this.list.length > 0 && this.list.map((item, index) => 
            <TodoItem key={index} item={item} />
          )
        }
        {
          this.list.length === 0 && 'Nothing here'
        }
      </div>
    );
  }
}

export default App;

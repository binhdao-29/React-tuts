import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import { Component } from 'react';

// function App() {
//   let todoListItems = [ 
//     'Go home',
//     'Go swimming',
//     'Go to work'
//   ]
//   return (
//     <div className="App">
//       {
//         todoListItems.map((item, index) => 
//           <TodoItem key={index} title={item} />
//         )
//       }
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.list = [
      'Di cho',
      'Di hoc',
      'Di an'
    ]
  }
  render() {
    return (
      <div className="App">
        {
          this.list.map((item, index) => 
            <TodoItem key={index} title={item} />
          )
        }
      </div>
    );
  }
}

export default App;

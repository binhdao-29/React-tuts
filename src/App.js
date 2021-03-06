import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list : [
        { title : 'Go to school', isComplete : true },
        { title : 'Go to work', isComplete : true },
        { title : 'Go to market' },
        { title : 'Go to park', isComplete : false }
      ]
    }
    // this.onClicked = this.onClicked.bind(this);
  }
  onClicked(key) {
      let itemClick = this.state.list[key];
      itemClick.isComplete = (itemClick.isComplete === undefined) ? true: !itemClick.isComplete;
      let todoLists = [...this.state.list];
      todoLists[key] = itemClick;
      this.setState({
        list : todoLists
      })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.list.length > 0 && this.state.list.map((item, index) => 
            <TodoItem key={index} item={item} onClicked={() => this.onClicked(index) }/>
          )
        }
        {
          this.state.list.length === 0 && 'Nothing here'
        }
      </div>
    );
  }
}

export default App;

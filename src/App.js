import logo from './logo.svg';
import './App.css';

import TodoItem from './components/TodoItem';
import { Component } from 'react';
import down from './img/down.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newValue : '',
      list : [
        { title : 'Go to school', isComplete : true },
        { title : 'Go to work', isComplete : true },
        { title : 'Go to market', isComplete : false },
        { title : 'Go to park', isComplete : false }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
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

  onKeyUp(event) {
    if(event.keyCode === 13) {
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      this.setState({
        newValue : '',
        list : [
          { title: text, isComplete: false },
          ...this.state.list
        ]
      })
    }
  }

  onChange(event) {
    this.setState({
      newValue : event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <img src={down} width={20} height={20} />
          <input 
          type="text" placeholder="What need to be done?" 
          onKeyUp={this.onKeyUp} 
          value={this.state.newValue}
          onChange={this.onChange} />
        </div>
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

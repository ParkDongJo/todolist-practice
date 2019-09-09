import React, { Component } from 'react';
import TodoList from './components/TodoList'

class App extends Component {

  render = () => {
    return (
      <div className="App">
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import TodoListContainer from './components/TodoList/container'


class App extends Component {

  render = () => {
    return (
        <div className="App">
          <TodoListContainer></TodoListContainer>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

export default class NewRestaurantForm extends Component {
  constructor(props) {
    super(props);
  }

  state = { inputText: '' };

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  handleSave = () => {
    const { inputText } = this.state;
    const { onSave } = this.props;

    onSave(inputText);
  }

  render() {
    const { inputText } = this.state;

    return (
      <div>
        <input
          type="text"
          data-test="newRestaurantName"
          value={inputText}
          onChange={this.handleTextChange}
        />
        <button
          data-test="saveNewRestaurantButton"
          onClick={this.handleSave}>
            Save
        </button>
      </div>
    )
  }
}
import React, { Component } from "react";
import uuid from 'react-uuid';

export default class NewBoxForm extends Component {
  state = {
    height: "",
    width: "",
    color: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newBox = {...this.state, id: uuid()};
    this.props.createBox(newBox);
    this.setState({
        height: "",
        width: "",
        color: "",
    })
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="heigth"></label>
          Height:
          <input
            onChange={this.handleChange}
            type="text"
            name="height"
            value={this.state.height}
          />
          <br />
          <label htmlFor="width"></label>
          Width:
          <input
            onChange={this.handleChange}
            type="text"
            name="width"
            value={this.state.width}
          />
          <br />
          <label htmlFor="backgroundColor"></label>
          Background Color:
          <input
            onChange={this.handleChange}
            type="text"
            name="color"
            value={this.state.color}
          />
          <button>Add new box</button>
        </form>
      </div>
    );
  }
}

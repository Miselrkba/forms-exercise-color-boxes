import React, { Component } from "react";

export default class NewBoxForm extends Component {
  state = {
    height: "",
    width: "",
    color: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createBox(this.state);
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

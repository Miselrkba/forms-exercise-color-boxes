import React, { Component } from "react";
import { Box } from "./Box";
import NewBoxForm from "./NewBoxForm";

export default class BoxList extends Component {
  state = {
    boxes: [{ width: 10, height: 40, color: "red" }],
  };

  create = (newBox) => {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  };

  remove = () => {
      
  }

  render() {
    const boxes = this.state.boxes.map((box, index) => (
      <Box key={index} width={box.width} height={box.height} color={box.color} />
    ));

    return (
      <div>
        <h1>Box Maker Thingy</h1>
        <NewBoxForm createBox={this.create} />
        {boxes}
      </div>
    );
  }
}

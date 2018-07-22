import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default class CheckField extends Component {
  state = {
    checked: false
  };

  render() {
    return (
      <Checkbox
        checked={this.state.checked}
        onChange={e => {
          this.setState({ checked: !this.state.checked });
          this.props.changeVal(
            this.props.id,
            this.props.option,
            this.props.name
          );
        }}
        value={this.props.option}
        name={this.props.name}
        type="checkbox"
      />
    );
  }
}

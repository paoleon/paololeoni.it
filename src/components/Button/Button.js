import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      href: this.props.href,
      title: this.props.title,
      icon: this.props.icon,
      class: this.props.class ? this.props.class : "button"
    };
  }
  render() {
    return (
      <a href={this.state.href} className={this.state.class} target="_blank">
        <i className={this.state.icon} /> {this.state.title}
      </a>
    );
  }
}

export default Button;

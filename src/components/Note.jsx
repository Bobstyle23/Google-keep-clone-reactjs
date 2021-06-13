import React, { Component } from "react";

class Note extends Component {
  state = {};
  render(props) {
    return (
      <div className="note">
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Note;

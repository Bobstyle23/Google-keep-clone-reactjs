import React, { Component } from "react";

class Note extends Component {
  state = {};
  render() {
    return (
      <div className="note">
        <h1>This is for a title</h1>
        <p>This is for the content</p>
      </div>
    );
  }
}

export default Note;
